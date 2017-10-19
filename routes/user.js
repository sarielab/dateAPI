'use strict'
const express = require('express');
let router = express.Router();
const userCtrl = require('../controllers/userCtrl');

router.get('/users', userCtrl.getUsers) //
router.get('/user/:id', userCtrl.getUserById) //
router.get('/user/komsel/:id', userCtrl.getUserByKomselId) //

module.exports = router;