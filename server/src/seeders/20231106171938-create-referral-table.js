'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('referral_codes', [
      {
      id: 1,
      userId: 1,
      eventId: 1,
      codeName: "1234QGy",
      codeUsage: 0,
      codeUsed: 0,
      discount:0.1
     }, 
      {
        id: 2,
        userId: 2,
        eventId: 2,
        codeName: "QUYT54",
        codeUsage: 0,
        codeUsed: 0,
        discount:0.1
       }
    ]);
    
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('referral_codes', null, {});
     
  },
};
