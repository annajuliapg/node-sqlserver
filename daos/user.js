const { connection } = require("../infrastructure/connection");

class UserDAO {

  async getUsers() {
    try {

      const conn = await connection();
      const result = await conn.query(`SELECT * FROM Users`);
      return result.recordset;

    } catch (err) {
      throw err.message;
    };
  };

  async getUsersById(userId) {
    try {

      const conn = await connection();
      const result = await conn.query(`SELECT * FROM Users WHERE id = ${userId}`);
      return result.recordset[0];

    } catch (err) {
      throw err.message;
    };
  };

  async insertUser(list) {
    try {

      const conn = await connection();
      const result = await conn.query(`INSERT INTO Users (name, email, job) values ('${list.name}', '${list.email}', '${list.job}'); SELECT @@IDENTITY AS id`);

      return result.recordset[0];

    } catch (err) {
      throw err.message;
    };
  };

  async patchUserById(userId, updatedValues) {
    try {

      let set = '';
      let iterations = Object.keys(updatedValues).length;

      for (var key in updatedValues) {
        iterations--;
        if (iterations > 0) set = set + `${key} = '${updatedValues[key]}', `;
        else set = set + `${key} = '${updatedValues[key]}'`;
      }

      const conn = await connection();
      const result = await conn.query(`UPDATE Users SET ${set} WHERE id = ${userId}`);

      if (result.rowsAffected == 0) throw new Error(`No records found with id: ${userId}`);

      return;

    } catch (err) {
      throw err;
    };
  };

  async deleteUserById(userId) {
    try {

      const conn = await connection();
      const result = await conn.query(`DELETE FROM Users WHERE id = ${userId}`);

      if (result.rowsAffected == 0) throw new Error(`No records found with id: ${userId}`);

      return;

    } catch (err) {
      throw err;
    };
  };

};

module.exports = new UserDAO;
