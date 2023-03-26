const router = require('express').Router();
const { Op, Sequelize } = require('sequelize');
const { User, Restaurant, Message } = require('../models');

router.get('/', async (req, res) => {
  try {
    res.render('homepage', {
      title: 'Homepage',
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', async (req, res) => {
  res.render('login', {
    logged_in: req.session.logged_in,
    title: 'login',
  });
});

// eslint-disable-next-line consistent-return
router.get('/messages', async (req, res) => {
  try {
    if (!req.session.user) {
      return res.redirect('/login');
    }
    const messages = await Message.findAll({
      where: {
        receiver_id: req.session.user.id,
      },
      include: {
        model: User,
        as: 'sender',
      },
    });
    console.log('messages', messages);

    const displayMessages = messages.map((message) =>
      message.get({ plain: true })
    );
    console.log('displayMessages', displayMessages);
    res.render('message-board', {
      displayMessages,
      logged_in: req.session.logged_in,
      user_id: req.session.user.id,
      title: 'Messages',
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// eslint-disable-next-line consistent-return
router.get('/dating', async (req, res) => {
  try {
    if (!req.session.user) {
      return res.redirect('/login');
    }
    const updatedUser = await User.findOne({
      where: { id: req.session.user.id },
    });

    const updatedUserSerial = updatedUser.get({ plain: true });
    console.log('userget', updatedUserSerial);

    const userData = await User.findAll({
      where: {
        what_to_eat: updatedUserSerial.what_to_eat,
        location: updatedUserSerial.location,
        id: { [Op.ne]: req.session.user.id },
      },
    });
    console.log('userData', userData);
    if (!userData) {
      console.log('No matching users found');
    }

    const restaurantData = await Restaurant.findAll({
      where: {
        cuisine_description: updatedUserSerial.what_to_eat,
        boro: updatedUserSerial.location,
      },
      order: Sequelize.literal('rand()'),
      limit: 10,
    });

    const displayDates = userData.map((users) => users.get({ plain: true }));
    const displayRestaurants = restaurantData.map((restaurants) =>
      restaurants.get({ plain: true })
    );
    console.log('displayDates:', displayDates);

    res.render('dating', {
      what_to_eat: updatedUserSerial.what_to_eat,
      location: updatedUserSerial.location,
      user_id: req.session.user.id,
      displayDates,
      displayRestaurants,
      logged_in: req.session.logged_in,
      title: 'Dating',
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/signup', async (req, res) => {
  res.render('signup', {
    title: 'signup',
  });
});

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
