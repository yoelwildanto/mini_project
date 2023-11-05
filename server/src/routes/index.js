// routes/index.js
const express = require("express");
const router = express.Router();

router.use("/auth", require("./userRoute"));
router.use("/", require("./eventRoute"));
module.exports = router;
