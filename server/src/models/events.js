module.exports = (sequelize, Sequelize) => {
  const events = sequelize.define(
    "events",
    {
      eventName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      categoryId: {
        type: Sequelize.INTEGER,
      },
      locationId: {
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
      },
      startDate: {
        type: Sequelize.DATEONLY,
      },
      endDate: {
        type: Sequelize.DATEONLY,
      },
      time: {
        type: Sequelize.TIME,
      },
      eventStatus: {
        type: Sequelize.BOOLEAN,
      },
      description: {
        type: Sequelize.TEXT,
      },
      address: {
        type: Sequelize.INTEGER,
      },
      hargatiket: {
        type: Sequelize.INTEGER,
      },
      totaltiket: {
        type: Sequelize.INTEGER,
      },

      image: {
        type: Sequelize.STRING,
      },
    },
    {
      timestamps: false,
      tableName: "events",
    }
  );

  events.associate = (models) => {
    events.belongsTo(models.eventlocation, { foreignKey: "locationId" });
    events.belongsTo(models.eventcategory, { foreignKey: "categoryId" });
    events.hasMany(models.tickets, { foreignKey: "eventId" });
  };

  return events;
};
