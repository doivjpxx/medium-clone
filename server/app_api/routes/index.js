const express = require('express');
const router = express.Router();

const articles = require('./articles');
const users = require('./users');
const images = require('./images');

//Users
router.use('/v1/users', users);

//Articles
router.use('/v1/articles', articles);

//Images
router.use('/v1/images', images);

module.exports = router;