const Article = require("../../models/Article");

module.exports.topArticles = async (req, res) => {
  try {
    const articles = await Article.find()
      .populate("author")
      .sort({ claps: -1 })
      .limit(10);

    let items = await Promise.all(
      articles.map(async article => {
        return {
          _id: article._id,
          title: article.title,
          description: article.description,
          claps: article.claps,
          author: {
            name: article.author.name,
            avatar: article.author.avatar,
            _id: article.author._id
          }
        };
      })
    );

    return res.status(200).json({
      status: 1,
      data: {
        items
      },
      message: "success"
    });
  } catch (e) {
    return res.status(500).json({
      status: 0,
      data: {},
      message: "Lỗi server" + e.error
    });
  }
};
