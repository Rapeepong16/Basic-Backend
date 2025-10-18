const pool = require("../config/pool");

async function findAll() {
    const [rows] = await pool.query(
        "SELECT id, subject_code, subject_title, credit FROM subjects");
    return rows;
}
async function findById(id) {
    const [rows] = await pool.query(
        "SELECT id, subject_code, subject_title, " +
        "credit FROM subjects WHERE id = ?", [id]);
    if (rows.length === 0) return null;
    subject = {id : rows[0].id, code:rows[0].subject_code,
        title:rows[0].subject_title, credit:rows[0].credit};
    return subject;
}
async function save(subject) {
    const [result] = await pool.query(
        "INSERT INTO subjects (subject_code, subject_title, credit) VALUES (?, ?, ?)"
        ,
        [subject.code, subject.title, subject.credit]
    );
    if (result.affectedRows === 0) return null;
    return findById(result.insertId);
}
async function update(subject) {
    const [result] = await pool.query(
        "UPDATE subjects SET subject_code = ?, subject_title = ?, credit = ? WHERE id = ?"
        ,
        [subject.code, subject.title, subject.credit, subject.id]
    );
    if (result.affectedRows === 0) return null;
    return findById(subject.id);
}
async function deleteById(id) {
    const [result] = await pool.query("DELETE FROM subjects WHERE id = ?"
        , [id]);
    return result.affectedRows > 0;
}
module.exports = {
    findAll,
    findById,
    save,
    update,
    deleteById
}