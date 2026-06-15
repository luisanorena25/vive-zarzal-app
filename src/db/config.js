// database.config.js

// Import application configuration
import { config } from "../config/config.js";

// Sequelize database configuration
const databaseConfig = {

  // ==========================================
  // DEVELOPMENT
  // ==========================================
  development: {
    username: config.dbUser,
    password: config.dbPassword,
    database: config.dbName,
    host: config.dbHost,
    port: config.dbPort,
    dialect: config.dbDialect,

    pool: {
      max: config.dbPoolMax,
      min: config.dbPoolMin,
      acquire: config.dbPoolAcquire,
      idle: config.dbPoolIdle,
    },

    logging: console.log,
  },

  // ==========================================
  // PRODUCTION
  // ==========================================
  production: {
    username: config.dbUser,
    password: config.dbPassword,
    database: config.dbName,
    host: config.dbHost,
    port: config.dbPort,
    dialect: config.dbDialect,

    pool: {
      max: config.dbPoolMax,
      min: config.dbPoolMin,
      acquire: config.dbPoolAcquire,
      idle: config.dbPoolIdle,
    },

    logging: false,
  },

};

export default databaseConfig;