const express = require("express");
const { createBatsman, uploadFiles: uploadBatsmanFiles, getAllBatsmen, getAllBatsmans, verifyBatsman, adminLogin, getStats, getBatsmanDetails } = require("../controllers/batsman");
const { createBowler, uploadFiles: uploadBowlerFiles, getAllBowlers, verifyBowler, getBowlerDetails } = require("../controllers/bowler");
const { createOther, uploadFiles: uploadOtherFiles, getAllOthers, verifyOther, getOthersDetails } = require("../controllers/other");

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

module.exports = router;
