module.exports = {
  urlSchema: {
    type: 'object',
    properties: {
      originUrl: { type: 'string', minLength: 15, maxLength: 2000 },
    },
    required: ['originUrl'],
  },
};
