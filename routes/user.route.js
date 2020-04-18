var express = require('express');
var router = express.Router();
const db = require("../db");
var controller = require('../controller/user.controller')
const shortid = require('shortid');
var authMiddleware = require('../middleware/auth.middleware')
var userValidate = require('../validate/user.validate')
    // router.get('/:id', controller.get)
router.get('/', authMiddleware.requireAuth, controller.index)
router.get('/create', controller.create)

router.post('/create', userValidate.postCreate, controller.postCreate)

router.get('/search', controller.search)
module.exports = router;