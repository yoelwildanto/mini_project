module.exports = (sequelize, Sequelize) => {
    const city = sequelize.define(
      "city",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        citiesName: {
          type: Sequelize.STRING,
          allowNull: false,
        },
      },
      {
        timestamps: false,
        tableName: "cities",
      }
    );
    return city;
  };