const express = require("express");
const router = express.Router();
const {
  createEventController,
  findEventsController,
} = require("../controllers/eventController");

router.get("/", findEventsController);
router.post("/create", createEventController);

module.exports = router;
