'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {

  // ============================================================
  // UP — Create the 'mensaje' table
  // ============================================================
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('mensaje', {

      // Primary key
      id_mensaje: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
      },

      // Message content
      contenido_mensaje: {
        type: Sequelize.TEXT,
        allowNull: false,
      },

      // Send timestamp
      fecha_envio_mensaje: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },

      // Foreign key to estado_mensaje
      id_estado_mensaje: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'estado_mensaje',
          key: 'id_estado_mensaje',
        },
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      },

      // Foreign key to usuario (sender)
      id_usuario_emisor: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'usuario',
          key: 'id_usuario',
        },
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      },

      // Foreign key to usuario (receiver)
      id_usuario_receptor: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'usuario',
          key: 'id_usuario',
        },
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      },

    });
  },

  // ============================================================
  // DOWN — Drop the 'mensaje' table
  // ============================================================
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('mensaje');
  },

};
