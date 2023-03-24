const fs = require('fs');

const convertCSVtoObject = async (filePath) => {
  const data = await fs.promises.readFile(filePath, 'utf8');
  const rows = data.split('\r\n');
  const output = [];
  const headers = rows[0].split(',');
  for (let i = 1; i < rows.length; i++) {
    const splitRow = rows[i].split(',');
    const newRecord = {
      [headers[0]]: splitRow[0],
      [headers[1]]: splitRow[1],
      [headers[2]]: splitRow[2],
      [headers[3]]: splitRow[3],
      [headers[4]]: splitRow[4],
      [headers[5]]: splitRow[5],
      [headers[6]]: splitRow[6],
      [headers[7]]: splitRow[7],
    };
    output.push(newRecord);
  }

  await fs.promises.writeFile(
    './restaurant-list.json',
    JSON.stringify(output, null, 2)
  );
};

convertCSVtoObject('../seeds/restaurantData/restaraunt-list.csv');
