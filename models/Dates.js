const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Dates extends Model {}

Dates.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    restaurant_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: false,
      references: {
        model: "restaurant",
        key: "id",
      },
    },
    user1_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: false,
      refrences: {
        model: "user",
        key: "id",
      },
    },
    user2_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: false,
      refrences: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "dates",
  }
);

module.exports = Dates;
