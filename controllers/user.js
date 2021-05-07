const UserService = require('../services/user');

class UserController {
  async getUsers(request, response, next) {
    try {
      const result = await UserService.getUsers();
      return response.status(200).json(result);
    } catch (error) {
      return response.status(400).json(error.message);
    };
  };

  async getUsersById(request, response, next) {
    try {
      const { params: { id: userId } } = request;
      const result = await UserService.getUsersById(userId);
      return response.status(200).json(result);
    } catch (error) {
      return response.status(400).json(error.message);
    };
  };

  async insertUser(request, response, next) {
    try {
      const { body } = request;
      const result = await UserService.insertUser(body);
      const { id } = result;
      const resultWithId = { ...body, id}
      return response.status(200).json(resultWithId);
    } catch (error) {
      return response.status(400).json(error.message);
    };
  };

  async patchUserById(request, response, next) {
    try {
      const userId = request.params.id;
      const updatedValues = request.body;
      await UserService.patchUserById(userId, updatedValues);
      return response.status(200).json(`Field(s) of id \'${userId}\' updated`);
    } catch (error) {
      return response.status(400).json(error.message);
    };
  };

  async deleteUserById(request, response, next) {
    try {
      const userId = request.params.id;
      await UserService.deleteUserById(userId);
      return response.status(200).json(`Row of id \'${userId}\' deleted`);
    } catch (error) {
      return response.status(400).json(error.message);
    };
  };


}

module.exports = new UserController;