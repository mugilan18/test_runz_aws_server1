const router = require("express").Router();
const authController = require("../controllers/auth");
const {
  userSignUpVaidator,
  userSignInVaidator,
  forgotPassWDVaidator,
  resetPassWDVaidator,
} = require("../validators/auth");
const { runValidation } = require("../validators");
router.post(
  "/signup",
  userSignUpVaidator,
  runValidation,
  authController.authSignUpPost
);
router.post(
  "/signin",
  userSignInVaidator,
  runValidation,
  authController.authSignInPost
);
router.post("/account_activate", authController.authSignAccountActivate);
router.put(
  "/forgot_password",
  forgotPassWDVaidator,
  runValidation,
  authController.forgotPassWD
);
router.post(
  "/reset_password",
  resetPassWDVaidator,
  runValidation,
  authController.resetPassWD
);
router.post("/google_login", authController.googleLogin);
router.post("/facebook_login", authController.facebookLogin);

module.exports = router;
