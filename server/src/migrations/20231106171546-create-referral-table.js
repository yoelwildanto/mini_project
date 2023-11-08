'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.createTable("referral_codes",{
      
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
     codeName: {
      type: Sequelize.STRING,
    },
     codeUsage: {
      type: Sequelize.INTEGER,
    },
     codeUsed: {
      type: Sequelize.INTEGER,
    },
     discount: {
      type: Sequelize.INTEGER,
    },
   
  });
},

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("referral_codes");
  }
};
