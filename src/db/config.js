// Import configuration settings
import { config } from "../config/config.js";

// Define and export the database configuration object
const databaseConfig = {

  // Development environment
  development: {
    username: config.dbRootUser,
    password: config.dbRootPassword,
    database: config.dbName,
    host: config.dbHost,
    port: config.dbPort,
    dialect: "postgres",
    logging: console.log,
  },

  // Production environment
  production: {
    username: config.dbRootUser,
    password: config.dbRootPassword,
    database: config.dbName,
    host: config.dbHost,
    port: config.dbPort,
    dialect: "postgres",
    logging: false,
  }
};

export default databaseConfig;