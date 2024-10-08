'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Measures', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      uuid: {
        type: Sequelize.STRING
      },
      customer_code: {
        type: Sequelize.STRING
      },
      measure_datetime: {
        type: Sequelize.DATE
      },
      measure_type: {
        type: Sequelize.STRING
      },
      measure_value: {
        type: Sequelize.INTEGER
      },
      has_confirmed: {
        type: Sequelize.BOOLEAN
      },
      image_url: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Measures');
  }
};