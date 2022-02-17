const express = require('express');
const router = express.Router();
const membershipController = require('../controllers/membershipController');

router.get('/memberships', membershipController.membership);
router.post('/memberships/post', membershipController.membershipPost);
router.delete('/memberships/:id', membershipController.membershipDelete);

module.exports = router;
