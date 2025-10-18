var service = require('../services/subjectService');
function error(req, error, message, statusCode) {
    return {
        error: error,
        statusCode: statusCode,
        message: message,
        path: req.originalUrl,
        timestamp: new Date().toLocaleString()
    };
}
module.exports = {
    list: function (req, res) {
        res.json(service.getAllSubjects());
    },get: function (req, res) {
        if(req.params.id.trim() ===
            "")
            return res.status(400).json(error(req,"Bad Request",
                "Bad Request: empty id", 400));
        res.json(service.findById(req.params.id));
    },
    create: function (req, res) {
        newSubject = req.body;
        if (Object.keys(newSubject).length===0) {
            return res.status(400).json("Bad Request: empty body");
        }
        res.json(service.addSubject(newSubject));
    },
    update: function (req, res) {
    },
    remove: function (req, res) {
    }
}