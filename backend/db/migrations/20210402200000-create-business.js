"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Businesses", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(100),
        unique: true,
      },
      photoUrl: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      address1: {
        allowNull: false,
        type: Sequelize.STRING(200),
      },
      address2: {
        type: Sequelize.STRING(200),
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING(30),
      },
      state: {
        allowNull: false,
        type: Sequelize.STRING(30),
      },
      postCode: {
        allowNull: false,
        type: Sequelize.STRING(10),
      },
      phoneNumber: {
        allowNull: false,
        type: Sequelize.STRING(30),
      },
      hours: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      bizUrl: {
        allowNull: false,
        type: Sequelize.STRING(255),
        unique: true,
      },
      yearsInBusiness: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      categoryId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Categories" },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Businesses");
  },
};
