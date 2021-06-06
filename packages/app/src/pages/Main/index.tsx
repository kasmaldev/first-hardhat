import React, { useState } from 'react'
import { Box, Center, Heading, Stack } from '@chakra-ui/layout';
import { Contract, providers } from 'ethers';
import { useBalance, useContractReader, useUserAddress } from "eth-hooks";
import { Text } from "@chakra-ui/react"
import { formatEther } from "@ethersproject/units";
import { Input } from "@chakra-ui/react"
import { Button } from '@chakra-ui/button';
import GreeterABI from '../../abis/Greeter.json'
// import useContractLoader from '../../hooks/useContractLoader';

interface indexProps {
  provider: providers.Web3Provider;
}

export default function Main({
  provider
}: indexProps) {
  const address = useUserAddress(provider)
  const balance = useBalance(provider, address)
  const readable = formatEther(balance)
  console.log({ readable })

  const greeterAddress = "0x772f780EA086958D9d248380FD92763000aa113E";

  const getNetwork = async () => {

    const network = await provider.getNetwork()
    const name = network.name 
    console.log({
      network, name
    })
  }

  getNetwork()

  // The Contract object
  const greeter = new Contract(greeterAddress, GreeterABI, provider);
  // const greeter = useContractLoader(provider, greeterAddress, GreeterABI)

  const greetMessage = useContractReader(greeter, "greet");
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

  return (
    <Box>
      <Center>
        <Stack spacing={8}>

          <Box p={5} shadow="md" borderWidth="1px" >
            <Heading fontSize="xl">{address}</Heading>
            <Text mt={4}>greet: {greetMessage}</Text>
          </Box>

          <Box p={5} shadow="md" borderWidth="1px" >
            <Heading fontSize="xl">{address}</Heading>
          </Box>
        <form>
          <Input value={value}
            onChange={handleChange}
            placeholder="Greeter" />
          <Button onClick={handleClick}>
            change</Button>
        </form>
        </Stack>
      </Center>
    </Box>
  );
}