import React, { useEffect, useState } from 'react'
import useWeb3Modal from '../../hooks/useWeb3Modal';
import { Button } from "@chakra-ui/react"

export default function WalletModal() {

    const [provider, loadWeb3Modal, logoutOfWeb3Modal] = useWeb3Modal();


    return (
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
    )
}