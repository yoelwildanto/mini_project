'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('newTransactions', [{
      id: "1",
      userId: 1,
      eventId: 1,
      price: 18000,
      totalPayment: 36000,
      qty: 2,
      referralId:1,
      paymentStatus: 1,
      imageUploaded:"bbb.jpg"

     }, 
      {
        id: 2,
        userId: 2,
        eventId: 1,
        price: 18000,
        totalPayment: 18000,
        qty: 1,
        referralId:1,
        paymentStatus: 1,
        imageUploaded:"bbba.jpg"
       }
    ]);
    
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('newTransactions', null, {});
     
  }
};
