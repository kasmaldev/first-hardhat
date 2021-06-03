import useWeb3Modal from '../../hooks/useWeb3Modal';
import { Button } from "@chakra-ui/react"
import { useState } from 'react';

export default function WalletModal() {

    const { provider, loadWeb3Modal, logoutOfWeb3Modal } = useWeb3Modal();
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