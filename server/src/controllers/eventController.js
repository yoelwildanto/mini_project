const {
  createEventService,
  findEventsService,
} = require("../services/eventService");
const { Event } = require("../models");

const findEventsController = async (req, res) => {
  try {
    const { province } = req.query;
    const result = await findEventsService(province);
    return res.status(200).json({
      message: "success find",
      data: result,
    });
  } catch (err) {
    throw err;
  }
};

const createEventController = async (req, res) => {
  try {
    const {
      eventName,
      date,
      province,
      city,
      address,
      price,
      eventDescription,
    } = req.body;
    // const { id } = req.user;
    const result = await createEventService(
      eventName,
      date,
      province,
      city,
      address,
      price,
      eventDescription
    );

    return res.status(200).json({
      message: "Success",
      data: result,
    });
  } catch (err) {
    return res.status(500).send(err?.message);
  }
};

const getAllEvents = async (req, res) => {
  try {
    const Events = await Event.findAll();
    res.status(200).json(Events);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const getEventById = async (req, res) => {
  try {
    const event = await Event.findByPk(req.params.id);
    if (event) {
      res.status(200).json(event);
    } else {
      res.status(404).json({ message: "Event not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  createEventController,
  findEventsController,
  getAllEvents,
  getEventById,
};
