'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {

  // ============================================================
  // UP — Create the 'categoria' table
  // ============================================================
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('categoria', {

      // Primary key
      id_categoria: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
      },

      // Category name (unique)
      nombre_categoria: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true,
      },

      // Category description
      descripcion_categoria: {
        type: Sequelize.TEXT,
        allowNull: true,
      },

      // Creation timestamp
      fecha_creacion_categoria: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },

      // Update timestamp
      fecha_modificacion_categoria: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },

    });
  },

  // ============================================================
  // DOWN — Drop the 'categoria' table
  // ============================================================
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('categoria');
  },

};
