const crypto = require('crypto');

class UrlKeyGenerator {
	static generateUniqueKey(len = 12) {
		return crypto.randomBytes(Math.ceil(len / 2))
			.toString('hex').slice(0, len);
	}
}

module.exports = UrlKeyGenerator;
