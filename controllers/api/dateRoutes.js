const router = require("express").Router();
const { User, Restaurant } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll({
      where: {
        what_to_eat: "italian",
        location: "upper east side",
      },
    });
    const restaurantData = await Restaurant.findAll({
      where: {
        cuisine_description: "italian",
        boro: "manhattan",
      },
    });
    const comboData = [userData, restaurantData];
    res.status(200).json(comboData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
