const conn = require('../config/pool');
// Use async/await with the promise-based pool
async function getAllSubjects() {
    const result = await conn.query('SELECT * FROM subjects');
    console.log(result);
}
async function getSubjectById(id) {
    console.log('Search for id:' + id);
    console.log('------------------------');
    const oneRow = await conn.query('SELECT * FROM subjects WHERE id = ?',[id]);
    console.log(oneRow);
    console.log('------------------------');
    console.log(oneRow[0][0]);
}
async function addSubject(subject) {
    //preparing data to be inserted
    const added = await conn.query(
        "INSERT INTO subjects (subject_code, subject_title, credit) " +
        "VALUES (?, ?, ?)", [subject.code, subject.title, subject.credit]
    );
    if (added[0].insertId > 0) {
        console.log("Added successfully");
        console.log(added);
    }
}
async function updateSubject(id, subject) {
    const updated = await conn.query(
        "UPDATE subjects SET subject_code = ?, subject_title = ?, "
        + " credit = ? WHERE id = ?",
        [subject.code, subject.title, subject.credit, id]);
    console.log(updated);
    if (updated.affectedRows > 0)
        console.log("Updated successfully");
    else
        console.log("No record updated");
}

async function deleteSubject(id) {
    const deleted = await conn.query(
        "DELETE FROM subjects WHERE id = ?",[id]
    )
    console.log(deleted);
    if (deleted[0].affectedRows > 0)
        console.log("Deleted successfully");
    else
        console.log("No record deleted");
}

//test
(async () => {
    try {
        // await getAllSubjects();
        // await getSubjectById(18);

        // await addSubject(
        //     {
        //         code: 'INT-959',
        //         title: 'SQL for Data Science',
        //         credit: 3
        //     });

        // await updateSubject(18,
        //     {
        //         code: 'INT-900',
        //         title: 'SQL for Data Science',
        //         credit: 3
        //     }
        // );

        await deleteSubject(18)



    } catch (err) {
        console.error(err);
    } finally {
        // If this is a standalone test script, close the pool
        await conn.end();
    }
})();

//return Array [row , field]
//if we want only row use syntax [name_variable] that query only row --> that already JSON
//field --> this is Array constrain
