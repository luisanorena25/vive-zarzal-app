'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {

  // ============================================================
  // UP — Create the 'imagen_servicio' table
  // ============================================================
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('imagen_servicio', {

      // Primary key
      id_imagen_servicio: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
      },

      // Image URL
      url_imagen_servicio: {
        type: Sequelize.TEXT,
        allowNull: false,
      },

      // Image description
      descripcion_imagen_servicio: {
        type: Sequelize.STRING(255),
        allowNull: true,
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
      fecha_creacion_imagen_servicio: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },

      // Update timestamp
      fecha_modificacion_imagen_servicio: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },

    });
  },

  // ============================================================
  // DOWN — Drop the 'imagen_servicio' table
  // ============================================================
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('imagen_servicio');
  },

};
