const express = require("express");
const router = express.Router();

const { verifyToken } = require("../middlewares/VerifyToken");

const UserController = require("../controllers/UserControllers");

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.get("/me", verifyToken, UserController.detailUser);
router.post("/follow/:id", verifyToken, UserController.followingUser);
router.post("/unfollow/:id", verifyToken, UserController.unfollowingUser);

module.exports = router;
