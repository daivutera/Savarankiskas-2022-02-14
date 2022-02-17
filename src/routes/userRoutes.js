const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const membershipController = require('../controllers/membershipController');

router.post('/users', userController.userPost);
router.get('/users/:order', userController.userOrder); //oredr yra assending descending

module.exports = router;
