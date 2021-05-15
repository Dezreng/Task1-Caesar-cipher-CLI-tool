const fs = require('fs');
const { pipeline } = require('stream');
const { CaesarCipher } = require('./function/CaesarCipher');
const { options } = require('./function/comandConsole');
const { fileСheck } = require('./function/common');

pipeline(
    options.input ? fs.createReadStream(options.input) : process.stdin,
    new CaesarCipher(),
    options.output ? fileСheck(options.output) : process.stdout,
    (err) => {
        if (err) {
            process.stderr.write('Input file is not exist');
            process.exit(1);
        } else {
            console.log('Pipeline succeeded.');
        }
    }
)