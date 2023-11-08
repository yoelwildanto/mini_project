"use strict";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Locations", [
      {
        address: "Concat",
        city: "DIY",
        province: "DIY",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        address: "Concat",
        city: "DIY",
        province: "DIY",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Locations", null, {});
  },
};
