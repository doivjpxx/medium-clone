const multiparty = require("multiparty");
const Image = require("../models/Image");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dxxxg73po",
  api_key: "137497497448968",
  api_secret: "23KzjuPC_6rn9y7Qq3ClUpK7OHA"
});

module.exports.upload = async (req, res, next) => {

  const userId = req.id;

  try {
    //create new form to upload
    let form = new multiparty.Form();

    //parse a file from form to upload
    form.parse(req);

    //check error parsing
    form.on("error", async err => {
      res.status(500).json({
        status: 0,
        message: "Error parsing form: " + err.stack
      });
    });

    form.on("file", async function(name, file) {
      let image = new Image();
      //create path to save image
      cloudinary.uploader.upload(file.path, async function(error, result) {
        image.url = result.url;
        image.author = userId;
        await image.save();
        return res.json({
          status: 1,
          data: image,
          success: true,
          message: "request success !"
        });
      });
    });
  } catch (e) {
    return res.status(500).json({
      status: 0,
      data: {},
      message: "unknown error : " + e.message
    });
  }
};

module.exports.getAll = async (req, res) => {

  const userId = req.id;

  try{
    const images = await Image.find({author: userId}, query)
    .populate("author")
    .sort({
      createAt: -1
    })
    .skip((page - 1) * global.PAGE_SIZE)
    .limit(PAGE_SIZE);

    return res.status(200).json({
      status: 1,
      data: images,
      message: "Lấy danh sách hình ảnh thành công"
    })
  }
  catch(e){
    return res.status(500).json({
      status: 0,
      data: {},
      message: "Lỗi server" + e.message
    })
  }
}