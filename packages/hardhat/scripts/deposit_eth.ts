import { run, ethers } from "hardhat";

// command
/**
 npx hardhat run --network kovan scripts/deposit_eth.ts
 * 
 */



async function main() {
    const provider = new ethers.providers.JsonRpcProvider(process.env.ALCHEMY_KOVAN_RPC_URL);
    const signer = provider.getSigner()
    console.log({
        signer, provider
    })

    console.log(
        await provider.getBlockNumber()
    )

}


main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });