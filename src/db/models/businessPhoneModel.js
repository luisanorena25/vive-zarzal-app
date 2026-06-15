// Import the sequelize instance from the database connection library
import { sequelize } from '../../libraries/DBConnection.js';
// Import DataTypes from sequelize to define column types
import { DataTypes } from 'sequelize';

// Define the name of the table
export const BUSINESS_PHONE_TABLE = 'negocio_telefono';

// Define the BussinesPhone model
export const BusinessPhone = sequelize.define(BUSINESS_PHONE_TABLE, {

  // Primary key: id_negocio_telefono
  idBussinesPhone: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    unique: true,
    autoIncrement: true,
    field: 'id_negocio_telefono',
  },

  // Foreign key: id_negocio
  idBussines: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'id_negocio',
  },

  // Foreign key: id_telefono
  idPhone: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'id_telefono',
  },

}, {
  // Additional model options
  sequelize,
  tableName: BUSINESS_PHONE_TABLE,
  modelName: 'BusinessPhone',
  timestamps: false, // No createdAt / updatedAt in this table
  indexes: [
    {
      unique: true,
      fields: ['id_negocio', 'id_telefono'], // uq_negocio_telefono
    }
  ]
});