const Batsman = require("../models/Batsman");
const Bowler = require("../models/bowler");
const Other = require("../models/other");
const multer = require("multer");
const path = require("path");
const { errorHandler, tryCatch } = require("../utils/features");
const jwt = require("jsonwebtoken");

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

const getStats = tryCatch(async (req, res, next) => {
  const totalBatsmen = await Batsman.countDocuments();
  const verifiedBatsmen = await Batsman.countDocuments({ accountStatus: true });

  const totalBowlers = await Bowler.countDocuments();
  const verifiedBowlers = await Bowler.countDocuments({ accountStatus: true });

  const totalOthers = await Other.countDocuments();
  const verifiedOthers = await Other.countDocuments({ accountStatus: true });

  res.status(200).json({
    success: true,
    data: {
      totalBatsmen,
      verifiedBatsmen,
      totalBowlers,
      verifiedBowlers,
      totalOthers,
      verifiedOthers,
    },
  });
});

const getAllBatsmans = tryCatch(async (req, res, next) => {
  const batsmen = await Batsman.find();
  res.status(200).json({ success: true, data: batsmen });
});

const getBatsmanDetails = tryCatch(async (req, res, next) => {
  const { id } = req.params;
  const batsman = await Batsman.findById(id);
  if (!batsman) {
    return next(new errorHandler("Batsman not found", 404));
  }
  res.status(200).json({ success: true, data: batsman });
});

const verifyBatsman = tryCatch(async (req, res, next) => {
  const { id } = req.params;

  const batsman = await Batsman.findByIdAndUpdate(id, { accountStatus: true }, { new: true });

  if (!batsman) {
    return next(new errorHandler("Batsman not found", 404));
  }
  res.status(200).json({ success: true, data: batsman });
});

const adminLogin = tryCatch(async (req, res, next) => {
  const { email, password } = req.body;

  // Hardcoded admin credentials
  const adminEmail = "admin@gmail.com";
  const adminPassword = "123456789";

  if (email !== adminEmail || password !== adminPassword) {
    return res.status(401).json({ success: false, message: "Invalid credentials" });
  }

  // Generate JWT token
  const token = jwt.sign({ email: adminEmail }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });

  // Send token as a cookie
  res.cookie("token", token, {
    httpOnly: false,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 3600000, // 1 hour
    path: "/", // Ensure the path is set correctly
  });

  res.status(200).json({ success: true, message: "Admin logged in successfully" });
});

module.exports = {
  createBatsman,
  uploadFiles,
  getStats,
  getAllBatsmans,
  getBatsmanDetails,
  verifyBatsman,
  adminLogin,
};
