// routes/index.js
const express = require("express");
const router = express.Router();

const userRoute = require("./userRoute");
const eventRoute = require("./eventRoute");
module.exports = { userRoute, eventRoute };
