const UserController = require('./controllers/user');
const express = require('express');
const app = express();
const port = 3000;

function middleWareGlobal(req, res, next) {
  // retorna qual o método e url foi chamada
  console.log('Método: ' + req.method + ' | URL: ' + req.url);
  next();
}

app.use(middleWareGlobal);
app.use(express.json());

app.get('/', async (req, res) => {
  return res.status(200).send('oie');
});

app.get('/users', UserController.getUsers);
app.get('/users/:id', UserController.getUsersById);

app.post('/users', UserController.insertUser);

app.patch('/users/:id', UserController.patchUserById);

//app.delete('/users/:id', UserController.deleteUserById);

//The 404 Route (ALWAYS the last route)
app.get('*', function (req, res) {
  res.status(404).send('Essa página não existe')
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
});