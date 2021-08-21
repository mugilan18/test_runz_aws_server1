const User = require("../models/Users");
const jwt = require("jsonwebtoken");
const _ = require("lodash");
const expressJWT = require("express-jwt");
const { OAuth2Client } = require("google-auth-library");
const fetch = require("node-fetch");
require("dotenv").config();


const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  host: "smtp.mailgun.org",
  port: 587,
  secure: false, 
  auth: {
    user: `${process.env.MAILGUN_USER}`, 
    pass: `${process.env.MAILGUN_PASS}`,
  },
});
 
const authSignUpPost = (req, res, next) => {
  const {email, password } = req.body;

  User.findOne({ email: email }).exec((err, user) => {
    if (user) return res.status(400).json({ error: "Email is taken" });
    const token = jwt.sign(
      { email, password },
      process.env.JWT_ACC_ACTIVATION,
      { expiresIn: "10m" }
    );
    const sendmail = async ()=>{
      const emailData = {
        from: process.env.EMAIL_FROM,
        to: email,
        subject: `Account Activation Link for ${email} user`,
        text: "Account Activation",
        html: `
          <p>Please use following link to activate your account</p>
          <p>${process.env.CLIENT_URL}/auth/activate/${token}</p>
          <hr />
          <p>Contain sensitive information</p>
          <p>${process.env.CLIENT_URL}</p>
        `,
      };
      let info = await transporter.sendMail(emailData);
      console.log("Message sent: %s", info.messageId);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    }
    sendmail().then(()=>{
      return res.json({
        message: `Email has been sent to ${email} to activate your account`,
      });
    }).catch(err=>{
      console.error(err)
    })
    
    });
};


const authSignAccountActivate = (req, res, next) => {
  const { token } = req.body;
  if (token) {
    jwt.verify(token, process.env.JWT_ACC_ACTIVATION, function (err, decoded) {
      if (err) {
        console.error("JWT VERIFY IN ACCOUNT ACTIVATION ERROR", err);
        return res.status(401).json({ error: "Expiry link sign up" });
      }
      const {email, password } = jwt.decode(token) || decoded;
      let newUser = new User({  email, password });
      newUser
        .save()
        .then((success) => {
          return res.json({ message: "signup success" });
        })
        .catch((err) => {
          console.error("Save user in account activation error", err);
          return res
            .status(401)
            .json({ error: "Error savng user in database" });
        });
    });
  } else {
    return res.json({ message: "Something went wrong" });
  }
};

const authSignInPost = (req, res, next) => {
  const { email, password } = req.body;
  User.findOne({ email })
    .exec()
    .then((user) => {
      if (!user.authenticate(password)) {
        return res.status(400).json({ error: "Email or Password not match" });
      }
      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });
      const { _id, email, role } = user;
      return res.json({
        token,
        user: { _id, email, role },
      });
    })
    .catch((error) => {
      return res.status(400).json({ error: "User with that email not exits" });
    });
};

const requireSignIn = expressJWT({
  secret: process.env.JWT_SECRET,
  algorithms: ["sha1", "RS256", "HS256"],
});

const adminMiddleware = (req, res, next) => {
  User.findById(req.user._id)
    .exec()
    .then((user) => {
      if (!user)
        return res
          .status(400)
          .json({ error: "User with this email does'nt exits" });
      if (user.role !== "admin") {
        return res.status(400).json({ error: "Admin resource access denied" });
      }
      req.profile = user;
      next();
    })
    .catch((error) => {
      return res.status(400).json({ error });
    });
};

