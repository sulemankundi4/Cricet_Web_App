const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  startDate: { type: Date, required: true },
  description: { type: String, required: true },
  pictures: [{ type: String, required: true }],
});

module.exports = mongoose.model("Event", eventSchema);
