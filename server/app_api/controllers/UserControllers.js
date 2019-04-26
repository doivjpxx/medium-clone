const User = require("../models/User");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../../config/config");
const _ = require("lodash");

module.exports.register = async (req, res) => {
  let password = req.body.password;
  let email = req.body.email;
  let name = req.body.name;

  try {
    let user = new User();
    user.email = email;
    user.name = name;
    user.password = bcrypt.hashSync(password, 10);

    await user.save();

    let token = jwt.sign(
      {
        id: user._id
      },
      config.secret,
      {
        expiresIn: 86400 // expires in 24 hours
      }
    );

    return res.status(201).json({
      status: 1,
      data: {
        user
      },
      token: token,
      message: "register success!"
    });
  } catch (e) {
    return res.status(500).json({
      status: 0,
      data: {},
      message: "unknown error : " + e.message
    });
  }
};

module.exports.login = async (req, res) => {
  var email = req.body.email;
  var password = req.body.password;

  var user = await User.findOne({
    email: email
  });

  if (await bcrypt.compareSync(password, user.password)) {
    var token = jwt.sign(
      {
        id: user._id
      },
      config.secret,
      {
        expiresIn: 86400 // expires in 24 hours
      }
    );

    return res.status(200).json({
      status: 1,
      data: {
        auth: true,
        token: token
      },
      message: "login success !"
    });
  } else {
    return res.status(403).json({
      status: 0,
      data: {},
      message: "incorrect password !"
    });
  }
};

module.exports.logout = async (req, res) => {
  res.status(200).send({
    auth: false,
    token: null
  });
};

module.exports.detailUser = async (req, res) => {
  let userId = req.id;
  try {
    const user = await User.findOne({
      _id: userId
    });

    return res.status(200).json({
      status: 1,
      data: {
        name: user.name,
        email: user.email,
        avatar: user.avatar,
        followers: user.followers,
        following: user.following
      }
    });
  } catch (e) {
    return res.status(500).json({
      status: 0,
      data: {},
      message: "Lỗi server : " + e.message
    });
  }
};

module.exports.followingUser = async (req, res) => {
  let userId = req.id;
  let id = req.params.id;
  try {
    let currentUser = await User.findOne({
      _id: userId
    });

    let user = await User.findOne({
      _id: id
    });

    console.log(currentUser.following);
    console.log();

    if (
      _.uniqBy(currentUser.following, id).length > 0 ||
      _.uniqBy(user.followers, userId).length > 0
    ) {
      return res.status(403).json({
        status: 0,
        data: {},
        message: "Bạn đã theo dõi người này rồi!"
      });
    }

    currentUser.following.push(id);
    user.followers.push(currentUser);

    await currentUser.save();
    await user.save();

    return res.status(201).json({
      status: 1,
      data: {
        currentUser: currentUser.following,
        user: user.followers
      }
    });
  } catch (e) {
    return res.status(500).json({
      status: 0,
      data: {},
      message: "Lỗi server : " + e.message
    });
  }
};

module.exports.unfollowingUser = async (req, res) => {
  let userId = req.id;
  let id = req.params.id;
  try {
    let currentUser = await User.findOne({
      _id: userId
    });

    let user = await User.findOne({
      _id: id
    });

    currentUser.following = currentUser.following.filter(
      id => user.followers === id
    );
    user.followers = user.followers.filter(id => currentUser.following === id);

    await currentUser.save();
    await user.save();

    return res.status(201).json({
      status: 1,
      data: {
        currentUser: currentUser.following,
        user: user.followers
      }
    });
  } catch (e) {
    return res.status(500).json({
      status: 0,
      data: {},
      message: "Lỗi server : " + e.message
    });
  }
};
