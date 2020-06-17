const parse = require('csv-parse');
const fs = require('fs');


const resourceAccoCtrl = require('./controllers/ResourceCsv');

const csvData = [];

const loadCsv = (path) => {
    console.log(path)
    fs.createReadStream(path)
        .pipe(
            parse({
                delimiter: ','
            })
        )
        .on('data', (dataRow) => {
            csvData.push(dataRow);
        })
        .on('end', () => {
            csvData.splice(0, 1);
            resourceAccoCtrl.removeCollection()
                .then(message => console.log(message))
                .catch(err => console.error(err));
            resourceAccoCtrl.addData(csvData)
                .then(message => console.log(message))
                .catch(err => console.error(err));
        })
}

module.exports = loadCsv;