'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {

  // ============================================================
  // UP — Create the 'reserva_detalle' table
  // ============================================================
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('reserva_detalle', {

      // Primary key
      id_reserva_detalle: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
      },

      // Foreign key to reserva (CASCADE on delete)
      id_reserva: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'reserva',
          key: 'id_reserva',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },

      // Foreign key to usuario
      id_usuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'usuario',
          key: 'id_usuario',
        },
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      },

      // Quantity (min 1)
      cantidad_reserva: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },

      // Foreign key to estado_reserva
      id_estado_reserva: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'estado_reserva',
          key: 'id_estado_reserva',
        },
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      },

    });
  },

  // ============================================================
  // DOWN — Drop the 'reserva_detalle' table
  // ============================================================
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('reserva_detalle');
  },

};
