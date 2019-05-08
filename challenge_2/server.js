//The client app should be able to submit JSON data to the server, receive a response containing a CSV-formatted result
const express = require('express');
const path = require('path');
const app = express();
const port = 3001;


//use middleware
app.use(express.urlencoded({extends: true}));
app.use(express.static(path.resolve(__dirname, './static')))



//handling get request is working
app.get('/api', (req, res) => {
  if (res) {
    res.status(200).send('get request successful');    
  } else {
    res.status(404).send('get request failed');
  }
})

//handling post request is working
//this is the part where i need to receive the data and turn into a csv
app.post('/api', (req, res) => {
  console.log(req.body);
  // console.log(res);
  if (res) {
    res.status(200).send(req.toString()); //this can't be right. i need more than res
  } else {
    res.status(404).send('post request failed');
  }
})

//where should i put my fs.writefile?


app.listen(port, () => console.log('server is listening on port 3001'));



