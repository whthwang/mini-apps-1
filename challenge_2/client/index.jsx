import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import "./index.css";


ReactDOM.render(<App />, document.getElementById('app'));



// The server must flatten the JSON hierarchy, mapping each item/object in the JSON to a single line of CSV report (see included sample output), where the keys of the JSON objects will be the columns of the CSV report.
// You may assume the JSON data has a regular structure and hierarchy (see included sample file). In other words, all sibling records at a particular level of the hierarchy will have the same set of properties, but child objects might not contain the same properties. In all cases, every property you encounter must be present in the final CSV output.
// You may also assume that child records in the JSON will always be in a property called `children`.


//The client app should be able to submit JSON data to the server, receive a response containing a CSV-formatted result