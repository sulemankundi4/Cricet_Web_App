const Other = require("../models/other");
const multer = require("multer");
const path = require("path");
const { tryCatch } = require("../middlewares/error");

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

const createOther = tryCatch(async (req, res, next) => {
  const { firstName, lastName, fathersName, cnicNo, presentAddress, permanentAddress, dateOfBirth, gender, contactNo, email, cricketExpertise, coach, analyst, trainer, physio, masseur, sportsPhysician, commentator, expertDressDesigner, contactType, cricketCareer, firstClassCricketer, contract, majorAchievements, idealCricketer, dreamGround } = req.body;

  if (!firstName || !lastName || !fathersName || !cnicNo || !presentAddress || !permanentAddress || !dateOfBirth || !gender || !contactNo || !email || !cricketExpertise || !contactType || !cricketCareer || !firstClassCricketer || !contract || !majorAchievements || !idealCricketer || !dreamGround) {
    return next(new errorHandler("Please provide all the required fields", 400));
  }

  const cnicFront = req.files["cnicFront"] ? req.files["cnicFront"][0].path : null;
  const cnicBack = req.files["cnicBack"] ? req.files["cnicBack"][0].path : null;
  const feeSubmission = req.files["feeSubmission"] ? req.files["feeSubmission"][0].path : null;
  const picture = req.files["picture"] ? req.files["picture"][0].path : null;

  if (!cnicFront || !cnicBack || !feeSubmission || !picture) {
    return next(new errorHandler("Please provide all the required files", 400));
  }

  const other = new Other({
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
    coach,
    analyst,
    trainer,
    physio,
    masseur,
    sportsPhysician,
    commentator,
    expertDressDesigner,
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

  await other.save();
  res.status(201).json({ success: true, data: other });
});

const verifyOther = tryCatch(async (req, res, next) => {
  const { id } = req.params;
  const other = await Other.findByIdAndUpdate(id, { accountStatus: true }, { new: true });
  if (!other) {
    return next(new errorHandler("Other not found", 404));
  }
  res.status(200).json({ success: true, data: other });
});

const getAllOthers = tryCatch(async (req, res, next) => {
  const others = await Other.find();
  res.status(200).json({ success: true, data: others });
});

const getOthersDetails = tryCatch(async (req, res, next) => {
  const { id } = req.params;
  const others = await Other.findById(id);

  if (!others) {
    return next(new errorHandler("others not found", 404));
  }
  res.status(200).json({ success: true, data: others });
});

module.exports = {
  createOther,
  uploadFiles,
  getAllOthers,
  verifyOther,
  getOthersDetails,
};
