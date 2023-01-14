const express = require('express');
const { Short } = require('../controllers/url');
const router = express.Router();

router.post('/short',Short)

module.exports = router