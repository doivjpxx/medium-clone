const express = require("express");
const router = express.Router();

const { verifyToken } = require("../middlewares/VerifyToken");

const ArticleController = require("../controllers/ArticleControllers");

router.get("/list", ArticleController.listArticles);
router.get("/author", verifyToken, ArticleController.getArticlesByUser);
router.post("/add", verifyToken, ArticleController.addArticle);
router.get("/clap/:id", verifyToken, ArticleController.clap);
router.get("/:id", ArticleController.detailArticle);
router.put("/:id", verifyToken, ArticleController.editArticle);
router.delete("/:id", verifyToken, ArticleController.deleteArticle);
router.post("/comment/:id", verifyToken, ArticleController.commentArticle);

module.exports = router;
