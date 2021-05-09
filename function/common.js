const fs = require('fs');

exports.fileСheck = ( options ) => {
	 if (fs.existsSync(options)) {
    return fs.createWriteStream(options, {flags: 'a'});
  } else {
		process.stderr.write('Output file is not exist');
    process.exit(1);
	}
}