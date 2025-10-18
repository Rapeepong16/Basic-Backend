var express = require('express');
var router = express.Router();
const controller = require('../controllers/subjectController');
router.get('/', controller.list);
router.get('/:id', controller.get);
router.put('/:id', controller.update);
router.delete('/:id', controller.remove);

module.exports = router;