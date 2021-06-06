import React, { useState } from 'react'
import { Box, Center, Heading, Stack } from '@chakra-ui/layout';
import { Contract, providers } from 'ethers';
import { useBalance, usePoller, useUserAddress } from "eth-hooks";
import { Text } from "@chakra-ui/react"
import { formatEther } from "@ethersproject/units";
import { Input } from "@chakra-ui/react"
import { Button } from '@chakra-ui/button';
import GreeterABI from '../../abis/Greeter.json'

interface indexProps {
    provider: providers.Web3Provider;
}

export default function Main({
    provider
}: indexProps) {
    const address = useUserAddress(provider)
    const balance = useBalance(provider, address)
    const readable = formatEther(balance)
    console.log({readable})

const greeterAddress = "0x772f780EA086958D9d248380FD92763000aa113E";

// The Contract object
const greeter = new Contract(greeterAddress, GreeterABI, provider);
const signer = provider.getSigner()

const Greeter = greeter.connect(signer);
const changeMessage = (message: string) => {
    Greeter.setGreeting(message)
}
  const [value, setValue] = useState("")
  const handleChange = (event: any) => setValue(event.target.value)
const handleClick = () => {
    changeMessage(value);
}

const [hello, setHello] = useState("")

const showMessage = async () => {
  const response = await Greeter.greet()
  setHello(response)
}
usePoller(showMessage, 3000)
    return (
        <Box>
          <Center>
            <Stack spacing={8}>

    <Box p={5} shadow="md" borderWidth="1px" >
      <Heading fontSize="xl">{address}</Heading>
      <Text mt={4}>{hello}</Text>
    </Box>

    <Box p={5} shadow="md" borderWidth="1px" >
      <Heading fontSize="xl">{address}</Heading>
      <Text mt={4}>{hello}</Text>
    </Box>
            </Stack>
            <form>
            <Input value={value}
        onChange={handleChange}
        placeholder="Greeter" />
            <Button onClick={handleClick}>
                change</Button> 
            </form>
            <Text>
              {hello}
            </Text>
        </Center>
        </Box>
    );
}