// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const {
  login,
  register,
  getUserData,
  getAllUser,
  getAllRole,
} = require("../controllers/userController");

router.post("/login", login);
router.post("/register", register);
router.get("/user", getAllUser);
router.get("/roles", getAllRole);

// router.get("/:id", getUserById);
// router.put("/:id", updateUser);
// router.delete("/:id", deleteUser);
// router.patch("/", authenticateToken, verifyUser);

module.exports = router;
