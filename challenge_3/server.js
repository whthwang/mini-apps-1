const express = require('express');
const parser = require('body-parser');
const path = require('path');
const sequelize = require('./database/index.js');
// const db = require('./database/models.js');

const app = express();
const port = 3100;

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, './public')));

app.listen(port, () => console.log(`server is running on port ${port} :D`)); //REMEMBER THAT APP.LISTEN TAKES IN A CALLBACK



//server is up and running