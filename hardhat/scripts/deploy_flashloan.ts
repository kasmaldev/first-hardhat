async function main() {
    const [deployer] = await ethers.getSigners();
    console.log(
        "Deploying contracts with the account:",
        deployer.address
    );

    console.log("Account balance:", (await deployer.getBalance()).toString());
    const MyV2FlashLoan = await ethers.getContractFactory("MyV2FlashLoan");
    const deployFlashloan = await MyV2FlashLoan.deploy(
        '0x88757f2f99175387ab4c6a4b3067c77a695b0349'
    );

    console.log("flashloan deployed to:", deployFlashloan.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });