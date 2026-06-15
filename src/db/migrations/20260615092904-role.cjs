'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {

  // ============================================================
  // UP — Create the 'rol' table
  // ============================================================
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('rol', {

      // Primary key
      id_rol: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
      },

      // Role name (unique)
      tipo_rol: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true,
      },

      // Role description
      descripcion_rol: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },

      // Creation timestamp
      fecha_creacion_rol: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },

      // Update timestamp
      fecha_actualizacion_rol: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },

    });
  },

  // ============================================================
  // DOWN — Drop the 'rol' table
  // ============================================================
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('rol');
  },

};
