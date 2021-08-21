const User = require("../models/Users");
const read = (req, res, next) => {
  const userID = req.params.id;
  User.findById(userID)
    .exec()
    .then((user) => {
      if (!user) return res.status(400).json({ error: "user not found" });

      const { role, _id, name, email, createdAt, updatedAt, designation,showOnce } =
        user;
      return res.json({
        role,
        _id,
        name,
        email,
        createdAt,
        updatedAt,
        designation,
        showOnce,
      });
    })
    .catch((error) => {
      if (error) return res.status(400).json({ error: error });
    });
};
const update = (req, res, next) => {
  const {
    designation,
    collegeName,
    department,
    country,
    state,
    year,
    semester,
    name,
    password,
    showOnce,
  } = req.body;
  User.findOne({ _id: req.user._id })
    .then((user) => {
      if (!user) return res.status(400).json({ error: "user not found" });
      user.name = name || user.name;

      if (password) {
        if (password.length < 6) {
          return res
            .status(400)
            .json({ error: "password should be min 6 long" });
        } else {
          user.password = password;
        }
      }
      if (designation) {
        user.designation = designation;
      }
      if(showOnce){
        user.showOnce = showOnce;
      }
      if (collegeName) {
        user.collegeName = collegeName;
      }
      if (department) {
        user.department = department;
      }
      if (country) {
        user.country = country;
      }
      if (state) {
        user.state = state;
      }
      if (year) {
        user.year = year;
      }
      if (semester) {
        user.semester = semester;
      }
      user
        .save()
        .then((updated) => {
          updated.hashed_password = undefined;
          updated.salt = undefined;
          return res.json({ updated });
        })
        .catch((err) => {
          return res.status(400).json(err);
        });
    })
    .catch((error) => {
      return res.status(400).json(error);
    });
};

module.exports = { read, update };
