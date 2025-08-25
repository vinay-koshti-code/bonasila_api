const { Sequelize } = require('sequelize');
const envconfig = require("../config/env.config")

const sequelize = new Sequelize({
  database: envconfig.DB_NAME,
  host: envconfig.DB_HOST_READ,
  username: envconfig.DB_USERNAME,
  password: envconfig.DB_PASSWORD,
  port: envconfig.DB_PORT,
  dialect: 'mysql',
  define: {
    timestamps: true,
  },
  logging: console.log, // enable query logs
});

module.exports = sequelize