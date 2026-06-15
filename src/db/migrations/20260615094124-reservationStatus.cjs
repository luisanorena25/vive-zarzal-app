'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {

  // ============================================================
  // UP — Create the 'estado_reserva' table
  // ============================================================
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('estado_reserva', {

      // Primary key
      id_estado_reserva: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
      },

      // Reservation status name (unique)
      nombre_estado_reserva: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true,
      },

      // Reservation status description
      descripcion_estado_reserva: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },

      // Creation timestamp
      fecha_creacion_estado_reserva: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },

      // Update timestamp
      fecha_modificacion_estado_reserva: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },

    });
  },

  // ============================================================
  // DOWN — Drop the 'estado_reserva' table
  // ============================================================
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('estado_reserva');
  },

};
