import React from 'react'
import { Box } from '@chakra-ui/layout';
import { providers } from 'ethers';
import { useBalance, useUserAddress } from "eth-hooks";
import { Text } from "@chakra-ui/react"

interface indexProps {
provider: providers.Web3Provider;
}

export default function Main ({
    provider
}: indexProps) {
    const address = useUserAddress(provider)
   const balance = useBalance(provider, address) 
   console.log({
       address, balance
   })
        return (
            <Box>
                <Text>
address: {address}
                </Text>
            </Box>
        );
}