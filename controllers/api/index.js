const router = require("express").Router();
const userRoutes = require("./userRoutes");
const restaurantRoutes = require("./restaurantRoutes");
const dateRoutes = require("./dateRoutes");

router.use("/users", userRoutes);
router.use("/restaurants", restaurantRoutes);
router.use("/dates", dateRoutes);

module.exports = router;
