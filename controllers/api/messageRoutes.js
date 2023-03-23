const router = require("express").Router();
const { Message } = require("../../models");
const { Op } = require("sequelize"); 
const db = require('../../models');

// Get a user's messages
router.get('/:id', async (req, res) => {
  try {
    const { userId } = req.params;

    // Find the user's messages using the userId
    const messages = await Message.findAll({
      where: {
        [db.Sequelize.Op.or]: [{ fromUserId: userId }, { toUserId: userId }]
      },
      include: [{ model: db.User, as: 'fromUser' }, { model: db.User, as: 'toUser' }]
    });

    // Return the messages as JSON data
    res.json(messages);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// Send a message from the current user to another user
router.post('/:id', async (req, res) => {
  try {
    const { toUserId } = req.params;
    const { message } = req.body;

    // Create a new message and save it to the database
    const newMessage = await db.Message.create({
      fromUserId: req.session.user.id,
      toUserId,
      message
    });

    // Return the new message as JSON data
    res.json(newMessage);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

module.exports = router;