require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner drum olympic smooth elegant note museum update gesture opera equal ghost'; 
let testAccounts = [
"0xb58e0d2ade2e00e71f4dea4d8262b00915a68988920ae41d607292ac273c62a7",
"0x02bf5c023f6aa883c3d68b71ebc67b5bd9904e8939776c2b9fa1cb38eca88526",
"0xe3c2d9ae84259116b9f955e8896b1052c07e7761395b0364ddaf13090e07e788",
"0x33ffc23b29d13a79d56ed2301dbd9fea1e92b721c34e79927a5f4d80192d7510",
"0xa91197d9d22dc2cd80e0cb96834d1f5e5591caa09652cdd9915551cbfdca0db4",
"0xc5fcf22b2a9fca2440bd7dffb2046f88fad5007cbb73486b69b93a46a2fa925a",
"0xd0acf7c8089d65979a6830702268c8e7a9af162e1729984edfb5c47dbdfb0369",
"0xc9a31f9dbf64635fc82cfc69e6d9a02024d349c4b96b7540226efa428d800c56",
"0x866b8e8c7c12120b66dd5eb866c0f1b3fa8ed25dcc21c9e1b214937c6b07330b",
"0xb8f5fcb70a5d2b7d32bc72712c5766e9097084b578fe849c9cc88774a7d82d36"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
