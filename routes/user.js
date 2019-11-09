const express = require('express');

const router = express.Router();
const userCtrl = require('../controllers/user');



router.get('/create-user', userCtrl.createUser);


module.exports = router;
