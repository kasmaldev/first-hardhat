import { run, ethers } from "hardhat";

async function main() {
    const provider = await ethers.provider;
    const signer = provider.getSigner()
    console.log({
        signer
    })
    // const balance = await provider.getBalance("ethers.eth")
    // console.log(ethers.utils.formatEther(balance))

}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });