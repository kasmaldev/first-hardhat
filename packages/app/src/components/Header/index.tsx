import React from 'react'
import { Box, Flex, Text, Spacer } from "@chakra-ui/react";
import { providers } from 'ethers';
import WalletModal from '../WalletModal';

const MenuItems = ({ children }: { children: string }) => (
    <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
        {children}
    </Text>
);

interface HeaderProps {
    provider: providers.Web3Provider | undefined;
    loadWeb3Modal: () => Promise<void>;
    logoutOfWeb3Modal: () => Promise<void>;
}

const Header = ({
    provider, loadWeb3Modal, logoutOfWeb3Modal
}: HeaderProps) => {

    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            padding="1.5rem"
            bg="green.700"
            color="white"
            w="100%"
            p={8}
        >
            <Flex align="center" >
                <Text>
                    Logo
                </Text>
            </Flex>
            <Spacer />
            <Box
                display={{ sm: "none", md: "flex" }}
                width={{ sm: "full", md: "auto" }}
                alignItems="center"
            >
                <MenuItems>Docs</MenuItems>
                <MenuItems>Examples</MenuItems>
                <MenuItems>Blog</MenuItems>
            </Box>

            <Box
                display={{ sm: "none", md: "block" }}
                mt={{ base: 4, md: 0 }}
            >
                <WalletModal provider={provider} loadWeb3Modal={loadWeb3Modal} logoutOfWeb3Modal={logoutOfWeb3Modal} />
            </Box>
        </Flex>
    );
};


export default Header;