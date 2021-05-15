const Url = require('../db/url')
const UrlKeyGenerator = require('./UrlKeyGenerator');
const BASE_URL = 'http://localhost:3000/short';

class URLService {
	static async generate(originUrl) {
		const urlDoc = await Url.findOne({ originUrl });
		if (urlDoc) throw new Error('This Url already generated');
		const key = UrlKeyGenerator.generateUniqueKey();
		const shortURI = await Url.create({originUrl, key});
		shortURI.key = `${BASE_URL}/${shortURI.key}`;
		return shortURI;
	}

	static async getOriginUrl (key) {
		const urlDoc = await Url.findOne({key});
		if (!urlDoc) throw new Error('Url not exist');
		return urlDoc;
	}
}

module.exports = URLService;
