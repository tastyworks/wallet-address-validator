"use strict";

var jsSHA = require('jssha/src/sha256');
var Blake256 = require('./blake256');
var _keccak = require('./sha3')['keccak256'];
var Blake2B = require('./blake2b');
function numberToHex(number) {
  var hex = Math.round(number).toString(16);
  if (hex.length === 1) {
    hex = '0' + hex;
  }
  return hex;
}
function hexToUint8(hexString) {
  var arr = [];
  for (var i = 0; i < hexString.length; i += 2) {
    arr.push(parseInt(hexString.substr(i, 2), 16));
  }
  return new Uint8Array(arr);
}
module.exports = {
  toHex: function toHex(arrayOfBytes) {
    var hex = '';
    for (var i = 0; i < arrayOfBytes.length; i++) {
      hex += numberToHex(arrayOfBytes[i]);
    }
    return hex;
  },
  sha256: function sha256(hexString) {
    var sha = new jsSHA('SHA-256', 'HEX');
    sha.update(hexString);
    return sha.getHash('HEX');
  },
  sha256Checksum: function sha256Checksum(payload) {
    return this.sha256(this.sha256(payload)).substr(0, 8);
  },
  blake256: function blake256(hexString) {
    return new Blake256().update(hexString, 'hex').digest('hex');
  },
  blake256Checksum: function blake256Checksum(payload) {
    return this.blake256(this.blake256(payload)).substr(0, 8);
  },
  blake2b: function blake2b(hexString, outlen) {
    return new Blake2B(outlen).update(hexToUint8(hexString)).digest('hex');
  },
  keccak256: function keccak256(hexString) {
    return _keccak(hexString);
  },
  keccak256Checksum: function keccak256Checksum(payload) {
    return _keccak(payload).toString().substr(0, 8);
  }
};