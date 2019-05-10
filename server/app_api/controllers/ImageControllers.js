const multiparty = require("multiparty");
const Image = require("../models/Image");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dxxxg73po",
  api_key: "137497497448968",
  api_secret: "23KzjuPC_6rn9y7Qq3ClUpK7OHA"
});

module.exports.upload = async (req, res, next) => {
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