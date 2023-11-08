'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.createTable("newTransactions",{
      
      id: {
       allowNull: false,
       autoIncrement: true,
       primaryKey: true,
       type: Sequelize.INTEGER,
     },
     userId: {
      type: Sequelize.INTEGER,
    },
     eventId: {
      type: Sequelize.INTEGER,
    },
     price: {
      type: Sequelize.INTEGER,
    },
     totalPayment: {
      type: Sequelize.INTEGER,
    },
     qty: {
      type: Sequelize.INTEGER,
    },
     referralId: {
      type: Sequelize.INTEGER,
    },
     paymentStatus: {
      type: Sequelize.BOOLEAN,
    },   
     imageUploaded: {
      type: Sequelize.STRING,
    },   
  });
},

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("newTransactions");
  }
};
