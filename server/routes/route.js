const express = require("express");
const { createBatsman, uploadFiles: uploadBatsmanFiles, getAllBatsmen, getAllBatsmans, verifyBatsman, adminLogin, getStats, getBatsmanDetails } = require("../controllers/batsman");
const { createBowler, uploadFiles: uploadBowlerFiles, getAllBowlers, verifyBowler, getBowlerDetails } = require("../controllers/bowler");
const { createOther, uploadFiles: uploadOtherFiles, getAllOthers, verifyOther, getOthersDetails } = require("../controllers/other");
const { toggleFeaturedStatus, deleteItem, createEvent, getAllEvents, uploadFiles, getEventDetails, updateEvent, deleteEvent } = require("../controllers/adminController");
const { createPartner, getAllPartners, getPartnerDetails, updatePartner, deletePartner, uploadFiles: uploadPartnerImg } = require("../controllers/partnerController");

const router = express.Router();

router.post("/batsman/new", uploadBatsmanFiles, createBatsman);
router.put("/batsman/verify/:id", verifyBatsman);
router.get("/batsman/all", getAllBatsmans);
router.get("/batsman/details/:id", getBatsmanDetails);

router.post("/bowler/new", uploadBowlerFiles, createBowler);
router.put("/bowler/verify/:id", verifyBowler);
router.get("/bowler/all", getAllBowlers);
router.get("/bowler/details/:id", getBowlerDetails);

router.get("/other/all", getAllOthers);
router.post("/other/new", uploadOtherFiles, createOther);
router.put("/other/verify/:id", verifyOther);
router.get("/other/details/:id", getOthersDetails);

router.post("/admin/login", adminLogin);
router.get("/stats", getStats);

// ADMIN STUFF
router.put("/feature/:type/:id", toggleFeaturedStatus);
router.delete("/delete/:type/:id", deleteItem); // Add this route

// EVENT
router.post("/events/new", uploadFiles, createEvent);
router.get("/events/all", getAllEvents);
router.get("/events/:id", getEventDetails);
router.put("/events/:id", uploadFiles, updateEvent);
router.delete("/events/:id", deleteEvent);

//PARTNER

router.post("/partners/new", uploadPartnerImg, createPartner);
router.get("/partners/all", getAllPartners);
router.get("/partners/:id", getPartnerDetails);
router.put("/partners/:id", uploadPartnerImg, updatePartner);
router.delete("/partners/:id", deletePartner);
module.exports = router;
