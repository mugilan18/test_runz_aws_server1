const { check } = require("express-validator");

exports.userSignUpVaidator = [
  check("email").isEmail().withMessage("Provide correct Email"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be more than 6 characters"),
];

exports.userSignInVaidator = [
  check("email").isEmail().withMessage("Provide correct Email"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be more than 6 characters"),
];

exports.forgotPassWDVaidator = [
  check("email").not().isEmpty().isEmail().withMessage("Provide correct Email"),
];
exports.resetPassWDVaidator = [
  check("newPassword")
    .not()
    .isEmpty()
    .isLength({ min: 6 })
    .withMessage("Password must be more than 6 characters"),
];
