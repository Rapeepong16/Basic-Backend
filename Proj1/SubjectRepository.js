const subjects = [
    { "id": "INT 100", "name": "IT Fundamentals", "credits": 3 },
    { "id": "INT 101", "name": "Programming Fundamentals", "credits": 3 },
    { "id": "INT 102", "name": "Web Technology", "credits": 1 },
    { "id": "INT 114", "name": "Discrete Mathematics", "credits": 3 },
    { "id": "GEN 101", "name": "Physical Education", "credits": 1 },
    { "id": "GEN 111", "name": "Man and Ethics of Living", "credits": 3 },
    { "id": "LNG 120", "name": "General English", "credits": 3 },
    { "id": "LNG 220", "name": "Academic English", "credits": 3 },
    { "id": "INT 103", "name": "Advanced Programming", "credits": 3 },
    { "id": "INT 104", "name": "User Experience Design", "credits": 3 },
    { "id": "INT 105", "name": "Basic SQL", "credits": 1 },
    { "id": "INT 107", "name": "Computing Platforms Technology", "credits": 3 },
    { "id": "INT 200", "name": "Data Structures and Algorithms", "credits": 1 },
    { "id": "INT 201", "name": "Client-Side Programming I", "credits": 2 },
    { "id": "INT 202", "name": "Server-Side Programming I", "credits": 2 },
    { "id": "INT 205", "name": "Database Management System", "credits": 3 },
    { "id": "INT 207", "name": "Network I", "credits": 3 }
];

function getSubjects() { return subjects; }
function getSubject(id) { return subjects.find(s => s.id === id); }
function addSubject(subject) { subjects.push(subject); }
function updateSubject(id, subject) {
    const idx = subjects.findIndex(s => s.id === id);
    if (idx === -1) return false;
    subjects[idx] = subject;
    return true;
}
function patchSubject(id, partial) {
    const idx = subjects.findIndex(s => s.id === id);
    if (idx === -1) return false;
    subjects[idx] = { ...subjects[idx], ...partial, id: subjects[idx].id };
    return true;
}
function removeSubject(id) {
    const idx = subjects.findIndex(s => s.id === id);
    if (idx === -1) return false;
    subjects.splice(idx, 1);
    return true;
}

module.exports = {
    getSubjects,
    getSubject,
    addSubject,
    updateSubject,
    patchSubject,
    removeSubject
};