const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Restaraunt extends Model {}

Restaraunt.init(
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
      unique: true,
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
    modelName: "restaraunt",
  }
);

module.exports = Restaraunt;
