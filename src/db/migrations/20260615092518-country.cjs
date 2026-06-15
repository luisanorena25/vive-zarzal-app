'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {

  // ============================================================
  // UP — Create the 'pais' table
  // ============================================================
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pais', {

      // Primary key
      id_pais: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
      },

      // Country name (unique)
      nombre_pais: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true,
      },

      // Country description
      descripcion_pais: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },

    });
  },

  // ============================================================
  // DOWN — Drop the 'pais' table
  // ============================================================
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('pais');
  },

};
