import currencies from './currencies.js';

var DEFAULT_CURRENCY_NAME = 'bitcoin';

export default {
    validate: function (address: string, currencyNameOrSymbol: string, networkType?: "prod" | "testnet") {
        var currency = currencies.getByNameOrSymbol(currencyNameOrSymbol || DEFAULT_CURRENCY_NAME);

        if (currency && currency.validator) {
            return currency.validator.isValidAddress(address, currency, networkType);
        }

        throw new Error('Missing validator for currency: ' + currencyNameOrSymbol);
    },
    isCurrencySupported: function(currencyNameOrSymbol: string) {
        var currency = currencies.getByNameOrSymbol(currencyNameOrSymbol || DEFAULT_CURRENCY_NAME);
        return !!currency
    }
};
