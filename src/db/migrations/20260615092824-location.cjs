'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {

  // ============================================================
  // UP — Create the 'ubicacion' table
  // ============================================================
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ubicacion', {

      // Primary key
      id_ubicacion: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
      },

      // Foreign key to ciudad
      id_ciudad: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'ciudad',
          key: 'id_ciudad',
        },
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      },

      // Location name
      nombre_ubicacion: {
        type: Sequelize.STRING(150),
        allowNull: false,
      },

      // Location description
      descripcion_ubicacion: {
        type: Sequelize.TEXT,
        allowNull: true,
      },

      // Location code
      codigo_ubicacion: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },

      // Creation timestamp
      fecha_creacion_ubicacion: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },

      // Update timestamp
      fecha_modificacion_ubicacion: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },

    });
  },

  // ============================================================
  // DOWN — Drop the 'ubicacion' table
  // ============================================================
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ubicacion');
  },

};
