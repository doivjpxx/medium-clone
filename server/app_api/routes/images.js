const express = require("express");
const router = express.Router();
const {verifyToken} = require('../middlewares/VerifyToken');

const ImageController = require("../controllers/ImageControllers");

router.get("/all", verifyToken, ImageController.getAll);
router.post("/upload", ImageController.upload);

module.exports = router;