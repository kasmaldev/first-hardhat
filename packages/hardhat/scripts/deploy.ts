import { ethers } from "hardhat";

const ETHERSCAN_TX_URL = "https://kovan.etherscan.io/tx/"

async function main() {
  // const Greeter = await ethers.getContractFactory("Greeter");
  const Token = await ethers.getContractFactory("TokenERC20");
  // const greeter = await Greeter.deploy("Hello, Hardhat!");
  const token = await Token.deploy();
  console.log("Token deployed to:", token.address);
  console.log(
    `You did it! View your tx here: ${ETHERSCAN_TX_URL}${token.deployTransaction.hash}`
  )
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });