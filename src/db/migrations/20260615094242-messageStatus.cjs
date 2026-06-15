'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {

  // ============================================================
  // UP — Create the 'estado_mensaje' table
  // ============================================================
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('estado_mensaje', {

      // Primary key
      id_estado_mensaje: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
      },

      // Message status name (unique)
      nombre_estado_mensaje: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true,
      },

      // Message status description
      descripcion_estado_mensaje: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },

      // Creation timestamp
      fecha_creacion_estado_mensaje: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },

      // Update timestamp
      fecha_modificacion_estado_mensaje: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },

    });
  },

  // ============================================================
  // DOWN — Drop the 'estado_mensaje' table
  // ============================================================
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('estado_mensaje');
  },

};
