const Article = require("../../models/Article");

module.exports.topArticles = async (req, res) => {
  try {
    const article = await Article.find()
      .sort({ claps: -1 })
      .limit(10);
    return res.status(200).json({
      status: 1,
      data: article,
      message: "success"
    })
  } catch (e) {
    return res.status(500).json({
      status: 0,
      data: {},
      message: "Lỗi server" + e.error
    });
  }
};
