const User = require("./User");
const Restaurant = require("./Restaurant");
const Dates = require("./Dates");

User.hasMany(Dates, {
  foreign_key: "user_id",
  onDelete: "CASCADE",
});

Dates.belongsTo(User, {
  foreignKey: "user_id",
});

Restaurant.hasMany(Dates, {
  foreignKey: "restaurant_id",
  onDelete: "CASCADE",
});

Dates.belongsTo(Restaurant, {
  foreignKey: "restaurant_id",
});

module.exports = { User, Restaurant, Dates };
