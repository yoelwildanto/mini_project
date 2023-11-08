"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Events", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      event_date: {
        type: Sequelize.DATE,
      },
      event_time: {
        type: Sequelize.TIME,
      },
      price: {
        type: Sequelize.INTEGER,
      },
      total_tickets: {
        type: Sequelize.INTEGER,
      },
      tickets_available: {
        type: Sequelize.INTEGER,
      },
      description: {
        type: Sequelize.TEXT,
      },
      image: {
        type: Sequelize.TEXT,
      },
      // location_id: {
      //   type: Sequelize.INTEGER,
      //   references: {
      //     model: "Location",
      //     key: "id",
      //   },
      //   onDelete: "CASCADE",
      // },
      // category_id: {
      //   type: Sequelize.INTEGER,
      //   references: {
      //     model: "Category",
      //     key: "id",
      //   },
      //   onDelete: "CASCADE",
      // },
      status: {
        type: Sequelize.BOOLEAN,
      },
      type_event: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("Events");
  },
};
