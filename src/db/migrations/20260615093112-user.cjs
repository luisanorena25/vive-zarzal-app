'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {

  // ============================================================
  // UP — Create the 'usuario' table
  // ============================================================
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('usuario', {

      // Primary key
      id_usuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
      },

      // Foreign key to rol (required)
      id_rol: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'rol',
          key: 'id_rol',
        },
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      },

      // Foreign key to genero (optional)
      id_genero: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'genero',
          key: 'id_genero',
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },

      // Foreign key to tipo_documento (optional)
      id_tipo_documento: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'tipo_documento',
          key: 'id_tipo_documento',
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },

      // User first name
      nombre_usuario: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },

      // User last name
      apellido_usuario: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },

      // Birth date
      fecha_nacimiento_usuario: {
        type: Sequelize.DATEONLY,
        allowNull: true,
      },

      // Document number (unique)
      numero_documento_usuario: {
        type: Sequelize.STRING(30),
        allowNull: true,
        unique: true,
      },

      // Email (unique)
      correo_usuario: {
        type: Sequelize.STRING(150),
        allowNull: false,
        unique: true,
      },

      // Username (unique)
      username_usuario: {
        type: Sequelize.STRING(80),
        allowNull: false,
        unique: true,
      },

      // Password hash
      contrasena_usuario: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },

      // Creation timestamp
      fecha_creacion_usuario: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },

      // Update timestamp
      fecha_actualizacion_usuario: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },

    });
  },

  // ============================================================
  // DOWN — Drop the 'usuario' table
  // ============================================================
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('usuario');
  },

};
