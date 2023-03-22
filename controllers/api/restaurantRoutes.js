const router = require('express').Router();
const { Restaurant } = require('../../models');

// GET all restaurants
router.get('/', async (req, res) => {
  try {
    const restaurantsData = await Restaurant.findAll();
    res.status(200).json(restaurantsData);
  } catch (err) {
    res.status(500).json(err);
  }
});
