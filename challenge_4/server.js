const express = require('express');
const parser = require('body-parser');
const path = require('path');

const app = express();
const port = 3200;

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '/client/dist'))); //bundle.js has to always go with index.html

app.listen(port, () => console.log(`Connect 4 app is listening on port ${port}`));