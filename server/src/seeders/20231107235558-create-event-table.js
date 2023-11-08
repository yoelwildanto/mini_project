"use strict";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Events", [
      {
        title: "Event 1",
        event_date: "2023-11-15",
        price: "25",
        description: "Company A",
        image: "https://picsum.photos/200/300",
        // location_id: 1,
        // category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Event 2",
        event_date: "2023-12-10",
        price: "30",
        description: "Company B",
        image: "https://picsum.photos/600/500",
        // location_id: 2,
        // category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Event 3",
        event_date: "2023-12-20",
        price: "20",
        description: "Company C",
        image: "https://picsum.photos/700/600",
        // location_id: 1,
        // category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Event 4",
        event_date: "2023-12-25",
        price: "40",
        description: "Company D",
        image: "https://picsum.photos/500/400",
        // location_id: 2,
        // category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Event 5",
        event_date: "2023-12-30",
        price: "35",
        description: "Company E",
        image: "https://picsum.photos/200/300",
        // location_id: 1,
        // category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Event 6",
        event_date: "2024-01-05",
        price: "28",
        description: "Company F",
        image: "https://picsum.photos/800/700",
        // location_id: 2,
        // category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Events", null, {});
  },
};
