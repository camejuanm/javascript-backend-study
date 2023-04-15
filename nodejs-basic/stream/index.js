const fs = require('fs');
const path = require('path');

const readableStream = fs.createReadStream(path.resolve(__dirname,'input.txt'), {
    highWaterMark: 10
});

const writeableStream = fs.createWriteStream(path.resolve(__dirname,'output.txt'));

readableStream.on('readable', () => {
    try {
        writeableStream.write(`${readableStream.read()}\n`)
    } catch(error) {

    }
});
