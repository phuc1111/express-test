var express = require('express');
var router = express.Router();
const db = require("../db");
var controller = require('../controller/user.controller')
const shortid = require('shortid');
var authMiddleware = require('../middleware/auth.middleware')
var userValidate = require('../validate/user.validate')
    // router.get('/:id', controller.get)

router.get('/', controller.index)
router.get('/:id', controller.detail)
router.get('/create', controller.create)
router.post('/create', controller.postCreate)
router.delete('/delete/:id', controller.delete)
router.patch('/update/:id', controller.update)
    // router.delete('/delete/:userId', controller.delete)

// router.update('/delete/:userId', controller.delete)
module.exports = router;