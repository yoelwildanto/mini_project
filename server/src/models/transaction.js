// models/Event.js
const bcrypt = require("bcrypt");

////SESUAIKAN DENGAN DB (BUAT MIGRATION DAN SEEDER DULU)

module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define("Transaction", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    event_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    // location_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: "Location",
    //     key: "id",
    //   },
    // },
    // category_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: "Category",
    //     key: "id",
    //   },
    // },
  });

  // Event.associate = (models) => {
  //   Event.belongsTo(models.Location, { foreignKey: "location_id" });
  //   Event.belongsTo(models.Category, { foreignKey: "category_id" });
  // };

  return Transaction;
};
