const express = require("express");
const { createBatsman, uploadFiles: uploadBatsmanFiles } = require("../controllers/batsman");
const { createBowler, uploadFiles: uploadBowlerFiles } = require("../controllers/bowler");
const { createOther, uploadFiles: uploadOtherFiles } = require("../controllers/other");

const router = express.Router();

router.post("/batsman/new", uploadBatsmanFiles, createBatsman);
router.post("/bowler/new", uploadBowlerFiles, createBowler);
router.post("/other/new", uploadOtherFiles, createOther);

module.exports = router;
