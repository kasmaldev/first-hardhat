import { run, ethers } from "hardhat";
import { v1, v2 } from '@aave/protocol-js';

let userAddress = "0x2751b3Be4B2CA09cAA3691F11A008e1Fd30F038D"
// let userSummary = v2.formatUserSummaryData(poolReservesData, rawUserReserves, userAddress.toLowerCase(), Math.floor(Date.now() / 1000))

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

// npx hardhat run --network kovan scripts/deposit_eth.ts

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });