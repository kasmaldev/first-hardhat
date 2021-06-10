import React from "react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react"
import { useUserAddress } from "eth-hooks";
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
        <>
            {
                provider ?
                    <ConnectedWallet logoutOfWeb3Modal={logoutOfWeb3Modal} provider={provider} />
                    :

                    <Button
                        bg="transparent" border="1px"
                        onClick={() => {
                            loadWeb3Modal();
                        }}
                    >
                        Connect Wallet
            </Button>

            }
        </>
    )
}

interface ConnectedWalletProps {
    logoutOfWeb3Modal: () => Promise<void>;
    provider: providers.Web3Provider;
}

const ConnectedWallet = ({
    logoutOfWeb3Modal, provider
}: ConnectedWalletProps) => {

    const address = useUserAddress(provider)
    return (
        <Menu>
            <MenuButton as={Button}
                bg="transparent" border="1px"
            >
                {address}
            </MenuButton>
            <MenuList>
                <MenuItem>Copy Address</MenuItem>
                <MenuItem as={Button} onClick={logoutOfWeb3Modal}>
                    Disconnect
                </MenuItem>
            </MenuList>
        </Menu>
    )
}