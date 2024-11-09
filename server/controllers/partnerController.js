const Partner = require("../models/partner");
const multer = require("multer");
const { tryCatch } = require("../utils/features");

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

const uploadFiles = upload.single("partnerLogo");

const createPartner = tryCatch(async (req, res, next) => {
  const { name } = req.body;

  if (!name || !req.file) {
    return res.status(400).json({ success: false, message: "Please provide all required fields" });
  }

  const partnerLogo = req.file.path;

  const partner = new Partner({
    name,
    partnerLogo,
  });

  await partner.save();
  res.status(201).json({ success: true, data: partner });
});

const getAllPartners = tryCatch(async (req, res, next) => {
  const partners = await Partner.find();
  res.status(200).json({ success: true, data: partners });
});

const getPartnerDetails = tryCatch(async (req, res, next) => {
  const { id } = req.params;
  const partner = await Partner.findById(id);
  if (!partner) {
    return res.status(404).json({ success: false, message: "Partner not found" });
  }
  res.status(200).json({ success: true, data: partner });
});

const updatePartner = tryCatch(async (req, res, next) => {
  const { id } = req.params;
  const { name } = req.body;

  const partner = await Partner.findById(id);
  if (!partner) {
    return res.status(404).json({ success: false, message: "Partner not found" });
  }

  partner.name = name || partner.name;

  if (req.file) {
    partner.partnerLogo = req.file.path;
  }

  await partner.save();
  res.status(200).json({ success: true, data: partner });
});

const deletePartner = tryCatch(async (req, res, next) => {
  const { id } = req.params;
  const partner = await Partner.findByIdAndDelete(id);
  if (!partner) {
    return res.status(404).json({ success: false, message: "Partner not found" });
  }
  res.status(200).json({ success: true, message: "Partner deleted successfully" });
});

module.exports = {
  createPartner,
  getAllPartners,
  getPartnerDetails,
  updatePartner,
  deletePartner,
  uploadFiles,
};
