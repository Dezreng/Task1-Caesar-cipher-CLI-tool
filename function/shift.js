exports.shiftChar = ( optionsShift ) => {
   let shift = optionsShift;

	if ( shift > 0 && shift < 27 ) {
		return shift;
	} else if ( shift >= 27 ) {
		shift -= 26;
		return this.shiftChar(shift);
	} else if ( shift <= 0 ) {
		shift += 26;
		return this.shiftChar(shift);
	}
  }
	