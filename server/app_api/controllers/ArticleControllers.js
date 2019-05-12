const Article = require("../models/Article");
const User = require("../models/User");
require("../../config/def");
const _ = require("lodash");

module.exports.addArticle = async (req, res) => {
  let userId = req.id;
  let text = req.body.text;
  let title = req.body.title;
  let description = req.body.description;
  let feature_img = req.body.feature_img;

  try {
    let article = new Article();

    article.text = text;
    article.title = title;
    article.claps = 0;
    article.description = description;
    article.feature_img = feature_img;
    article.author = userId;

    await article.save();

    return res.status(201).json({
      status: 1,
      data: article,
      message: "Đã khởi tạo 1 article"
    });
  } catch (e) {
    return res.status(500).json({
      status: 0,
      data: {},
      message: "Lỗi server " + e.message
    });
  }
};

module.exports.listArticles = async (req, res) => {
  let page = req.query.page;

  try {
    if (!page || page < 1) {
      page = 1;
    }

    var query = {};

    let articles = await Article.find(query)
      .populate('author')
      .sort({
        createAt: -1
      })
      .skip((page - 1) * global.PAGE_SIZE)
      .limit(PAGE_SIZE);

    let count = await Article.count(query);

    let items = await Promise.all(
      articles.map(async article => {
        return {
          id: article._id,
          title: article.title,
          text: article.text,
          feature_img: article.feature_img,
          claps: article.claps,
          description: article.description,
          author: article.author.name
        };
      })
    );

    return res.status(200).json({
      status: 1,
      data: {
        articles: items,
        page: page,
        total: _.ceil(count / global.PAGE_SIZE)
      },
      message: "request success !"
    });
  } catch (e) {
    return res.status(500).json({
      status: 0,
      data: {},
      message: "unknown error : " + e.message
    });
  }
};

module.exports.detailArticle = async (req, res) => {
  let id = req.params.id;
 

  try {
    const article = await Article.findOne({
      _id: id
    }).populate("author");

    return res.status(200).json({
      status: 1,
      data: {
        title: article.title,
        text: article.text,
        description: article.description,
        claps: article.claps,
        author: article.author.name,
        avatar:article.author.avatar
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

module.exports.clap = async (req, res) => {
  let id = req.params.id;

  try {
    let article = await Article.findOne({
      _id: id
    });
    article.claps = article.claps + 1;
    await article.save();
    return res.status(200).json({
      status: 1,
      data: {
        title: article.title,
        claps: article.claps
      },
      message: "Đã vỗ tay 1 cái!"
    });
  } catch (e) {
    return e;
  }
};

module.exports.commentArticle = async (req, res) => {
  let userId = req.id;
  let id = req.params.id;

  let text = req.body.text;

  try {
    let article = await Article.findOne({
      _id: id
    });

    article.comments.push({ text: text, author: userId });

    await article.save();

    return res.status(201).json({
      status: 1,
      data: article,
      message: "Đã đăng bình luận"
    });
  } catch (e) {
    return res.status(500).json({
      status: 0,
      data: {},
      message: "Lỗi server : " + e.message
    });
  }
};

module.exports.editArticle = async (req, res) => {
  const userId = req.id;
  const id = req.params.id;

  let text = req.body.text;
  let title = req.body.title;
  let description = req.body.description;

  try {
    let article = await Article.findOne({
      _id: id
    });

    if(!article){
      return res.status(400).json({
        status: 0,
        data: {},
        message: "Không tìm thấy bài viết"
      })
    }

    if(article.author._id !== userId){
      return res.status(400).json({
        status: 0,
        data: {},
        message: "Bạn không có quyền chỉnh sửa ở đây"
      })
    }

    article.text = text;
    article.title = title;
    article.description = description;
    article.feature_img = feature_img;

    await article.save();

    return res.status(200).json({
      status: 1,
      data: {
        article
      },
      message: "Bài viết đã chỉnh sửa thành công!"
    })
  }

  catch(e){
    return res.status(500).json({
      status: 0,
      data: {},
      message: "Lỗi server : " + e.message
    })
  }
}

module.exports.deleteArticle = async (req, res) => {
  const userId = req.id;
  const id = req.params.id;

  try {
    let article = await Article.findOne({
      _id: id
    });

    if(article.author._id.toString() !== userId.toString()) {
      console.log(userId);
      console.log(article.author);
      return res.status(400).json({
        status: 0,
        data: {},
        message: "Bạn không có đặc quyền để xóa"
      })
    }

    article = await Article.findOneAndDelete({
      _id: id
    })

    return res.status(200).json({
      status: 1,
      data: {
        article
      },
      message: "Bài viết đã xóa thành công!"
    })
  }

  catch(e){
    return res.status(500).json({
      status: 0,
      data: {},
      message: "Lỗi server : " + e.message
    })
  }
}