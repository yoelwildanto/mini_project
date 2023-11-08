const express = require("express");
const router = express.Router();
const { getAllTransaction } = require("../controllers/transactionController");

router.get("/transaction", getAllTransaction);

module.exports = router;
