const { StatusCodes } = require('http-status-codes/build/cjs/status-codes');
const CustomAPIError = require('./custom-error');

class UnauthenticatedError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

module.exports = UnauthenticatedError;
