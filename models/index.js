const User = require("./User");
const Restaraunt = require("./Restaraunt");
const Dates = require("./Dates");

User.hasMany(Dates, {
  foreign_key: "user_id",
  onDelete: "CASCADE",
});

Dates.belongsTo.apply(User, {
  foreignKey: "user_id",
});

Restaraunt.hasMany(Dates, {
  foreignKey: "restaraunt_id",
  onDelete: "CASCADE",
});

Date.belongsTo(Restaraunt, {
  foreignKey: "restaraunt_id",
});

module.exports = { User, Restaraunt, Dates };
