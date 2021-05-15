const AJV = require('ajv');

const FormatError = require('../utils/FormatError');


class Validator {
  static validate(data, schema) {
    const ajv = new AJV({ allErrors: true, removeAdditional: true });
    const valid = ajv.validate(schema, data);
    if (!valid) throw new FormatError(ajv.errors);
  }
}

module.exports = Validator;
