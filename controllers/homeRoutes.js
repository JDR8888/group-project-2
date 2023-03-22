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

router.get("/dating", async(req,res)=>{
  res.render('dating'),{
    title: "dating"
  }
})

module.exports = router;

// when you query for a user's dates
/*
const dates1 = await Date.findAll({
    where: {
        user1: req.session.user_id,
    }
});

const dates2 = await Date.findAll({
    where: {
        user2: req.session.user_id
    }
})

const dates = [...dates1, ...dates2]

const a = [1, 2, 3];
const b = [4, 5, 6];
const c = [...a, ...b] // [1, 2, 3, 4, 5, 6]
const d = [...a, b] // [1, 2, 3, [4, 5, 6]]

const e = { color: 'blue', length: 12 }
const f = { size: 'large' }
const g = { ...e, ...f } // 
*/
