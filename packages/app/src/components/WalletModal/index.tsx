import useWeb3Modal from '../../hooks/useWeb3Modal';
import { Button } from "@chakra-ui/react"

export default function WalletModal() {

    const { provider, loadWeb3Modal, logoutOfWeb3Modal } = useWeb3Modal();
    console.log({ provider })
    if (provider) {
        const blocknum = provider.getBlockNumber()

        const balance = provider.getBalance("ethers.eth")
        console.log({
            blocknum, balance
        })

    }
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