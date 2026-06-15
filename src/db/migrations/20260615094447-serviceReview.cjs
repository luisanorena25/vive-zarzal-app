'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {

  // ============================================================
  // UP — Create the 'resena_servicio' table
  // ============================================================
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('resena_servicio', {

      // Primary key
      id_resena_servicio: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
      },

      // Foreign key to servicio (CASCADE on delete)
      id_servicio_resena: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'servicio',
          key: 'id_servicio',
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
      contenido_resena_servicio: {
        type: Sequelize.TEXT,
        allowNull: true,
      },

      // Rating (1 to 5)
      puntuacion_resena_servicio: {
        type: Sequelize.SMALLINT,
        allowNull: true,
      },

      // Creation timestamp
      fecha_creacion_resena_servicio: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },

      // Update timestamp
      fecha_modificacion_resena_servicio: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },

    });
  },

  // ============================================================
  // DOWN — Drop the 'resena_servicio' table
  // ============================================================
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('resena_servicio');
  },

};
