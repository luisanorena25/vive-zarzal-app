'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {

  // ============================================================
  // UP — Create the 'negocio_telefono' junction table
  // Many-to-many between negocio and telefono
  // ============================================================
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('negocio_telefono', {

      // Primary key
      id_negocio_telefono: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
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

      // Foreign key to telefono (CASCADE on delete)
      id_telefono: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'telefono',
          key: 'id_telefono',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },

    });

    // Composite unique constraint: one phone cannot be assigned twice to the same business
    await queryInterface.addIndex('negocio_telefono', ['id_negocio', 'id_telefono'], {
      unique: true,
      name: 'uq_negocio_telefono',
    });
  },

  // ============================================================
  // DOWN — Drop the 'negocio_telefono' table
  // ============================================================
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('negocio_telefono');
  },

};
