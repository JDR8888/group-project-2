const router = require("express").Router();
const userRoutes = require("./userRoutes");
const restaurantRoutes = require("./restaurantRoutes");
const dateRoutes = require("./dateRoutes");
const db = require("../../models");

router.use("/users", userRoutes);
router.use("/restaurants", restaurantRoutes);
router.use("/dates", dateRoutes);
router.use("/messages", dateRoutes);

module.exports = router;
