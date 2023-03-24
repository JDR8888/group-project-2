const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Message extends Model {}

Message.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
      defaultValue: 'No message!',
    },
    sender_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: false,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    receiver_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: false,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'message',
    indexes: [
      {
        unique: false,
        fields: ['sender_id', 'receiver_id'],
      },
    ],
  }
);

module.exports = Message;
