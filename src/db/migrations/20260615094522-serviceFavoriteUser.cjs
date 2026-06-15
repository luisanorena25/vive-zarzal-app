'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {

  // ============================================================
  // UP — Create the 'servicio_favoritos_usuarios' table
  // Many-to-many between usuario and servicio (favorites)
  // ============================================================
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('servicio_favoritos_usuarios', {

      // Primary key
      id_servicio_favorito: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
      },

      // Foreign key to usuario (CASCADE on delete)
      id_usuario_favorito: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'usuario',
          key: 'id_usuario',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
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
      fecha_creacion_servicio_favorito: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },

    });

    // Composite unique constraint: a user cannot favorite the same service twice
    await queryInterface.addIndex('servicio_favoritos_usuarios', ['id_usuario_favorito', 'id_servicio'], {
      unique: true,
      name: 'uq_servicio_favorito_usuario',
    });
  },

  // ============================================================
  // DOWN — Drop the 'servicio_favoritos_usuarios' table
  // ============================================================
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('servicio_favoritos_usuarios');
  },

};
