var express = require('express');
var router = express.Router();
const {getAllUsers} = require('../controller/users')

/* GET users listing. */
router.get('/', getAllUsers);

module.exports = router;
