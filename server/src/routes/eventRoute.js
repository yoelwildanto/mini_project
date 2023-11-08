const express = require("express");
const router = express.Router();
const { uploadEventFile } = require("../middleware/multer");
const {
  createEventController,
  getEventsController,
  getCategoryController,
  getLocationController,
  getBannerController,
  eventDetailController
} = require("../controllers/eventController");

router.get("/category-list", getCategoryController);
router.get("/location-list", getLocationController);
router.post("/add-event", uploadEventFile, createEventController);
router.get("/list-all-event", getEventsController);
router.get("/detail-event/:id", eventDetailController);
router.get("/Banner", getBannerController);

module.exports = router;