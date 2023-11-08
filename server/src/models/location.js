// models/Location.js
module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define("Location", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  // Location.associate = (models) => {
  //   Location.hasMany(models.Event, { foreignKey: "location_id" });
  // };

  return Location;
};
