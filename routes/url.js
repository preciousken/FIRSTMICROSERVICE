const express = require('express');
const { Redirect } = require('../controller/url');
const router = express.Router();

router.get('/:urlId',Redirect)

module.exports = router