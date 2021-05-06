const { Command } = require('commander');
const { shiftChar } = require('./shift');

const program = new Command();
program.requiredOption('-s, --shift <number>')
  .option('-i, --input <string>')
  .option('-o, --output <string>')
	.requiredOption('-a, --action <string>');

program.parse();

const options = program.opts();

if ( options.action !== 'encode' && options.action !== 'decode' ) {
    console.error("Action must be 'encode' or 'decode'");
    process.exit(1);
};

if ( isNaN(+options.shift) ){
	console.error("The shift must be a number");
	process.exit(1);
};

module.exports = {
	options: options,
	shift: shiftChar(+options.shift)
};
