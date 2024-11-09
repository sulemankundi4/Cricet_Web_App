const mongoose = require("mongoose");

const batsmanSchema = new mongoose.Schema({
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
  cricketExpertise: { type: String, default: "batsman" },
  batsmanHand: { type: String, required: true },
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
  accountStatus: { type: Boolean, default: false },
  isFeatured: { type: Boolean, default: false },
});

module.exports = mongoose.models.Batsman || mongoose.model("Batsman", batsmanSchema);
