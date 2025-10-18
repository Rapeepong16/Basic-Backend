var express = require('express');
var router = express.Router();
const controller = require('../controllers/customer-controller');
router.get('/', controller.list);
router.get('/:id', controller.get);
module.exports = router;