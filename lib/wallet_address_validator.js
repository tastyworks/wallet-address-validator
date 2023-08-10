"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var currencies = require('./currencies');
var DEFAULT_CURRENCY_NAME = 'bitcoin';
var _default = {
  validate: function validate(address, currencyNameOrSymbol, opts) {
    var currency = currencies.getByNameOrSymbol(currencyNameOrSymbol || DEFAULT_CURRENCY_NAME);
    if (currency && currency.validator) {
      return currency.validator.isValidAddress(address, currency, opts);
    }
    throw new Error('Missing validator for currency: ' + currencyNameOrSymbol);
  },
  isCurrencySupported: function isCurrencySupported(currencyNameOrSymbol) {
    var currency = currencies.getByNameOrSymbol(currencyNameOrSymbol);
    return !!currency;
  }
};
exports["default"] = _default;