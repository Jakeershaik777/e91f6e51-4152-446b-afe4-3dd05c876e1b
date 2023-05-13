const db = require('./db');
const config = require('../config');

async function getUsers(){
  const rows = await db.query(
    `show databases`
  );
 ;

  return {
    rows
  }
}

module.exports = {
  getUsers
}