const User = require("./User");
const Restaurant = require("./Restaurant");
const Date = require("./Date");
const Message = require("./Message");

User.hasMany(Date, {
  foreign_key: "user_id",
  onDelete: "CASCADE",
});

Date.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasMany(Message, {
  foreignKey: "user_id",
});

Message.belongsTo(User, {
  foreignKey: "user_id",
});

User.belongsToMany(User, {
  through: { model: Date },
  foreignKey: "user_id",
  as: "date_partners",
});

User.belongsToMany(User, {
  through: { model: Date },
  foreignKey: "date_id",
  as: "date_asker",
});

Restaurant.hasMany(Date, {
  foreignKey: "restaurant_id",
  onDelete: "CASCADE",
});

Date.belongsTo(Restaurant, {
  foreignKey: "restaurant_id",
});

module.exports = { User, Restaurant, Date, Message };
