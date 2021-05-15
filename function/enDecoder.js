const { options, shift } = require('./comandConsole');

exports.enDecoder = (char) => {
	const isAlpha = /[a-z]/i;
	let shiftChar = shift;

	if ( isAlpha.test(String.fromCharCode(char)) ) {
		const registr = char > 64 && char < 91 ? 65 : 97;

		if ( options.action === 'decode' ) {
			shiftChar = -shiftChar;
		}
		char = (char - registr + shiftChar) % 26;
		if ( char < 0 ) {
			char += 26;
		}
		char += registr;
	}

	return char;
}
