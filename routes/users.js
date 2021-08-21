const router = require("express").Router();
const usersController = require("../controllers/users");
const authController = require("../controllers/auth");

router.get("/users/:id", authController.requireSignIn, usersController.read);
router.patch(
  "/users/update",
  authController.requireSignIn,
  usersController.update
);
router.patch(
  "/admin/update",
  authController.requireSignIn,
  authController.adminMiddleware,
  usersController.update
);

module.exports = router;
