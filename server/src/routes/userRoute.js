// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const {
  login,
  register,
  resetPassword,
  handleResetPassword,
  getUserData,
} = require("../controllers/userController");
// const validateRequest = require("../middleware/validateRequest");
// const authenticate = require("../middleware/authenticate");
// const validateCreateUser = require("../middleware/validateCreateUser");
// const authenticateToken = require("../middleware/authenticateToken");

router.post("/login", login);
router.post("/register", register);

// router.post(
//   "/reset-password",
//   [body("email").isEmail().withMessage("Email must be valid")],
//   validateRequest,
//   resetPassword
// );

// router.post(
//   "/reset-password/:token",
//   [
//     param("token").notEmpty().withMessage("Token is required"),
//     body("password").notEmpty().withMessage("Password is required"),
//     body("confirmPassword")
//       .notEmpty()
//       .withMessage("Confirm password is required")
//       .custom((value, { req }) => value === req.body.password)
//       .withMessage("Passwords must match"),
//   ],
//   validateRequest,
//   handleResetPassword
// );

// router.post("/", validateCreateUser, createUser);
// router.get("/", getUserData);
// router.get("/:id", getUserById);
// router.put("/:id", updateUser);
// router.delete("/:id", deleteUser);
// router.patch("/", authenticateToken, verifyUser);

module.exports = router;
