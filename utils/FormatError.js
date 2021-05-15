const BaseError = require('./BaseError');

class FormatError extends BaseError {
  constructor(errors) {
    super();
    this.message = 'Format_Validation';
    this.errors = errors;
    this.status = 409;
  }
}

module.exports = FormatError;
