import currencies from './currencies.js';

const DEFAULT_CURRENCY_NAME = 'bitcoin';

export const validate = function (address: string, currencyNameOrSymbol: string, networkType?: "prod" | "testnet") {
    const currency = currencies.getByNameOrSymbol(currencyNameOrSymbol || DEFAULT_CURRENCY_NAME);

    if (currency && currency.validator) {
        return currency.validator.isValidAddress(address, currency, networkType);
    }

    throw new Error('Missing validator for currency: ' + currencyNameOrSymbol);
}

export const isCurrencySupported = function(currencyNameOrSymbol: string) {
    const currency = currencies.getByNameOrSymbol(currencyNameOrSymbol || DEFAULT_CURRENCY_NAME);
    return !!currency
}
