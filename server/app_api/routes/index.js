const express = require('express');
const router = express.Router();

const articles = require('./articles');
const users = require('./users');

//Users
router.use('/v1/users', users);

//Articles
router.use('/v1/articles', articles);

module.exports = router;