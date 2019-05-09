const Sequelize = require('sequelize');
const connection = new Sequelize('ShoppingCart', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
})



connection
  .authenticate()
  .then(() => console.log('ShoppingCart is successfully set up!'))
  .catch((error) => console.log(`this is your error ${error}`))


module.exports = connection;


//database is connected and running