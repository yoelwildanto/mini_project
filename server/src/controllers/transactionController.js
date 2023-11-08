const { Transaction } = require("../models");

exports.getAllTransaction = async (req, res) => {
  try {
    const Transaction = await Transaction.findAll();
    res.status(200).json(Transaction);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
