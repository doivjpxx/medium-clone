const express = require('express');
const router = express.Router();

const articles = require('./articles');
const users = require('./users');
const images = require('./images');
const utils = require('./utils');

//Users
router.use('/v1/users', users);

//Articles
router.use('/v1/articles', articles);

//Images
router.use('/v1/images', images);

//Others
router.use('/v1/utils', utils)

module.exports = router;