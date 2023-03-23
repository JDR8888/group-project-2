const sequelize = require('../config/connection');
const { User, Restaurant, Date, Message } = require('../models');

const rawRestaurantData = require('./restaurantData.json');
const rawRestaurantData2 = require('./restaurantData2.json');
const userData = require('./userData.json');
const datesData = require('./dateData.json');
const messageData = require('./messageData.json');

const filteredData = rawRestaurantData.filter(
  (
    { dba, boro, cuisine_description, latitude, longitude } // eslint-disable-line
  ) => dba && boro && cuisine_description && latitude && longitude // eslint-disable-line
);
const filteredData2 = rawRestaurantData2.filter(
  (
    { dba, boro, cuisine_description, latitude, longitude } // eslint-disable-line
  ) => dba && boro && cuisine_description && latitude && longitude // eslint-disable-line
);

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Restaurant.bulkCreate(filteredData, {
    returning: true,
  });

  await Restaurant.bulkCreate(filteredData2, {
    returning: true,
  });

  await Date.bulkCreate(datesData, {
    returning: true,
  });

  await Message.bulkCreate(messageData, {
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
