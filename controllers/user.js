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
      const { params: { id: orderId } } = request;
      const result = await UserService.getUsersById(orderId);
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
      const orderId = request.params.id;
      const updatedValues = request.body;
      await UserService.patchUserById(orderId, updatedValues);
      return response.status(200).json(`Field(s) of id \'${orderId}\' updated`);
    } catch (error) {
      return response.status(400).json(error.message);
    };
  };


}

module.exports = new UserController;