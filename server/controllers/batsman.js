const Batsman = require("../models/Batsman");
const Bowler = require("../models/bowler");
const Other = require("../models/other");
const multer = require("multer");
const path = require("path");
const { errorHandler, tryCatch } = require("../utils/features");
// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

const uploadFiles = upload.fields([
  { name: "cnicFront", maxCount: 1 },
  { name: "cnicBack", maxCount: 1 },
  { name: "feeSubmission", maxCount: 1 },
  { name: "picture", maxCount: 1 },
]);

const createBatsman = tryCatch(async (req, res, next) => {
  const { firstName, lastName, fathersName, cnicNo, presentAddress, permanentAddress, dateOfBirth, gender, contactNo, email, cricketExpertise, batsmanHand, contactType, cricketCareer, firstClassCricketer, contract, majorAchievements, idealCricketer, dreamGround } = req.body;

  if (!firstName || !lastName || !fathersName || !cnicNo || !presentAddress || !permanentAddress || !dateOfBirth || !contactNo || !email || !cricketExpertise || !batsmanHand || !contactType || !cricketCareer || !firstClassCricketer || !contract || !majorAchievements || !idealCricketer || !dreamGround) {
    return next(new errorHandler("Please provide all the required fields", 400));
  }

  const cnicFront = req.files["cnicFront"] ? req.files["cnicFront"][0].path : null;
  const cnicBack = req.files["cnicBack"] ? req.files["cnicBack"][0].path : null;
  const feeSubmission = req.files["feeSubmission"] ? req.files["feeSubmission"][0].path : null;
  const picture = req.files["picture"] ? req.files["picture"][0].path : null;

  if (!cnicFront || !cnicBack || !feeSubmission || !picture) {
    return next(new errorHandler("Please provide all the required files", 400));
  }

  const batsman = new Batsman({
    firstName,
    lastName,
    fathersName,
    cnicNo,
    presentAddress,
    permanentAddress,
    dateOfBirth,
    gender,
    contactNo,
    email,
    cricketExpertise,
    batsmanHand,
    contactType,
    cricketCareer,
    firstClassCricketer,
    contract,
    majorAchievements,
    idealCricketer,
    dreamGround,
    cnicFront,
    cnicBack,
    feeSubmission,
    picture,
  });

  await batsman.save();
  res.status(201).json({ success: true, data: batsman });
});

module.exports = {
  createBatsman,
  uploadFiles,
};
