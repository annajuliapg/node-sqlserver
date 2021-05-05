const UserDAO = require('../daos/user');
const User = require('../models/user');


class UserService {
  async getUsers() {
    try {
      const results = await UserDAO.getUsers();
      if (Object.keys(results).length > 0) {
        return results;
      } else {
        throw new Error('No records found');
      };
    } catch (error) {
      throw error;
    };
  };

  async getUsersById(orderId) {
    try {
      const results = await UserDAO.getUsersById(orderId);
      if (Object.keys(results).length > 0) {
        return results;
      } else {
        throw new Error(`No records found with id: ${orderId}`);
      };
    } catch (error) {
      throw error;
    };
  };

  async insertUser(body, response) {
    try {
      const user = new User(body);
      const validUser = { ...user };
      const result = await UserDAO.insertUser(validUser);
      return result;
      
    } catch (error) {
      throw error;
    };
  };

  async patchUserById(orderId, updatedValues) {
    try {
      const result = await UserDAO.patchUserById(orderId, updatedValues);
      return result;
    } catch (error) {
      throw error;
    };
  };

}

module.exports = new UserService;