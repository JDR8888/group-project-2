const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Restaurant extends Model {}

Restaurant.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    dba: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    boro: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cuisine_description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    latitude: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    longitude: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "restaurant",
  }
);

module.exports = Restaurant;
