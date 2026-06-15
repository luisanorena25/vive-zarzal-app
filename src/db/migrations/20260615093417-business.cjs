'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {

  // ============================================================
  // UP — Create the 'negocio' table
  // ============================================================
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('negocio', {

      // Primary key
      id_negocio: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
      },

      // Foreign key to usuario (owner) — RESTRICT on delete
      id_usuario_propietario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'usuario',
          key: 'id_usuario',
        },
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      },

      // Foreign key to ubicacion (optional) — SET NULL on delete
      id_ubicacion: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'ubicacion',
          key: 'id_ubicacion',
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },

      // Business name
      nombre_negocio: {
        type: Sequelize.STRING(150),
        allowNull: false,
      },

      // Business description
      descripcion_negocio: {
        type: Sequelize.TEXT,
        allowNull: true,
      },

      // Facebook page URL
      facebook_negocio: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },

      // Instagram profile URL
      instagram_negocio: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },

      // TikTok profile URL
      tiktok_negocio: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },

      // Website URL
      pagina_web_negocio: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },

      // Creation timestamp
      fecha_creacion_negocio: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },

      // Update timestamp
      fecha_modificacion_negocio: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },

    });
  },

  // ============================================================
  // DOWN — Drop the 'negocio' table
  // ============================================================
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('negocio');
  },

};
