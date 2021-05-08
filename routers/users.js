const UserController = require('../controllers/user');

module.exports = app => {

  app.get('/users', UserController.getUsers);
  app.get('/users/:id', UserController.getUsersById);

  app.post('/users', UserController.insertUser);

  app.patch('/users/:id', UserController.patchUserById);

  app.delete('/users/:id', UserController.deleteUserById);

  //The 404 Route (ALWAYS the last route)
  app.get('*', function (req, res) {
    res.status(404).send('Essa página não existe')
  });

};