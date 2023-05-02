# wallet-address-validator
Simple wallet address validator for validating Bitcoin and other altcoins addresses in **Node.js and browser**.

Forked from [ognus/wallet-address-validator](https://github.com/ognus/wallet-address-validator).

**File size is ~22 kB (minifed and gzipped)**.

## Installation

### NPM
```
npm install @tastyworks/wallet-address-validator
```

### Browser
```html
<script src="wallet-address-validator.min.js"></script>
```

## API

##### validate (address [, currency = 'bitcoin'[, networkType = 'prod']])

###### Parameters
* address - Wallet address to validate.
* currency - Optional. Currency name or symbol, e.g. `'bitcoin'` (default), `'litecoin'` or `'LTC'`
* networkType - Optional. Use `'prod'` (default) to enforce standard address, `'testnet'` to enforce testnet address and `'both'` to enforce nothing.

> Returns true if the address (string) is a valid wallet address for the crypto currency specified, see below for supported currencies.

### Supported crypto currencies

* Aave/AAVE, `'aave'` or `'AAVE'`
* Bitcoin/BTC, `'bitcoin'` or `'BTC'`
* BitcoinCash/BCH, `'bitcoincash'` or `'BCH'`
* Dogecoin/DOGE, `'dogecoin'` or `'DOGE'`
* Ethereum/ETH, `'ethereum'` or `'ETH'`
* Litecoin/LTC, `'litecoin'` or `'LTC'`
* Basic Attention Token/BAT, `'basicattentiontoken'` or `'BAT'`
* Compound/COMP, `'compound'` or `'COMP'`
* Enjin Coin/ENJ, `'enjincoin'` or `'ENJ'`
* Kyber Network/KNC, `'kybernetwork'` or `'KNC'`
* Chain Link/LINK, `'chainlink'` or `'LINK'`
* Polugon/MATIC, `'polygon'` or `'MATIC'`
* Maker/MKR, `'maker'` or `'MKR'`
* OMG Network/OMG, `'omgnetwork'` or `'OMG'`
* PAX Gold/PAX, `'paxgold'` or `'PAXG'`
* Shiba Inu/SHIB, `'shibainu'` or `'SHIB'`
* Uni Swap/UNI, `'uniswap'` or `'UNI'`
* 0x Protocol/zrx, `'0xprotocol'` or `'ZRX'`

### Usage example

#### Node
```javascript
import CAValidator from '@tastyworks/wallet-address-validator'

const valid = WAValidator.validate('1KFzzGtDdnq5hrwxXGjwVnKzRbvf8WVxck', 'BTC');
if(valid) {
	console.log('This is a valid address');
} else {
	console.log('Address INVALID');
}
// This will log 'This is a valid address' to the console.
```

```javascript
import CAValidator from '@tastyworks/wallet-address-validator'

const supported = WAValidator.isCurrencySupported('BTC');

if(supported) {
	console.log('This is a supported coin');
} else {
	console.log('Address INVALID');
}
// This will log 'This is a valid address' to the console.
```

```javascript
import CAValidator from '@tastyworks/wallet-address-validator'

const valid = CAValidator.validate('1KFzzGtDdnq5hrwxXGjwVnKzRbvf8WVxck', 'litecoin', 'testnet');

if(valid) {
      console.log('This is a valid address');
} else {
      console.log('Address INVALID');
}
// As this is a invalid litecoin address 'Address INVALID' will be logged to console.
```
