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
        list: async function (req, res) {
            try {
                const subjects = await service.getAllSubjects();
                res.json(subjects);
            } catch (e) {
                const status = e.status || 500;
                res.status(status).json(error(req, e.code, e.message, status));
            }
        },
        get: async function (req, res) {
            const idStr = (req.params.id || '').toString().trim();
            if (idStr ===
                "") {
                return res.status(400).json(error(req, "Bad Request",
                    "Bad Request: empty id", 400));
            }
            const id = Number(idStr);
            if (isNaN(id)) {
                return res.status(400).json(error(req, "Bad Request",
                    "Bad Request: id must be a number", 400));
            }
            try {
                const subject = await service.getSubjectById(id);
                res.json(subject);
            } catch (e) {
                const status = e.status || 500;
                res.status(status).json(error(req, e.code, e.message, status));
            }
        },
        create: async function (req, res) {
        const newSubject = req.body;
        try {
            const created = await service.addSubject(newSubject);
            res.status(201).json(created);
        } catch (e) {
            const status = e.status || (e.code === 'ER_DUP_ENTRY' ? 409 : 500);
            res.status(status).json(error(req, e.code, e.message, status));
        }
        },update: async function (req, res) {
        const id = Number((req.params.id || '').toString().trim());
        if (isNaN(id)) {
            return res.status(400).json(error(req, "Bad Request",
                "Bad Request: id must be a number", 400));
        }
        try {
            const updated = await service.updateSubject(id, req.body);
            res.json(updated);
        } catch (e) {
            const status = e.status || (e.code === 'ER_DUP_ENTRY' ? 409 : 500);
            res.status(status).json(error(req, e.code, e.message, status));
        }
        },remove: async function (req, res) {
            const id = Number((req.params.id || '').toString().trim());
            if (isNaN(id)) {
                return res.status(400).json(error(req, "Bad Request",
                    "Bad Request: id must be a number", 400));
            }
            try {
                await service.removeSubject(id);
                res.status(204).send();
            } catch (e) {
                const status = e.status || 500;
                res.status(status).json(error(req, e.code, e.message, status));
            }
        }
}