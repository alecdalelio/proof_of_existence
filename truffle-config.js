module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*",
    },

    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, infuraURL),
      network_id: 4, // Rinkeby's network id
      gas: 5500000,
    },
  },
};

const infuraURL =
  "https://rinkeby.infura.io/v3/f99c567801144c968c8d8fba56c2cf2a";
const HDWallet = require("truffle-hdwallet-provider");
const infuraKey = "f99c567801144c968c8d8fba56c2cf2a";
const fs = require("fs");
const mnemonic = fs.readFileSync(".secret").toString().trim();
