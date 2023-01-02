import mysql from 'mysql2/promise';

// create the connection to database
console.log("Creatin connection pool...");

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'nodejsbasic'
});

export default pool;
