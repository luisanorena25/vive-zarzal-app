'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {

  // ============================================================
  // UP — Create the 'estado_servicio' table
  // ============================================================
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('estado_servicio', {

      // Primary key
      id_estado_servicio: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
      },

      // Status name (unique)
      nombre_estado_servicio: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true,
      },

      // Status description
      descripcion_estado_servicio: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },

      // Creation timestamp
      fecha_creacion_estado_servicio: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },

      // Update timestamp
      fecha_modificacion_estado_servicio: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },

    });
  },

  // ============================================================
  // DOWN — Drop the 'estado_servicio' table
  // ============================================================
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('estado_servicio');
  },

};
