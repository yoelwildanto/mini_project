module.exports = (sequelize, Sequelize) => {
    const attendance = sequelize.define(
      "attendance",
      {
        ticketId: {
          type: Sequelize.INTEGER,
        },
        userId: {
          type: Sequelize.INTEGER,
        },
        fullName: {
          type: Sequelize.STRING,
        },
        email: {
          type: Sequelize.STRING,
        },
        phoneNumber: {
          type: Sequelize.STRING,
        },
        referralCode: {
          type: Sequelize.STRING,
        },
        ticketTotal: {
          type: Sequelize.INTEGER,
        },
        priceTotal: {
          type: Sequelize.DECIMAL,
        },
      },
      {
        timestamps: false,
        tableName: "eventAttendance",
      }
    );
  
    attendance.associate = (models) => {
      attendance.hasOne(models.transaction, { foreignKey: "attendanceId" });
    };
  
    return attendance;
  };
  