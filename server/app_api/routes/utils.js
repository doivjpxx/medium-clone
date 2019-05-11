const express = require("express");
const router = express.Router();

const UtilController = require("../controllers/utils/UtilController");

router.get("/top/articles", UtilController.topArticles);

module.exports = router;