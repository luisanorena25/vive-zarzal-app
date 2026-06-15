'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {

  // ============================================================
  // UP — Create the 'restriccion_edad' table
  // ============================================================
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('restriccion_edad', {

      // Primary key
      id_restriccion_edad: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
      },

      // Age restriction name (unique)
      nombre_restriccion_edad: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true,
      },

      // Age restriction description
      descripcion_restriccion_edad: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },

      // Creation timestamp
      fecha_creacion_restriccion_edad: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },

      // Update timestamp
      fecha_modificacion_restriccion_edad: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },

    });
  },

  // ============================================================
  // DOWN — Drop the 'restriccion_edad' table
  // ============================================================
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('restriccion_edad');
  },

};
