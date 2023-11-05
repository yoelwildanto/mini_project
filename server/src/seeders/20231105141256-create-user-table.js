"use strict";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Users", [
      {
        fullname: "EO John Doe",
        email: "EOTest@example.com",
        password: await bcrypt.hash("password", 10),
        // roleId: 1,
        address: "123 Main St",
        referralCode: jwt.sign(
          {
            fullname: "EO John Doe",
            email: "EOTest@example.com",
          },
          process.env.JWT_SECRET_KEY
        ),
        point: 0,
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullname: "User John Doe",
        email: "UserTest@example.com",
        password: await bcrypt.hash("password@", 10),
        // roleId: 2,
        address: "123 Main St",
        referralCode: jwt.sign(
          {
            fullname: "User John Doe",
            email: "UserTest@example.com",
          },
          process.env.JWT_SECRET_KEY
        ),
        point: 0,
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
