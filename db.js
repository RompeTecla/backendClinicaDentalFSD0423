const config = require("./config/config.json");
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE || config.development.database,
  process.env.MYSQL_USER || config.development.username,
  process.env.MYSQL_PASSWORD || config.development.password,
  {
    host: process.env.MYSQL_HOST || config.development.host,
    port: process.env.MYSQL_PORT || config.development.port || "3306",
    dialect: "mysql",
    operatorAliases: false,
    pool: {
      max: 5, //maximum number of connection in pool
      min: 0, //minimum number of connection in pool
      acquire: 30000, //maximum time, in milliseconds, that a connection can be idle before being released
      idle: 10000, // maximum time, in milliseconds, that pool will try to get connection before throwing error
    },
  }
);

module.exports = sequelize.authenticate().then((db) => {
  console.log("MYSQL connected");
  return db;
});


// import Sequelize from 'sequelize';
// import mysql2 from 'mysql2';

// const Sequelize = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PASSWORD,
//   {
//     dialect: 'mysql',
//     dialectModule: mysql2, // Needed to fix sequelize issues with WebPack
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT
//   }
// )

// export async function connectToDatabase() {
//   console.log('Trying to connect via sequelize')
//   await sequelize.sync()
//   await sequelize.authenticate()
//   console.log('=> Created a new connection.')

//   // Do something 
// }
