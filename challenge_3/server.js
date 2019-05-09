const express = require('express');
const parser = require('body-parser');
const path = require('path');
const sequelize = require('./database/index.js');
const db = require('./database/models.js');


const app = express();
const port = 3100;

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, './public')));


app.post('/f1', (req, res) => {
  const { fullname, email, password } = req.body;
  console.log(`this is fullname ${fullname} and this is email ${email} and this is ${password}`);
  db.Models.create({
    fullname: fullname,
    email: email,
    password: password,
    line1: null,
    line2: null,
    city: null,
    state: null,
    zip: null,
    phonenum: null,
    creditcardnum: null,
    cvv: null,
    expdate: null,
    billzip: null
  })
  .then(() => {
    res.status(201).send('app.post response from the server works. check the database')
  })
  .catch((error) => {
    res.status(401).send(error)
  })
})


app.listen(port, () => console.log(`server is running on port ${port} :D`)); //REMEMBER THAT APP.LISTEN TAKES IN A CALLBACK




//server is up and running