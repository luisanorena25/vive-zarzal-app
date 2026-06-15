'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {

  // ============================================================
  // UP — Create the 'resena_negocio' table
  // ============================================================
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('resena_negocio', {

      // Primary key
      id_resena_negocio: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
      },

      // Foreign key to negocio (CASCADE on delete)
      id_negocio_resena: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'negocio',
          key: 'id_negocio',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },

      // Foreign key to usuario
      id_usuario_resena: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'usuario',
          key: 'id_usuario',
        },
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      },

      // Review content
      contenido_resena_negocio: {
        type: Sequelize.TEXT,
        allowNull: true,
      },

      // Rating (1 to 5)
      puntuacion_resena_negocio: {
        type: Sequelize.SMALLINT,
        allowNull: true,
      },

      // Creation timestamp
      fecha_creacion_resena_negocio: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },

      // Update timestamp
      fecha_modificacion_resena_negocio: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },

    });
  },

  // ============================================================
  // DOWN — Drop the 'resena_negocio' table
  // ============================================================
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('resena_negocio');
  },

};
