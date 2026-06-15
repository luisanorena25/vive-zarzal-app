'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {

  // ============================================================
  // UP — Create the 'genero' table
  // ============================================================
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('genero', {

      // Primary key
      id_genero: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
      },

      // Gender type (unique)
      tipo_genero: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true,
      },

      // Creation timestamp
      fecha_creacion_genero: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },

      // Update timestamp
      fecha_actualizacion_genero: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },

    });
  },

  // ============================================================
  // DOWN — Drop the 'genero' table
  // ============================================================
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('genero');
  },

};
