import { Text } from '@chakra-ui/layout';
import { formatEther } from '@ethersproject/units';
import { ethers, providers } from 'ethers';
import React from 'react'
import * as zksync from "zksync";

interface zksyncProps {
    provider: providers.Web3Provider;
}

export const ZksyncTutorial: React.FC<zksyncProps> = ({
    provider
}) => {
    const getsyncprovider = async () => {
        const syncProvider = await zksync.getDefaultProvider("rinkeby");
        const ethersProvider = ethers.getDefaultProvider("rinkeby");
        // Create ethereum wallet using ethers.js
        // const ethWallet = ethers.Wallet.fromMnemonic(MNEMONIC).connect(ethersProvider);
        const ethSginer = provider.getSigner()
        // Derive zksync.Signer from ethereum wallet.
        const syncWallet = await zksync.Wallet.fromEthSigner(ethSginer, syncProvider);
        // const syncWallet = await zksync.Wallet.fromEthSigner(ethWallet, syncProvider);
        // const deposit = await syncWallet.depositToSyncFromEthereum({
        //     depositTo: syncWallet.address(),
        //     token: "ETH",
        //     amount: ethers.utils.parseEther("1.0"),
        // });
        // Await confirmation from the zkSync operator
        // Completes when a promise is issued to process the tx
        // const depositReceipt = await deposit.awaitReceipt();
        // console.log({
        //     syncProvider, ethersProvider, syncWallet, depositReceipt
        // })

        if (!(await syncWallet.isSigningKeySet())) {
            if ((await syncWallet.getAccountId()) === undefined) {
                throw new Error("Unknown account");
            }

            // As any other kind of transaction, `ChangePubKey` transaction requires fee.
            // User doesn't have (but can) to specify the fee amount. If omitted, library will query zkSync node for
            // the lowest possible amount.
            const changePubkey = await syncWallet.setSigningKey({
                feeToken: "ETH",
                ethAuthType: "ECDSA",
            });

            // Wait until the tx is committed
            await changePubkey.awaitReceipt();
        }
        // Committed state is not final yet
        const committedETHBalance = await syncWallet.getBalance("ETH");
        const readable = formatEther(committedETHBalance)
        
        // Verified state is final
        const verifiedETHBalance = await syncWallet.getBalance("ETH", "verified");
        const readableVerified = formatEther(committedETHBalance)
        console.log({
            committedETHBalance, verifiedETHBalance,
            readable, readableVerified
        })

    }
    getsyncprovider()


    return (
        <Text>
            zkSync
        </Text>

    );
}
