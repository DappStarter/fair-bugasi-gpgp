require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area frame food chef recipe magic honey coral light army gaze'; 
let testAccounts = [
"0xeb728075531c9f569c6e9045bda8046d56fc00104953aaac7db0d5539fa291bb",
"0xba6ece82212973543c2463f9e4bfb2f28c37901e4dfd8556ac205e72edbb9084",
"0xe5882ea70feeaec37a1e7f860e7a8d91d1f1d0d9b6db15dacf1ca19be8b15f55",
"0x81bc0be70a8cb7d546b3aadf6542b6d32626fd3790671767ab2a785c53d47a34",
"0x7d5c462ce72d9d2d2838037e72807b37584dce6c0225793c6b079eeb549f5691",
"0xf58885366e92297a1fee1c2d77c90946afb38ba659b0fe2a67ba5fd68d7fafc8",
"0x24163b7305b67e1b9e3ff9e7fd15e7b9091a955163f8091c5e3050a3f862dac9",
"0x558a693eac483bd4a60f11f421062e4b36af645687250dd39c22bf7f051ea048",
"0x437152f747ac9cab3843824806d158923ece18b48f7e90a81efbb7260beb8e78",
"0x0fdbb4f7fdf50f3cb689a1b83f0b992f61099f3b0cb9913ec28c5443e358ca98"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


