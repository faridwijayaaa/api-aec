"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("LiveClasses", {
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
      description: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      start_date: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      poster_img_url: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      img_url1: {
        type: Sequelize.TEXT,
      },
      img_url2: {
        type: Sequelize.TEXT,
      },
      img_url3: {
        type: Sequelize.TEXT,
      },
      img_url4: {
        type: Sequelize.TEXT,
      },
      MentorId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Mentors",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
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
    await queryInterface.dropTable("LiveClasses");
  },
};
