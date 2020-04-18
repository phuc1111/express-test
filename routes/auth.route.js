var express = require('express');
var router = express.Router();
const db = require("../db");
var controller = require('../controller/auth.controller')
const shortid = require('shortid');
router.get('/login', controller.login)
router.post('/login', controller.postLogin)
module.exports = router;