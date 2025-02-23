// https://github.com/christsim/multicoin-address-validator/blob/master/src/ada_validator.js

var cbor = require('cbor-js');
var CRC = require('crc');
var base58 = require('./crypto/base58');
var BIP173Validator = require('./bip173_validator')

function getDecoded(address) {
    try {
        const decoded = base58.decode(address);
        return cbor.decode(new Uint8Array(decoded).buffer);
    } catch (e) {
        // if decoding fails, assume invalid address
        return null;
    }
}

function isValidAddressV1(address) {
    const decoded = getDecoded(address);

    if (!decoded || (!Array.isArray(decoded) && decoded.length !== 2)) {
        return false;
    }

    const tagged = decoded[0];
    const validCrc = decoded[1];
    if (typeof (validCrc) !== 'number') {
        return false;
    }

    // get crc of the payload
    const crc = CRC.crc32(tagged);

    return crc === validCrc;
}

function isValidAddressShelley(address, currency, opts) {
    // shelley address are just bip 173 - bech32 addresses (https://cips.cardano.org/cips/cip4/)
    return BIP173Validator.isValidAddress(address, currency, opts);
}

module.exports = {
    isValidAddress: function (address, currency, opts = {}) {
        return isValidAddressV1(address) || isValidAddressShelley(address, currency, opts);
    }
};