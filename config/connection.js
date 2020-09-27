'use strict'

const mysql = require("mysql");
const util = require("util");
let connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "N19A03a16a02!",
    database: "burgers_db"
  });
};

// Make connection.
connection.connect();

connection.query = util.promisify(connection.query);

// Export connection for our ORM to use.
module.exports = connection;

