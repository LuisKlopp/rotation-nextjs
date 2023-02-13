import fs = require('fs');
const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data.toString());
import mysql = require('mysql');

export const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database,
});

connection.connect();
