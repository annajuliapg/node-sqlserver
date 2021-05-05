const { connection } = require("../infrastructure/connection");

class UserDAO {

  async getUsers() {
    try {

      const conn = await connection();
      const result = await conn.query`SELECT * FROM Users`;
      return result.recordset;

    } catch (err) {
      return err.message;
    };
  };

  async getUsersById(orderId) {
    try {

      const conn = await connection();
      const result = await conn.query`SELECT * FROM Users WHERE id = ${orderId}`;
      return result.recordset;

    } catch (err) {
      return err.message;
    };
  };

  async insertUser(list) {
    try {

      const conn = await connection();
      const result = await conn.query`INSERT INTO Users (name, email, job) values (${list.name}, ${list.email}, ${list.job}); SELECT @@IDENTITY AS id`;

      return result.recordset[0];

    } catch (err) {
      return err.message;
    };
  };

  async patchUserById(orderId, updatedValues) {
    try {

      let set = '';
      let iterations = Object.keys(updatedValues).length;

      for (var key in updatedValues) {
        iterations--;
        if(iterations > 0) set = set + `${key} = '${updatedValues[key]}', `;
        else set = set + `${key} = '${updatedValues[key]}'`;
      }

      console.log(set);

      const conn = await connection();
      const result = await conn.query`UPDATE Users SET ${set} WHERE id = ${orderId}`;

      return;

    } catch (err) {
      return err.message;
    };
  };

};

module.exports = new UserDAO;
