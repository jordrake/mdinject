function between(predicateStart, predicateEnd, array) {
	let started = false;
	return array.filter(element => {
		if (!started && predicateStart(element)) {
			started = true;
			return false;
		}

		if (started && predicateEnd(element)) {
			started = false;
			return false;
		}

		return started;
	});
}

module.exports = between;
