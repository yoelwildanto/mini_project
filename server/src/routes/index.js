// routes/index.js
const express = require("express");
const router = express.Router();

const userRoute = require("./userRoute");
const eventRoute = require("./eventRoute");
const transactionRoute = require("./transactionRoute");

module.exports = { userRoute, eventRoute, transactionRoute };
