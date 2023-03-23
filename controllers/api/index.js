const router = require("express").Router();
const userRoutes = require("./userRoutes");
const restaurantRoutes = require("./restaurantRoutes");
const db = require('../../models');

router.use("/users", userRoutes);
router.use("/restaurants", restaurantRoutes);

exports.getMatches = async (req, res) => {
  try {
    // Get the user's location and food preferences from the request query parameters
    const { location, food_preferences } = req.query;

    // Find all users that have the same location and food preferences as the current user
    const matches = await db.User.findAll({
      where: {
        location,
        food_preferences
      }
    });

    // Return the matches as JSON data
    res.json(matches);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

module.exports = router;