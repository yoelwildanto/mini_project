// routes/index.js
const express = require("express");
const router = express.Router();

const userRoute = require("./userRoute");
module.exports = { userRoute };
