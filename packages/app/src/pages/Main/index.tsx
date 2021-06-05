import React from 'react'
import { Box } from '@chakra-ui/layout';
import { providers } from 'ethers';
import { useBalance, useUserAddress } from "eth-hooks";
import { Text } from "@chakra-ui/react"
import { formatEther, parseEther } from "@ethersproject/units";

interface indexProps {
provider: providers.Web3Provider;
}

export default function Main ({
    provider
}: indexProps) {
    const address = useUserAddress(provider)
   const balance = useBalance(provider, address) 
const readable = formatEther(balance)
   console.log({
       address, balance
   })
   console.log({readable})
        return (
            <Box>
                <Text>
address: {address}
                </Text>
            </Box>
        );
}