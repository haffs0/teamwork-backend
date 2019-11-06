const express = require('express');

const router = express.Router();
const stuffCtrl = require('../controllers/stuff');



router.get('/dummy', stuffCtrl.createDummy);


module.exports = router;
