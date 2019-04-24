var HDWalletProvider = require('truffle-hdwallet-provider');

var mnemonic = 'notice session virtual clarify resource bleak inmate board destroy bachelor bag share';

module.exports = {
  networks: { 
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: "*"
    }, 
    rinkeby: {
      provider: function() { 
        return new HDWalletProvider(mnemonic, 'https://rinkeby.infura.io/v3/a5aea896aff241078c2cb25e04f979d2') 
      },
      network_id: 4,
      gas: 6500000,
      gasPrice: 100000000000,
    },
    compilers: {
      solc: {
        version: "0.4.24",    // Fetch exact version from solc-bin (default: truffle's version)
      }
    }    
  }
}