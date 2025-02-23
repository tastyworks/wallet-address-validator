var currencies = require('./currencies');

var DEFAULT_CURRENCY_NAME = 'bitcoin';

module.exports = {
    validate: function (address, currencyNameOrSymbol, opts) {
        var currency = currencies.getByNameOrSymbol(currencyNameOrSymbol || DEFAULT_CURRENCY_NAME);

        if (currency && currency.validator) {
            return currency.validator.isValidAddress(address, currency, opts);
        }

        throw new Error('Missing validator for currency: ' + currencyNameOrSymbol);
    },
    isCurrencySupported: function(currencyNameOrSymbol) {
        var currency = currencies.getByNameOrSymbol(currencyNameOrSymbol);
        return !!currency
    }
}