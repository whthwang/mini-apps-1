const Sequelize = require('sequelize');
const sequelize = require('./index.js');

//the variable name here is what needs to be exported
const Models = sequelize.define('allinfos', {
  fullname: { //these are the columns
    type: Sequelize.STRING(50),
    allowNull: true
  },
  email: {
    type: Sequelize.STRING(50),
    allowNull: true
  },
  password: {
    type: Sequelize.STRING(15),
    allowNull: true
  },
  line1: {
    type: Sequelize.STRING(50),
    allowNull: true
  },
  line2: {
    type: Sequelize.STRING(50),
    allowNull: true
  },
  city: {
    type: Sequelize.STRING(50),
    allowNull: true
  },
  state: {
    type: Sequelize.STRING(2),
    allowNull: true
  },
  zip: {
    type: Sequelize.STRING(5),
    allowNull: true
  },
  phonenum: {
    type: Sequelize.STRING(10),
    allowNull: true
  },
  creditcardnum: {
    type: Sequelize.STRING(20),
    allowNull: true
  },
  cvv: {
    type: Sequelize.STRING(3),
    allowNull: true
  },
  expdate: {
    type: Sequelize.DATE,
    allowNull: true
  },
  billzip: {
    type: Sequelize.STRING(5),
    allowNull: true
}}, {timestamps: false});


sequelize.sync().then(() => console.log('database models.js is connected to index.js'));

module.exports.Models = Models;