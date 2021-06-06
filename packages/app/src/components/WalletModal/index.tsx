import { Button } from "@chakra-ui/react"
import { providers } from 'ethers';

interface WalletModalProps {
    provider: providers.Web3Provider | undefined;
    loadWeb3Modal: () => Promise<void>;
    logoutOfWeb3Modal: () => Promise<void>;
}

export default function WalletModal({
    provider, loadWeb3Modal, logoutOfWeb3Modal
}: WalletModalProps) {

    return (
        <Button
            bg="transparent" border="1px"
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