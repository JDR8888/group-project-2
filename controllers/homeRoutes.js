const router = require("express").Router();

router.get("/", async (req, res) => {
  res.render("homepage", {
    title: "Homepage",
  });
});

module.exports = router;
