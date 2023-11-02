"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("event", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nama_event: {
        type: Sequelize.STRING,
      },
      karegori: {
        type: Sequelize.STRING,
      },
      lokasi: {
        type: Sequelize.STRING,
      },
      deskripsi: {
        type: Sequelize.STRING,
      },
      tanggal_mulai: {
        type: Sequelize.DATEONLY,
      },
      tanggal_selesai: {
        type: Sequelize.DATEONLY,
      },
      Waktu_mulai: {
        type: Sequelize.TIME,
      },
      Waktu_selesai: {
        type: Sequelize.TIME,
      },
      isComplete: {
        type: Sequelize.TIME,
      },
      EO: {
        type: Sequelize.TIME,
      },
      max_capacity: {
        type: Sequelize.TIME,
      },
      banner: {
        type: Sequelize.TIME,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("event");
  },
};
