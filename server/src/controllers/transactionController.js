const { Transaction } = require("../models");

const getAllTransaction = async (req, res) => {
  try {
    const Transaction = await Transaction.findAll();
    res.status(200).json(Transaction);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

//   const getEventById = async (req, res) => {
//     try {
//       const event = await Event.findByPk(req.params.id);
//       if (event) {
//         res.status(200).json(event);
//       } else {
//         res.status(404).json({ message: "Event not found" });
//       }
//     } catch (error) {
//       res.status(500).json({ message: "Server error" });
//     }
//   };

module.exports = {
  getAllTransaction,
  // getEventById,
};
