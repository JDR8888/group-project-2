const User = require("./User");
const Restaraunt = require("./Restaraunt");
const Dates = require("./Dates");

//Dates belongsto User

//User has many Dates

//Date belongs to Restaraunt

//Restaraunt has many Dates

module.exports = { User, Restaraunt };
