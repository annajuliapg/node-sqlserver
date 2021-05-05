const express = require('express');
const app = express();
const port = 3000;

const db = require('./query');

app.use(express.json());

app.get('/', async (req, res) => {
  return res.status(200).send('oie');
});

app.get('/users', async (req, res) => {

  try {

    const users = await db.selectUsers();

    return res.status(200).json(users);
  }
  catch (err) {
    console.log(err);
  }

});

app.post('/users', async (req, res) => {

  if (!req.body.first_name || !req.body.email || !req.body.job) {
    return res.status(422).json({ "Message": "Incomplete Data", "Require": "first_name, email, job" });
  }

  try {

      await db.insertUsers({
        "first_name": req.body.first_name,
        "email": req.body.email,
        "job": req.body.job
      });

      return res.status(200).json("Insert Completed!");
  }
  catch (err) {
    return res.status(400).send(err);
  }

});

//The 404 Route (ALWAYS the last route)
app.get('*', function (req, res) {
  res.status(404).send('Essa página não existe')
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});