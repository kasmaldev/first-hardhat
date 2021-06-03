import { Button } from "@chakra-ui/react"
import { useState } from 'react';
import { providers } from 'ethers';

interface WalletModalProps {
    provider: providers.Web3Provider | undefined;
   loadWeb3Modal: () => Promise<void>;
   logoutOfWeb3Modal: () => Promise<void>;
}


export default function WalletModal({
    provider, loadWeb3Modal, logoutOfWeb3Modal
}: WalletModalProps) {

    const [address, setAddress] = useState("");
    const getAddress = async () => {
        if (!provider) return;
        const signer = provider.getSigner();
        setAddress(await signer.getAddress())
    }

    getAddress()
    console.log({ address })

    return (
        <>
            <Button
                onClick={() => {
                    if (!provider) {
                        loadWeb3Modal();
                    } else {
                        logoutOfWeb3Modal();
                    }
                }}
            >
                {!provider ? "Connect Wallet" : "Disconnect Wallet"}
            </Button>
            <Button>
                {address}
            </Button>
        </>
    )
}