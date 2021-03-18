const fs = require('fs');

const filename = process.argv[2];

fs.readFile(filename,   { encoding : 'utf-8' } , (error, data) => {
    if( error ) {
        console.log(error);
        return;
    }
    const options = {};
    data.split('\n').forEach((row) => {
        row = row.replace('\r', '');
        if( row && !options[row] ) {
                options[row] = {
                value: row,
                label: row
            }
        }
    });
    fs.appendFile('shop.json', JSON.stringify(options), (err) => {
        if(err) console.log(err);
    })
})

