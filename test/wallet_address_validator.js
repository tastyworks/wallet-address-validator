var isNode = typeof module !== 'undefined' && typeof module.exports !== 'undefined';

var chai = isNode ? require('chai') : window.chai,
    expect = chai.expect;

var WAValidator = require('../src/index.js')

function valid (address, currency, networkType) {
    var result = WAValidator.validate(address, currency, { networkType: networkType });
    expect(result).to.be.true;
}

function invalid (address, currency, networkType) {
    var result = WAValidator.validate(address, currency, { networkType: networkType });
    expect(result).to.be.false;
}

describe('WAValidator.validate()', function () {
    describe('valid results', function () {
        it('should return true for correct bitcoin addresses', function () {
            valid('12KYrjTdVGjFMtaxERSk3gphreJ5US8aUP', 'bitcoin');
            valid('12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y', 'bitcoin');
            valid('12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y', 'BTC');
            valid('12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y', 'Bitcoin');
            valid('12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y', 'btc');
            valid('12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y', 'btc', 'prod');
            valid('12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y', 'btc', 'both');
            valid('15uwigGExiNQxTNr1QSZYPXJMp9Px2YnVU', 'btc', 'prod');
            valid('3FyVFsEyyBPzHjD3qUEgX7Jsn4tcHNZFkn', 'btc', 'prod');
            valid('38mKdURe1zcQyrFqRLzR8PRao3iLGEPVsU', 'btc', 'prod');
            valid('mptPo5AvLzJXi4T82vR6g82fT5uJ6HsQCu', 'btc', 'both');
            valid('1oNLrsHnBcR6dpaBpwz3LSwutbUNkNSjs', 'bitcoin');
            valid('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'bitcoin', 'testnet');
            valid('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'bitcoin', 'both');
            valid('1HVDCg2KrPBH1Mg5SK9fGjAR9KVqyMMdBC', 'btc');

            valid('1SQHtwR5oJRKLfiWQ2APsAd9miUc4k2ez');
            valid('116CGDLddrZhMrTwhCVJXtXQpxygTT1kHd');

            // p2sh addresses
            valid('3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt');
            valid('3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt', 'bitcoin');
            valid('2MxKEf2su6FGAUfCEAHreGFQvEYrfYNHvL7', 'bitcoin', 'testnet');

            // regtest
            valid('GSa5espVLNseXEfKt46zEdS6jrPkmFghBU', 'bitcoin', 'testnet');

            // segwit addresses
            valid('BC1QW508D6QEJXTDG4Y5R3ZARVARY0C5XW7KV8F3T4', 'bitcoin');
            valid('bc1q2t63ewm3mvh0ztmnmezxm7s0tefknenxlrlwrk', 'bitcoin');

            valid('tb1qrp33g0q5c5txsp9arysrx4k6zdkfs4nce4xj0gdcccefvpysxf3q0sl5k7', 'bitcoin', 'testnet');
            valid('tb1qqqqqp399et2xygdj5xreqhjjvcmzhxw4aywxecjdzew6hylgvsesrxh6hy', 'bitcoin', 'testnet');

            invalid("tc1qw508d6qejxtdg4y5r3zarvary0c5xw7kg3g4ty", 'bitcoin');
            invalid('bc1pw508d6qejxtdg4y5r3zarvary0c5xw7kw508d6qejxtdg4y5r3zarvary0c5xw7k7grplx', 'bitcoin');
            invalid('BC1SW50QA3JX3S', 'bitcoin');
            invalid('bc1zw508d6qejxtdg4y5r3zarvaryvg6kdaj', 'bitcoin');
            invalid("bc1qw508d6qejxtdg4y5r3zarvary0c5xw7kv8f3t5", 'bitcoin');
            invalid("BC13W508D6QEJXTDG4Y5R3ZARVARY0C5XW7KN40WF2", 'bitcoin');
            invalid("bc1rw5uspcuh", 'bitcoin');
            invalid("bc10w508d6qejxtdg4y5r3zarvary0c5xw7kw508d6qejxtdg4y5r3zarvary0c5xw7kw5rljs90", 'bitcoin');
            invalid("BC1QR508D6QEJXTDG4Y5R3ZARVARYV98GJ9P", 'bitcoin');
            invalid("tb1qrp33g0q5c5txsp9arysrx4k6zdkfs4nce4xj0gdcccefvpysxf3q0sL5k7", 'bitcoin');
            invalid("bc1zw508d6qejxtdg4y5r3zarvaryvqyzf3du", 'bitcoin');
            invalid("tb1qrp33g0q5c5txsp9arysrx4k6zdkfs4nce4xj0gdcccefvpysxf3pjxtptv", 'bitcoin');
            invalid("bc1gmk9yu", 'bitcoin')
        });

        it('should return true for correct bitcoincash addresses', function () {
            valid('12KYrjTdVGjFMtaxERSk3gphreJ5US8aUP', 'bitcoincash');
            valid('12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y', 'bitcoincash');
            valid('12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y', 'BCH');
            valid('12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y', 'Bitcoin');
            valid('12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y', 'bch');
            valid('12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y', 'bch', 'prod');
            valid('12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y', 'bch', 'both');
            valid('1oNLrsHnBcR6dpaBpwz3LSwutbUNkNSjs', 'bitcoincash');
            valid('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'bitcoincash', 'testnet');
            valid('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'bitcoincash', 'both');

            // p2sh addresses
            valid('3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt', 'bitcoincash');
            valid('2MxKEf2su6FGAUfCEAHreGFQvEYrfYNHvL7', 'bitcoincash', 'testnet');

            valid('bitcoincash:qq4v32mtagxac29my6gwj6fd4tmqg8rysu23dax807', 'bch');

        });

        it('should return true for correct litecoin addresses', function () {
            valid('LVg2kJoFNg45Nbpy53h7Fe1wKyeXVRhMH9', 'litecoin');
            valid('LVg2kJoFNg45Nbpy53h7Fe1wKyeXVRhMH9', 'LTC');
            valid('LTpYZG19YmfvY2bBDYtCKpunVRw7nVgRHW', 'litecoin');
            valid('Lb6wDP2kHGyWC7vrZuZAgV7V4ECyDdH7a6', 'litecoin');
            valid('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'litecoin', 'testnet');

            // p2sh addresses
            valid('3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt', 'litecoin');
            valid('2MxKEf2su6FGAUfCEAHreGFQvEYrfYNHvL7', 'litecoin', 'testnet');
            valid('QW2SvwjaJU8LD6GSmtm1PHnBG2xPuxwZFy', 'litecoin', 'testnet');
            valid('QjpzxpbLp5pCGsCczMbfh1uhC3P89QZavY', 'litecoin', 'testnet');

            // segwit addresses
            valid('ltc1qg42tkwuuxefutzxezdkdel39gfstuap288mfea', 'litecoin');
            valid('ltc1qg42tkwuuxefutzxezdkdel39gfstuap288mfea', 'litecoin', { networkType: 'prod' });
            valid('tltc1qu78xur5xnq6fjy83amy0qcjfau8m367defyhms', 'litecoin', { networkType: 'testnet' });
            valid('tltc1qu78xur5xnq6fjy83amy0qcjfau8m367defyhms', 'litecoin', { networkType: 'testnet' });
        });

        it('should return true for correct dogecoin addresses', function () {
            valid('DPpJVPpvPNP6i6tMj4rTycAGh8wReTqaSU', 'dogecoin');
            valid('DNzLUN6MyYVS5zf4Xc2yK69V3dXs6Mxia5', 'dogecoin');
            valid('DPS6iZj7roHquvwRYXNBua9QtKPzigUUhM', 'dogecoin');
            valid('DPS6iZj7roHquvwRYXNBua9QtKPzigUUhM', 'DOGE');
            //TODO: NEED A DOGECOIN TESTNET ADDRESS

            //p2sh addresses
            valid('A7JjzK9k9x5b2MkkQzqt91WZsuu7wTu6iS', 'dogecoin');
            valid('2MxKEf2su6FGAUfCEAHreGFQvEYrfYNHvL7', 'dogecoin', 'testnet');
        });

        it('should return true for correct Ethereum addresses', function () {
            valid('0xE37c0D48d68da5c5b14E5c1a9f1CFE802776D9FF', 'ethereum');
            valid('0xa00354276d2fC74ee91e37D085d35748613f4748', 'ethereum');
            valid('0xAff4d6793F584a473348EbA058deb8caad77a288', 'ETH');
            valid('0xc6d9d2cd449a754c494264e1809c50e34d64562b', 'ETH');
            valid('0x52908400098527886E0F7030069857D2E4169EE7', 'ETH');
            valid('0x8617E340B3D01FA5F11F306F4090FD50E238070D', 'ETH');
            valid('0xde709f2102306220921060314715629080e2fb77', 'ETH');
            valid('0x27b1fdb04752bbc536007a920d24acb045561c26', 'ETH');
            valid('0x5aAeb6053F3E94C9b9A09f33669435E7Ef1BeAed', 'ETH');
            valid('0xfB6916095ca1df60bB79Ce92cE3Ea74c37c5d359', 'ETH');
            valid('0xdbF03B407c01E7cD3CBea99509d93f8DDDC8C6FB', 'ETH');
            valid('0xD1220A0cf47c7B9Be7A2E6BA89F429762e7b9aDb', 'ETH');

            valid('0xD1220A0cf47c7B9Be7A2E6BA89F429762e7b9aDb', 'aave');
            valid('0xD1220A0cf47c7B9Be7A2E6BA89F429762e7b9aDb', 'bat');
            valid('0xD1220A0cf47c7B9Be7A2E6BA89F429762e7b9aDb', 'comp');
            valid('0xD1220A0cf47c7B9Be7A2E6BA89F429762e7b9aDb', 'enj');
            valid('0xD1220A0cf47c7B9Be7A2E6BA89F429762e7b9aDb', 'knc');
            valid('0xD1220A0cf47c7B9Be7A2E6BA89F429762e7b9aDb', 'link');
            valid('0xD1220A0cf47c7B9Be7A2E6BA89F429762e7b9aDb', 'matic');
            valid('0xD1220A0cf47c7B9Be7A2E6BA89F429762e7b9aDb', 'mkr');
            valid('0xD1220A0cf47c7B9Be7A2E6BA89F429762e7b9aDb', 'omg');
            valid('0xD1220A0cf47c7B9Be7A2E6BA89F429762e7b9aDb', 'paxg');
            valid('0xD1220A0cf47c7B9Be7A2E6BA89F429762e7b9aDb', 'shib');
            valid('0xD1220A0cf47c7B9Be7A2E6BA89F429762e7b9aDb', 'uni');
            valid('0xD1220A0cf47c7B9Be7A2E6BA89F429762e7b9aDb', 'zrx');
        });

    });

    describe('invalid results', function () {
        function commonTests(currency) {
            invalid('', currency); //reject blank
            invalid('%%@', currency); //reject invalid base58 string
            invalid('1A1zP1ePQGefi2DMPTifTL5SLmv7DivfNa', currency); //reject invalid address
            invalid('bd839e4f6fadb293ba580df5dea7814399989983', currency);  //reject transaction id's
            //testnet
            invalid('', currency, 'testnet'); //reject blank
            invalid('%%@', currency, 'testnet'); //reject invalid base58 string
            invalid('1A1zP1ePQGefi2DMPTifTL5SLmv7DivfNa', currency, 'testnet'); //reject invalid address
            invalid('bd839e4f6fadb293ba580df5dea7814399989983', currency, 'testnet');  //reject transaction id's
        }

        it('should return false for incorrect bitcoin addresses', function () {
            commonTests('bitcoin');
        });

        it('should return false for incorrect bitcoincash addresses', function () {
            commonTests('bitcoincash');
        });

        it('should return false for incorrect litecoin addresses', function () {
            commonTests('litecoin');
        });

        it('should return false for incorrect dogecoin addresses', function () {
            commonTests('dogecoin');
        });

        it('should return false for incorrect eip55 addresses', function () {
            invalid('6xAff4d6793F584a473348EbA058deb8caad77a288', 'ethereum');
            invalid('0x02fcd51aAbB814FfFe17908fbc888A8975D839A5', 'ethereum');
            invalid('0XD1220A0CF47C7B9BE7A2E6BA89F429762E7B9ADB', 'ethereum');
            invalid('aFf4d6793f584a473348ebA058deb8caad77a2885', 'ethereum');
            invalid('0xff4d6793F584a473', 'ethereum');

            invalid('0x02fcd51aAbB814FfFe17908fbc888A8975D839A5', 'aave');
            invalid('0x02fcd51aAbB814FfFe17908fbc888A8975D839A5', 'bat');
            invalid('0x02fcd51aAbB814FfFe17908fbc888A8975D839A5', 'comp');
            invalid('0x02fcd51aAbB814FfFe17908fbc888A8975D839A5', 'enj');
            invalid('0x02fcd51aAbB814FfFe17908fbc888A8975D839A5', 'knc');
            invalid('0x02fcd51aAbB814FfFe17908fbc888A8975D839A5', 'link');
            invalid('0x02fcd51aAbB814FfFe17908fbc888A8975D839A5', 'matic');
            invalid('0x02fcd51aAbB814FfFe17908fbc888A8975D839A5', 'mkr');
            invalid('0x02fcd51aAbB814FfFe17908fbc888A8975D839A5', 'omg');
            invalid('0x02fcd51aAbB814FfFe17908fbc888A8975D839A5', 'paxg');
            invalid('0x02fcd51aAbB814FfFe17908fbc888A8975D839A5', 'shib');
            invalid('0x02fcd51aAbB814FfFe17908fbc888A8975D839A5', 'uni');
            invalid('0x02fcd51aAbB814FfFe17908fbc888A8975D839A5', 'zrx');
        });

        it('should return true for correct Cardano addresses', function () {
            valid('Ae2tdPwUPEYzs5BRbGcoS3DXvK8mwgggmESz4HqUwMyaS9eNksZGz1LMS9v', 'ada');
            valid('Ae2tdPwUPEYxYNJw1He1esdZYvjmr4NtPzUsGTiqL9zd8ohjZYQcwu6kom7', 'cardano');
            valid('DdzFFzCqrhsfdzUZxvuBkhV8Lpm9p43p9ubh79GCTkxJikAjKh51qhtCFMqUniC5tv5ZExyvSmAte2Du2tGimavSo6qSgXbjiy8qZRTg', 'ada');
            valid('Ae2tdPwUPEZKmwoy3AU3cXb5Chnasj6mvVNxV1H11997q3VW5ihbSfQwGpm', 'ada');
            valid('4swhHtxKapQbj3TZEipgtp7NQzcRWDYqCxXYoPQWjGyHmhxS1w1TjUEszCQT1sQucGwmPQMYdv1FYs3d51KgoubviPBf', 'cardano');

            valid('addr1qxy3w62dupy9pzmpdfzxz4k240w5vawyagl5m9djqquyymrtm3grn7gpnjh7rwh2dy62hk8639lt6kzn32yxq960usnq9pexvt', 'cardano');
            valid('addr1skemppwfevyk0lshu2w8j34707s3t3t58a04xcx5ccevrcmvpmxg2qt4pk0', 'cardano', 'testnet');
        });
    });
});

describe('WAValidator.isCurrencySupported()', function() {
    it('should return true for supported currencies', function() {
        expect(WAValidator.isCurrencySupported('btc')).to.be.true
        expect(WAValidator.isCurrencySupported('bch')).to.be.true
        expect(WAValidator.isCurrencySupported('ltc')).to.be.true
        expect(WAValidator.isCurrencySupported('doge')).to.be.true
        expect(WAValidator.isCurrencySupported('eth')).to.be.true
        expect(WAValidator.isCurrencySupported('aave')).to.be.true
        expect(WAValidator.isCurrencySupported('bat')).to.be.true
        expect(WAValidator.isCurrencySupported('comp')).to.be.true
        expect(WAValidator.isCurrencySupported('enj')).to.be.true
        expect(WAValidator.isCurrencySupported('knc')).to.be.true
        expect(WAValidator.isCurrencySupported('link')).to.be.true
        expect(WAValidator.isCurrencySupported('matic')).to.be.true
        expect(WAValidator.isCurrencySupported('mkr')).to.be.true
        expect(WAValidator.isCurrencySupported('omg')).to.be.true
        expect(WAValidator.isCurrencySupported('paxg')).to.be.true
        expect(WAValidator.isCurrencySupported('shib')).to.be.true
        expect(WAValidator.isCurrencySupported('uni')).to.be.true
        expect(WAValidator.isCurrencySupported('zrx')).to.be.true
    })

    it('should return false for unsupported currencies', function() {
        expect(WAValidator.isCurrencySupported('bnb')).to.be.false
    })
})
