'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {

  // ============================================================
  // UP — Create the 'reserva' table
  // ============================================================
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('reserva', {

      // Primary key
      id_reserva: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
      },

      // Foreign key to servicio (CASCADE on delete)
      id_servicio: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'servicio',
          key: 'id_servicio',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },

      // Creation timestamp
      fecha_creacion_reserva: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },

      // Update timestamp
      fecha_modificacion_reserva: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },

    });
  },

  // ============================================================
  // DOWN — Drop the 'reserva' table
  // ============================================================
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('reserva');
  },

};
