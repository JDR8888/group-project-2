const moment = require('moment');

module.exports = {
  format_time: (dateStr) => {
    const date = moment(dateStr);
    return date.format('h:mm A dddd M/D');
  },
};
