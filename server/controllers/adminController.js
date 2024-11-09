const Batsman = require("../models/batsman");
const Bowler = require("../models/bowler");
const Event = require("../models/event");
const multer = require("multer");
const Other = require("../models/other");
const { tryCatch, errorHandler } = require("../utils/features");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

const uploadFiles = upload.array("pictures", 10);

const toggleFeaturedStatus = tryCatch(async (req, res, next) => {
  const { type, id } = req.params;

  let model;
  if (type === "batsman") {
    model = Batsman;
  } else if (type === "bowler") {
    model = Bowler;
  } else if (type === "other") {
    model = Other;
  } else {
    return res.status(400).json({ success: false, message: "Invalid type" });
  }

  const item = await model.findById(id);

  if (!item) {
    return res.status(404).json({ success: false, message: `${type} not found` });
  }

  item.isFeatured = !item.isFeatured;
  await item.save();

  res.status(200).json({ success: true, data: item });
});

const deleteItem = tryCatch(async (req, res, next) => {
  const { type, id } = req.params;

  let model;
  if (type === "batsman") {
    model = Batsman;
  } else if (type === "bowler") {
    model = Bowler;
  } else if (type === "other") {
    model = Other;
  } else {
    return res.status(400).json({ success: false, message: "Invalid type" });
  }

  const item = await model.findByIdAndDelete(id);

  if (!item) {
    return res.status(404).json({ success: false, message: `${type} not found` });
  }

  res.status(200).json({ success: true, message: `${type} deleted successfully` });
});

// EVENTS

const createEvent = tryCatch(async (req, res, next) => {
  const { name, startDate, description } = req.body;

  if (!name || !startDate || !description) {
    return next(new errorHandler("Please provide all required fields", 404));
  }

  const pictures = req.files.map((file) => file.path);
  if (pictures && pictures.length === 0) {
    return next(new errorHandler("Please provide all required fields", 404));
  }

  const event = new Event({
    name,
    startDate,
    description,
    pictures,
  });

  await event.save();
  res.status(201).json({ success: true, data: event });
});

const getAllEvents = tryCatch(async (req, res, next) => {
  const events = await Event.find();
  res.status(200).json({ success: true, data: events });
});

const getEventDetails = tryCatch(async (req, res, next) => {
  const { id } = req.params;
  const event = await Event.findById(id);
  if (!event) {
    return next(new errorHandler("Event not found", 404));
  }
  res.status(200).json({ success: true, data: event });
});

const deleteEvent = tryCatch(async (req, res, next) => {
  const { id } = req.params;
  const event = await Event.findByIdAndDelete(id);
  if (!event) {
    return res.status(404).json({ success: false, message: "Event not found" });
  }
  res.status(200).json({ success: true, message: "Event deleted successfully" });
});

const updateEvent = tryCatch(async (req, res, next) => {
  const { id } = req.params;
  const { name, startDate, description } = req.body;

  const event = await Event.findById(id);

  if (!event) {
    return res.status(404).json({ success: false, message: "Event not found" });
  }

  event.name = name || event.name;
  event.startDate = startDate || event.startDate;
  event.description = description || event.description;

  if (req.files && req.files.length > 0) {
    event.pictures = req.files.map((file) => file.path);
  }

  await event.save();
  res.status(200).json({ success: true, data: event });
});

module.exports = {
  toggleFeaturedStatus,
  deleteItem,
  createEvent,
  getAllEvents,
  getEventDetails,
  updateEvent,
  deleteEvent,
  uploadFiles,
};
