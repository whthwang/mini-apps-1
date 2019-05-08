const Sequelize = require('sequelize');
const sequelize = new Sequelize('ShoppingCart', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
})



sequelize
  .authenticate()
  .then(() => console.log('ShoppingCart is successfully set up!'))
  .catch((error) => console.log(`this is your error ${error}`))


module.exports = sequelize;


//database is connected and running