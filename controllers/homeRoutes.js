const router = require("express").Router();

router.get("/", async (req, res) => {
  res.render("homepage", {
    title: "Homepage",
  });
});

router.get("/login", async (req, res) => {
  res.render("login", {
    title: "login",
  });
});

module.exports = router;
