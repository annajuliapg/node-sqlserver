const { connect } = require("./sqlserver");

async function selectUsers() {
  try {

    const conn = await connect();
    const result = await conn.query`SELECT * FROM Users`;
    return result.recordset;

  } catch (err) {
    return err.message;
  }
}

async function insertUsers(list) {
  try {

    const conn = await connect();
    const result = await conn.query`INSERT INTO Users (first_name, email, job) values (${list.first_name}, ${list.email}, ${list.job});`;

  } catch (err) {
    return err.message;
  }
}

module.exports = { selectUsers, insertUsers };
