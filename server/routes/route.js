const express = require("express");
const { createBatsman, uploadFiles } = require("../controllers/batsman");

const router = express.Router();

router.post("/batsman/new", uploadFiles, createBatsman);

module.exports = router;
