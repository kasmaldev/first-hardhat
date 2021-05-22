require("@nomiclabs/hardhat-waffle");
require('dotenv').config({path: __dirname + '/.env'})

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const local = {
  solidity: "0.6.12",
  networks: {
    hardhat: {
    },
  },
};

const with_kovan = {
  solidity: "0.6.12",
  networks: {
    hardhat: {
      // forking: {
      //   url: process.env.ALCHEMY_MAINNET_RPC_URL
      // }
    },
    kovan: {
      url: process.env.ALCHEMY_KOVAN_RPC_URL,
      accounts: [`0x${process.env.ALCHEMY_KOVAN_PRIVATE_KEY}`]
    }
  },
};

const config = process.env.ALCHEMY_KOVAN_RPC_URL ? with_kovan : local;

module.exports = config;