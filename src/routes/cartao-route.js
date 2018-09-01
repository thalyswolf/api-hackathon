'use strict'
const express = require('express');
const router = express.Router();
const controller = require('../controllers/cartao-controller');

router.post('/', controller.create);
router.get('/', controller.get);



module.exports = router;
