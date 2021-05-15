const express = require('express');
const router = express.Router();

const validator = require('../validation/validator')
const { urlSchema } = require('../validation/schema')
const URLService = require('../services/URLService')

/* GET home page. */
router.post('/urls', async (req, res, next) => {
  try {
    const data = req.body;
    validator.validate(data, urlSchema);
    const result = await URLService.generate(data.originUrl);
    res.json(result);
  } catch (e) {
    next(e);
  }
});

router.get('/short/:key', async (req, res, next) => {
  try {
    const urlDoc = await URLService.getOriginUrl(req.params.key);
    res.render('index', { originUrl: urlDoc.originUrl });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
