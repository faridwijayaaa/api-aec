"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Articles", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      paragraph1: {
        type: Sequelize.TEXT,
      },
      paragraph2: {
        type: Sequelize.TEXT,
      },
      paragraph3: {
        type: Sequelize.TEXT,
      },
      paragraph4: {
        type: Sequelize.TEXT,
      },
      paragraph5: {
        type: Sequelize.TEXT,
      },
      paragraph6: {
        type: Sequelize.TEXT,
      },
      paragraph7: {
        type: Sequelize.TEXT,
      },
      paragraph8: {
        type: Sequelize.TEXT,
      },
      paragraph9: {
        type: Sequelize.TEXT,
      },
      paragraph10: {
        type: Sequelize.TEXT,
      },
      poster_img_url: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Articles");
  },
};