const forgotPassWD = (req, res, next) => {
  const { email } = req.body;
  User.findOne({ email })
    .exec()
    .then((user) => {
      if (!user)
        return res
          .status(400)
          .json({ error: "user with that email does'nt exits" });
      const token = jwt.sign(
        { _id: user._id },
        process.env.JWT_RESET_PASSWORD,
        { expiresIn: "10m" }
      );
      
      const sendmail = async ()=>{
        const emailData = {
          from: process.env.EMAIL_FROM,
          to: email,
          subject: `Password Reset Link`,
          text: "Account Password",
          html: `
          <p>Please use following link to reset your password</p>
          <p>${process.env.CLIENT_URL}/auth/reset_password/${token}</p>
          <hr />
          <p>Contain sensitive information</p>
          <p>${process.env.CLIENT_URL}</p>
        `,
        };
        let info = await transporter.sendMail(emailData);
      console.log("Message sent: %s", info.messageId);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    }
      return user
        .updateOne({ reset_passLink: token })
        .exec()
        .then((success) => {
          console.log("success", success);
          sendmail().then(()=>{
            return res.json({
              message: `Email has been sent to ${email} to change the password`,
            });
          }).catch(err=>{
            console.error(err)
          })
          
        })
        .catch((error) => {
          return res.status(400).json({ error });
        });
    })
    .catch((err) => {
      return res.status(400).json({ error: err.message });
    });
};
const resetPassWD = (req, res, next) => {
  const { resetPasswordLink, newPassword } = req.body;
  if (resetPasswordLink) {
    jwt.verify(
      resetPasswordLink,
      process.env.JWT_RESET_PASSWORD,
      function (err, decoded) {
        if (err)
          return res.status(400).json({ error: "Link experied try again" });
        User.findOne({ reset_passLink: resetPasswordLink })
          .exec()
          .then((user) => {
            const updatedFields = {
              password: newPassword,
              reset_passLink: "",
            };
            user = _.extend(user, updatedFields);
            user
              .save()
              .then((result) => {
                return res.json({ message: `login with new passwd` });
              })
              .catch((error) => {
                return res
                  .status(400)
                  .json({ error: "Error reseting user password" });
              });
          })
          .catch((err) => {
            return res.status(400).json({ error: "Something went wrong" });
          });
      }
    );
  }
};

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const googleLogin = (req, res, next) => {
  const { idToken } = req.body;
  client
    .verifyIdToken({ idToken, audience: process.env.GOOGLE_CLIENT_ID })
    .then((resp) => {
      console.log(resp);
      const { email_verified, name, email } = resp.payload;
      if (email_verified) {
        User.findOne({ email })
          .exec()
          .then((user) => {
            if (!user) {
              let password = email + process.env.JWT_SECRET;
              user = new User({ name, email, password });
              user
                .save()
                .then((resp) => {
                  const token = jwt.sign(
                    { _id: resp._id },
                    process.env.JWT_SECRET,
                    {
                      expiresIn: "7d",
                    }
                  );
                  const { _id, email, name, role, designation } = resp;
                  return res.json({
                    token,
                    user: { _id, email, name, role, designation },
                  });
                })
                .catch((error) => {
                  console.log("on user save google ", error);
                  return res
                    .status(400)
                    .json({ error: "User signup google error" });
                });
            } else {
              const token = jwt.sign(
                { _id: user._id },
                process.env.JWT_SECRET,
                {
                  expiresIn: "7d",
                }
              );
              const { _id, email, name, role, designation } = user;
              return res.json({
                token,
                user: { _id, email, name, role, designation },
              });
            }
          })
          .catch((error) => {});
      } else {
        return res.status(400).json({ error: "Google login failed" });
      }
    });
};

const facebookLogin = (req, res, next) => {
  console.log("facebook login : ", req.body);
  const { userID, accessToken } = req.body;
  const URL = `https://graph.facebook.com/v2.11/${userID}/?fields=id,name,email&access_token=${accessToken}`;
  return fetch(URL, { method: "GET" })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      const { email, name } = response;

      User.findOne({ email })
        .exec()
        .then((user) => {
          if (user) {
            const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
              expiresIn: "7d",
            });
            const { _id, email, name, role, designation } = user;
            return res.json({
              token,
              user: { _id, email, name, role, designation },
            });
          } else {
            let password = email + process.env.JWT_SECRET;
            user = new User({ name, email, password });
            user
              .save()
              .then((resp) => {
                const token = jwt.sign(
                  { _id: resp._id },
                  process.env.JWT_SECRET,
                  {
                    expiresIn: "7d",
                  }
                );
                const { _id, email, name, role, designation } = resp;
                return res.json({
                  token,
                  user: { _id, email, name, role, designation },
                });
              })
              .catch((error) => {
                console.log("on user save facebook ", error);
                return res
                  .status(400)
                  .json({ error: "User signup facebook error" });
              });
          }
        })
        .catch((error) => {
          res.json({ error: "Facebook login failed" });
        });
    });
};

module.exports = {
  authSignUpPost,
  authSignAccountActivate,
  authSignInPost,
  requireSignIn,
  adminMiddleware,
  forgotPassWD,
  resetPassWD,
  googleLogin,
  facebookLogin,
};
