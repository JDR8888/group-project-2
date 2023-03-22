const sequelize = require("../config/connection");
const { User, Restaurant, Dates } = require("../models");

const rawRestaurantData = require("./restaurantData.json");
const userData = require("./userData.json");
const datesData = require("./datesData.json");

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

  await Dates.bulkCreate(datesData, {
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
