const sequelize = require("../config/connection");
const { User, Restaurant, Date, Message } = require("../models");

const rawRestaurantData = require("./restaurantData.json");
const userData = require("./userData.json");
const datesData = require("./dateData.json");
const messageData = require("./messageData.json");

const filteredData = rawRestaurantData.filter((obj) => {
  return (
    obj.hasOwnProperty("dba") &&
    obj.hasOwnProperty("boro") &&
    obj.hasOwnProperty("cuisine_description") &&
    obj.hasOwnProperty("latitude") &&
    obj.hasOwnProperty("longitude")
  );
});

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Restaurant.bulkCreate(filteredData, {
    returning: true,
  });

  await Date.bulkCreate(datesData, {
    returning: true,
  });

  await Message.bulkCreate(datesData, {
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
