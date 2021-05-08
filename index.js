const express = require('express');
const consign = require('consign');
const port = 3000;

const app = express();

function middleWareGlobal(req, res, next) {
  // retorna qual o método e url foi chamada
  console.log('Método: ' + req.method + ' | URL: ' + req.url);
  next();
}

app.use(middleWareGlobal);
app.use(express.json());

consign()
  .include('routers')
  .into(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
});