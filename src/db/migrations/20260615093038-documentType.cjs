'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {

  // ============================================================
  // UP — Create the 'tipo_documento' table
  // ============================================================
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tipo_documento', {

      // Primary key
      id_tipo_documento: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
      },

      // Document type name (unique)
      nombre_tipo_documento: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true,
      },

      // Creation timestamp
      fecha_creacion_tipo_documento: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },

      // Update timestamp
      fecha_modificacion_tipo_documento: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },

    });
  },

  // ============================================================
  // DOWN — Drop the 'tipo_documento' table
  // ============================================================
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tipo_documento');
  },

};
