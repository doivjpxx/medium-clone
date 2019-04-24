var config = {};

config.DB = {};
config.SERVER = {};

config.SERVER.PORT =  process.env.PORT || 4000;
config.SERVER.IP = process.env.IP || "0.0.0.0";

config.DB.URI = "127.0.0.1:27017";
config.DB.DATABASE_NAME = "medium_clone";

module.exports = config;