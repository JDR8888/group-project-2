const router = require("express").Router();
const { User, Restaurant } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll({
      where: {
        what_to_eat: req.session.user.what_to_eat,
        location: req.session.user.location,
        id: { [Op.ne]: req.session.user.id },
      },
    });
    const restaurantData = await Restaurant.findAll({
      where: {
        cuisine_description: req.session.user.what_to_eat,
        boro: req.session.user.location,
      },
    });
    const comboData = [userData, restaurantData];
    res.status(200).json(comboData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
