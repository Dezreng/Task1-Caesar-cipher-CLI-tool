const { Transform } = require('stream');
const { enDecoder } = require('./enDecoder');

class CaesarCipher extends Transform {

	constructor(options) {
		super(options)
	}

	_transform(chunk, _, callback) {
		for ( let i = 0; i < chunk.length; i++ ) {
			chunk[i] = enDecoder(chunk[i]);
		}
		callback(null, chunk);
	}
}

exports.CaesarCipher = CaesarCipher;
