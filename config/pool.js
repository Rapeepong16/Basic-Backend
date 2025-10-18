const mysql = require('mysql2/promise');
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'RaPeePonG@0649',
    database: 'sample',
    connectionLimit: 10,
    waitForConnections: true,
    queueLimit: 0
})

module.exports = pool;