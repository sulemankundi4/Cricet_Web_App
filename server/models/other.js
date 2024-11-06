const mongoose = require("mongoose");

const otherSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  fathersName: { type: String, required: true },
  cnicNo: { type: String, required: true },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  gender: { type: String, required: true },
  contactNo: { type: String, required: true },
  email: { type: String, required: true },
  cricketExpertise: { type: String, default: "other" },
  coach: { type: Boolean, default: false },
  analyst: { type: Boolean, default: false },
  trainer: { type: Boolean, default: false },
  physio: { type: Boolean, default: false },
  masseur: { type: Boolean, default: false },
  sportsPhysician: { type: Boolean, default: false },
  commentator: { type: Boolean, default: false },
  expertDressDesigner: { type: Boolean, default: false },
  contactType: { type: String, required: true },
  cricketCareer: { type: String, required: true },
  firstClassCricketer: { type: Boolean, required: true },
  contract: { type: Boolean, required: true },
  majorAchievements: { type: String, required: true },
  idealCricketer: { type: String, required: true },
  dreamGround: { type: String, required: true },
  cnicFront: { type: String, required: true },
  cnicBack: { type: String, required: true },
  feeSubmission: { type: String, required: true },
  picture: { type: String, required: true },
});

module.exports = mongoose.model("Other", otherSchema);