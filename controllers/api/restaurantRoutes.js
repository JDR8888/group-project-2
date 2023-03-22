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

// GET a single restaurant by id
router.get('/:id', async (req, res) => {
  try {
    const restaurantData = await Restaurant.findByPk(req.params.id);
    if (!restaurantData) {
      res.status(404).json({ message: 'No restaurant found with this id!' });
      return;
    }
    res.status(200).json(restaurantData);
  } catch (err) {
    res.status(500).json(err);
  }
});

