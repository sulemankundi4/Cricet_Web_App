const mongoose = require("mongoose");

const partnerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  partnerLogo: { type: String, required: true },
});

module.exports = mongoose.model("Partner", partnerSchema);
