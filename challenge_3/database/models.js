const Sequelize = require('sequelize');
const sequelize = require('index.js');

//the variable name here is what needs to be exported
const db = sequelize.define('user profile', {
  fullName: { //these are the columns
    type: Sequelize.STRING(50),
    allowNull: false
  },
  email: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  password: {
    type: Sequelize.STRING(15),
    allowNull: false
  }
}) 



db.sync().then(() => console.log('everything works'));

module.exports = db;