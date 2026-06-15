'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {

  // ============================================================
  // UP — Create the 'servicio' table
  // ============================================================
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('servicio', {

      // Primary key
      id_servicio: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
      },

      // Service name
      nombre_servicio: {
        type: Sequelize.STRING(200),
        allowNull: false,
      },

      // Service description
      descripcion_servicio: {
        type: Sequelize.TEXT,
        allowNull: true,
      },

      // Service price (min 0)
      precio_servicio: {
        type: Sequelize.DECIMAL(12, 2),
        allowNull: false,
        defaultValue: 0,
      },

      // Foreign key to categoria (required)
      id_categoria_servicio: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'categoria',
          key: 'id_categoria',
        },
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      },

      // Foreign key to estado_servicio (required)
      id_estado_servicio: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'estado_servicio',
          key: 'id_estado_servicio',
        },
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      },

      // Foreign key to restriccion_edad (optional)
      id_restriccion_edad_servicio: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'restriccion_edad',
          key: 'id_restriccion_edad',
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },

      // Foreign key to negocio (CASCADE on delete)
      id_negocio: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'negocio',
          key: 'id_negocio',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },

      // Creation timestamp
      fecha_creacion_servicio: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },

      // Update timestamp
      fecha_modificacion_servicio: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },

    });
  },

  // ============================================================
  // DOWN — Drop the 'servicio' table
  // ============================================================
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('servicio');
  },

};
