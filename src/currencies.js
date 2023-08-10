var ETHValidator = require('./ethereum_validator');
var BTCValidator = require('./bitcoin_validator');
var BCHValidator = require('./bch_validator');
var ADAValidator = require('./ada_validator');

// defines P2PKH and P2SH address types for standard (prod) and testnet networks
var CURRENCIES = [{
    name: 'bitcoin',
    symbol: 'btc',
    addressTypes: { prod: ['00', '05'], testnet: ['6f', 'c4', '3c', '26'] },
    bech32Hrp: { prod: ['bc'], testnet: ['tb'] },
    validator: BTCValidator
},{
    name: 'bitcoincash',
    symbol: 'bch',
    regexp: '^[qQpP]{1}[0-9a-zA-Z]{41}$',
    addressTypes: { prod: ['00', '05'], testnet: ['6f', 'c4'] },
    validator: BCHValidator
},{
    name: 'litecoin',
    symbol: 'ltc',
    addressTypes: {prod: ['30', '05', '32'], testnet: ['6f', 'c4', '3a']},
    bech32Hrp: {prod: ['ltc'], testnet: ['tltc']},
    validator: BTCValidator
},{
    name: 'dogecoin',
    symbol: 'doge',
    addressTypes: {prod: ['1e', '16'], testnet: ['71', 'c4']},
    validator: BTCValidator
},{
    name: 'ethereum',
    symbol: 'eth',
    validator: ETHValidator,
},{
    name: 'aave',
    symbol: 'aave',
    validator: ETHValidator,
},{
    name: 'basicattentiontoken',
    symbol: 'bat',
    validator: ETHValidator,
},{
    name: 'cardano',
    symbol: 'ada',
    bech32Hrp: { prod: ['addr'], testnet: ['addr']},
    validator: ADAValidator
},{
    name: 'compound',
    symbol: 'comp',
    validator: ETHValidator,
},{
    name: 'enjincoin',
    symbol: 'enj',
    validator: ETHValidator,
},{
    name: 'kybernetwork',
    symbol: 'knc',
    validator: ETHValidator,
},{
    name: 'chainlink',
    symbol: 'link',
    validator: ETHValidator,
},{
    name: 'polygon',
    symbol: 'matic',
    validator: ETHValidator,
},{
    name: 'maker',
    symbol: 'mkr',
    validator: ETHValidator,
},{
    name: 'omgnetwork',
    symbol: 'omg',
    validator: ETHValidator,
},{
    name: 'paxgold',
    symbol: 'paxg',
    validator: ETHValidator,
},{
    name: 'shibainu',
    symbol: 'shib',
    validator: ETHValidator,
},{
    name: 'uniswap',
    symbol: 'uni',
    validator: ETHValidator,
},{
    name: '0xprotocol',
    symbol: 'zrx',
    validator: ETHValidator,
}];


module.exports = {
    getByNameOrSymbol: function (currencyNameOrSymbol) {
        var nameOrSymbol = currencyNameOrSymbol.toLowerCase();
        for (var i = 0; i < CURRENCIES.length; i++) {
            var currency = CURRENCIES[i];
            if(currency.name === nameOrSymbol || currency.symbol === nameOrSymbol) {
                return currency;
            }
        }
        return null;
    }
};
