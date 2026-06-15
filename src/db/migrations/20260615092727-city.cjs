'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {

  // ============================================================
  // UP — Create the 'ciudad' table
  // ============================================================
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ciudad', {

      // Primary key
      id_ciudad: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
      },

      // Foreign key to departamento
      id_departamento: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'departamento',
          key: 'id_departamento',
        },
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      },

      // City name
      nombre_ciudad: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },

      // City description
      descripcion_ciudad: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },

    });
  },

  // ============================================================
  // DOWN — Drop the 'ciudad' table
  // ============================================================
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ciudad');
  },

};
