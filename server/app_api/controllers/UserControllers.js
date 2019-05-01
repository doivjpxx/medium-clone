const User = require("../models/User");
const Token = require("../models/Token");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../../config/config");
const _ = require("lodash");
const randomstring = require("randomstring");
const nodemailer = require("nodemailer");

module.exports.register = async (req, res) => {
  let password = req.body.password;
  let email = req.body.email;
  let name = req.body.name;

  try {
    let user = await User.findOne({
      email: email
    });

    if(user){
      return res.status(403).json({
        status: 0,
        data: {},
        message: "Email bị trùng lặp"
      })
    }

    if(!name || name.length < 5){
      return res.status(403).json({
        status: 0,
        data: {},
        message: "Tên quá ngắn"
      })
    }

    if(!password || password.length < 5){
      return res.status(403).json({
        status: 0,
        data: {},
        message: "Password quá ngắn"
      })
    }

    user = new User();

    user.email = email;
    user.name = name;
    user.password = bcrypt.hashSync(password, 10);

    await user.save();

    let token = randomstring.generate({
      length: 10,
      charset: "alphabetic"
    });

    let confirmToken = new Token({
      _userId: user._id,
      token: token
    });

    await confirmToken.save();

    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: config.u,
        pass: config.p
      }
    });

    let info = await transporter.sendMail({
      from: `"[MEDIUM.COM]" ${config.u}`,
      to: user.email,
      subject: "Xác nhận Email ✔",
      html: `<p>Vui lòng xác nhận email qua địa chỉ: <a href="http://localhost:4000/api/v1/users/confirm/${token}">Tại đây</a></p>` // html body
    });

    return res.status(201).json({
      status: 1,
      data: {
        user: user,
        info: info
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

module.exports.confirmEmail = async (req, res) => {
  try {
    let tokenId = req.params.token;

    let confirmToken = await Token.findOne({
      token: tokenId
    });

    let user = await User.findOne({
      _id: confirmToken._userId
    });

    user.isVerified = true;
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

    return res.status(200).json({
      status: 1,
      data: { user: user, token: token },
      message: "Kích hoạt thành công!"
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

  if(!user){
    return res.status(403).json({
      status: 0,
      data: {},
      message: "Sai tài khoản hoặc mặt khẩu"
    })
  }

  if(user.isVerified === false){
    return res.status(403).json({
      status: 0,
      data: {},
      message: "Tài khoản của bạn chưa được kích hoạt"
    })
  }

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
