'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {

  // ============================================================
  // UP — Create the 'imagen_usuario' table
  // ============================================================
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('imagen_usuario', {

      // Primary key
      id_imagen_usuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
      },

      // Foreign key to usuario (CASCADE on delete)
      id_usuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'usuario',
          key: 'id_usuario',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },

      // Image URL
      url_imagen_usuario: {
        type: Sequelize.STRING(500),
        allowNull: false,
      },

      // Image name
      nombre_imagen_usuario: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },

      // Alternative text
      texto_alternativo_imagen_usuario: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },

      // Creation timestamp
      fecha_creacion_imagen_usuario: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },

      // Update timestamp
      fecha_actualizacion_imagen_usuario: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },

    });
  },

  // ============================================================
  // DOWN — Drop the 'imagen_usuario' table
  // ============================================================
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('imagen_usuario');
  },

};
