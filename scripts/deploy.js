async function main() {
  // We get the contract to deploy
  const Greeter = await ethers.getContractFactory("Greeter");
  // const Greeter = await ethers.getContractFactory("Token");
  // const Greeter = await ethers.getContractFactory("MyV2FlashLoan");
  const greeter = await Greeter.deploy("Hello, Hardhat!");

  console.log("Greeter deployed to:", greeter.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });