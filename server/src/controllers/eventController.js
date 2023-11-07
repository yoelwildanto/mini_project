const {
  createEventService,
  getCategoryService,
  getLocationService,
  getEventsService,
  getBannerService,
} = require("../services/eventService");

const createEventController = async (req, res) => {
  try {
    const {
      eventName,
      categoryId,
      locationId,
      userId,
      startDate,
      endDate,
      time,
      eventStatus,
      description,
      address,
      hargatiket,
      totaltiket,
    } = req.body;
    console.log(req.body);

    const result = await createEventService(
      eventName,
      categoryId,
      locationId,
      userId,
      startDate,
      endDate,
      time,
      eventStatus,
      description,
      address,
      hargatiket,
      totaltiket,
      req.file?.filename

    );
    return res.status(200).json({
      message: "success",
      data: result,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send(err.message);
  }
};

const getCategoryController = async (req, res) => {
  try {
    const result = await getCategoryService();
    return res.status(200).json({
      message: "success",
      data: result,
    });
  } catch (err) {
    throw err;
  }
};

const getLocationController = async (req, res) => {
  try {
    const result = await getLocationService();
    return res.status(200).json({
      message: "success",
      data: result,
    });
  } catch (err) {
    throw err;
  }
};

const getEventsController = async (req, res) => {
  try {
    const result = await getEventsService();
    return res.status(200).json({
      message: "success",
      data: result,
    });
  } catch (err) {
    throw err;
  }
};

const getBannerController = async (req, res) => {
  try {
    const result = await getBannerService();
    return res.status(200).json({
      message: "success",
      data: result,
    });
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createEventController,
  getCategoryController,
  getLocationController,
  getEventsController,
  getBannerController,
};

