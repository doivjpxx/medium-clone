const express = require("express");
const router = express.Router();

const ImageController = require("../controllers/ImageControllers");

router.post("/upload", ImageController.upload);

module.exports = router;