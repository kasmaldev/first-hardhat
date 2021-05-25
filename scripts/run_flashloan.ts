const hre = require("hardhat");
const ethers = hre.ethers;

ETHERSCAN_TX_URL = "https://kovan.etherscan.io/tx/{}"

async function main() {
    // Hardhat always runs the compile task when running scripts with its command
    // line interface.
    //
    // If this script is run directly using `node` you may want to call compile 
    // manually to make sure everything is compiled
    await hre.run('compile');

    const MyV2FlashLoan = await ethers.getContractFactory("MyV2FlashLoan");
    const deployFlashloan = await MyV2FlashLoan.deploy(
        '0x88757f2f99175387ab4c6a4b3067c77a695b0349'
    );

    tx = await deployFlashloan.myFlashLoanCall();
    console.log(
        `You did it! View your tx here: ${ETHERSCAN_TX_URL}${tx.txid}`
    )
    console.log({tx})

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });