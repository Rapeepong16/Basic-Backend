const repo = require('../repositories/subjectRepository')
//manipulate business logic
module.exports = {
    getAllSubjects: function() {
        return repo.getSubjects();
    },
    findById: function(id) {
        subject = repo.getSubject(id);
        if (!subject) {
            throw new Error(`Subject not found for ID ${id}`);
        }
        return subject;
    },
    addSubject: function(newSubject) {
        if (newSubject.id===undefined || newSubject===null || newSubject.id===
            "") {
            throw new Error(400 ,`Bad Request: missing id`).status = 400;
        }
        if (repo.getSubject(newSubject.id)) {
            throw new Error(`Bad Request: Duplicate id ${newSubject.id}`);
        }
        return repo.addSubject(newSubject);
    },
    updateSubject: function(id, subject) {},
    removeSubject: function(id) {}
}