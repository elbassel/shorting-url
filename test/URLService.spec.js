const chai = require('chai');
const sinon = require('sinon');
const Url = require('../db/url');

const URLService = require('../services/URLService');

const { urlDoc, originUrl, key } = require('./sample-data');

const { expect } = chai;

let urlCreate;
let urlFindOne;


describe('It tests machine shortening links', () => {
	beforeEach(() => {
		urlCreate = sinon.stub(Url, 'create').returns(urlDoc);
		urlFindOne = sinon.stub(Url, 'findOne').returns(null);
	});

	afterEach(() => {
		if (urlCreate) urlCreate.restore();
		if (urlFindOne) urlFindOne.restore();
	});

	it('Should generate a short url', async () => {
		const result = await URLService
			.generate(originUrl);
		expect(result).equals(urlDoc);
	});

	it('throw error if url short link is generated before', async () => {
		urlFindOne.restore();
		urlFindOne = sinon.stub(Url, 'findOne').returns(urlDoc);
		try{
			const result = await URLService
				.generate(originUrl);
		} catch (e) {
			expect(e)
				.to.be.instanceOf(Error);
		}
	});


	it('Should get url doc by key', async () => {
		urlFindOne.restore();
		urlFindOne = sinon.stub(Url, 'findOne').returns(urlDoc);
		const result = await URLService
			.getOriginUrl(key);
		expect(result).equals(urlDoc);
	});

	it('Should throw an error if get url doc by key not exist', async () => {
		urlFindOne.restore();
		urlFindOne = sinon.stub(Url, 'findOne').returns(null);
		try {
			const result = await URLService
				.getOriginUrl(key);
		} catch (e) {
			expect(e)
				.to.be.instanceOf(Error);
		}
	});
});
