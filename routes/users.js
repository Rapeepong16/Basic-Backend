var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send(`url = ${req.originalUrl}, Response from ${req.method} method`);
});
router.get('/:id', function (req, res, next) {
    res.send(`url = ${req.originalUrl}, Response from ${req.method} method with id =
 ${req.params.id}`);
});
router.post('/', function (req, res, next) {
    respBody = (`url = ${req.originalUrl}, Response from ${req.method} method\n`);
    respBody += JSON.stringify(req.body, null, 2);
    res.send(respBody);
});
router.put('/:id', function (req, res, next) {
    respBody = (`url = ${req.originalUrl}, Response from ${req.method} method\n`);
    respBody += JSON.stringify(req.body, null, 2);
    res.send(respBody);
});
router.delete('/:id', function (req, res, next) {
    res.send(`url = ${req.url}, Response from ${req.method} method with id =
 ${req.params.id}`);
});
module.exports = router;
