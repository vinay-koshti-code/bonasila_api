const dotenv = require("dotenv")


dotenv.config({path: "./.env"});
const ENVIRONMENT = process.env.NODE_ENV ;
dotenv.config({path: `./.env.${ENVIRONMENT}`});

module.exports = {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,
    DB_NAME: process.env.DB_NAME,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_HOST_READ: process.env.DB_HOST_READ,
    DB_HOST_WRITE: process.env.DB_HOST_WRITE,
    DB_PORT: process.env.DB_PORT,
    JWT_ACCESS_SECRET_KEY: process.env.JWT_ACCESS_SECRET_KEY,
    JWT_REFRESH_EXPIRES: process.env.JWT_REFRESH_EXPIRES,
    JWT_REFRESH_SECRET_KEY: process.env.JWT_REFRESH_SECRET_KEY,
    JWT_ACCESS_EXPIRES: process.env.JWT_ACCESS_EXPIRES,
    IMG_URI: process.env.IMG_URI
}