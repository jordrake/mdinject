function trimAll(strings) {
	const smallestWhitespaceCount = strings.reduce((min, string) => {
		const whitespaceCount = string.search(/\S/);

		if (whitespaceCount > 0 && (!min || whitespaceCount < min)) {
			return whitespaceCount;
		}

		return min;
	}, 0);

	return strings.map(string => string.substr(smallestWhitespaceCount));
}

module.exports = trimAll;
