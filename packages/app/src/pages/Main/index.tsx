import React, { useState } from 'react'
import { Box } from '@chakra-ui/layout';
import { Contract, providers, utils } from 'ethers';
import { useBalance, usePoller, useUserAddress } from "eth-hooks";
import { Text } from "@chakra-ui/react"
import { formatEther } from "@ethersproject/units";
import { Input } from "@chakra-ui/react"
import { Button } from '@chakra-ui/button';

interface indexProps {
    provider: providers.Web3Provider;
}

export default function Main({
    provider
}: indexProps) {
    const address = useUserAddress(provider)
    const balance = useBalance(provider, address)
    const readable = formatEther(balance)

const greeterAddress = "0x772f780EA086958D9d248380FD92763000aa113E";

const greeterABI = [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_greeting",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "greet",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_greeting",
          "type": "string"
        }
      ],
      "name": "setGreeting",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];

// The Contract object
const greeter = new Contract(greeterAddress, greeterABI, provider);
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
            <Text>
                address: {address}
            </Text>
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
        </Box>
    );
}