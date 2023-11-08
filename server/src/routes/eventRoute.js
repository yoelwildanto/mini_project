const express = require("express");
const router = express.Router();
const {
  createEventController,
  findEventsController,
  getAllEvents,
  getEventById,
} = require("../controllers/eventController");

router.get("/", findEventsController);
router.post("/create", createEventController);
router.get("/event", getAllEvents);
router.get("/event/:id", getEventById);

module.exports = router;
