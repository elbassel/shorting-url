const chai = require('chai');

const UrlKeyGenerator = require("../services/UrlKeyGenerator");

const { expect } = chai;

describe('It tests generating unique random key ', () => {
	it('should return a unique string', async () => {
		const result = await UrlKeyGenerator.generateUniqueKey();
		expect(result.toString())
			.to.be.an('string');
	});
});
