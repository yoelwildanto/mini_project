"use strict";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Category", [
      {
        name: "Music",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bazzar",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Category", null, {});
  },
};
