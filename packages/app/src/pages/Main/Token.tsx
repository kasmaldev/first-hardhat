import { Text } from '@chakra-ui/layout';
import { formatEther } from '@ethersproject/units';
import { Contract, providers } from 'ethers';
import React from 'react'
import TokenABI from '../../abis/Token.json'
import { tokenAddress } from '../../constants/addresses';

interface TokenProps {
    provider: providers.Web3Provider;
}

export const Token: React.FC<TokenProps> = ({
    provider
}: TokenProps) => {

    const token = new Contract(tokenAddress, TokenABI, provider);
    const main = async () => {
        const owner = await token.owner()
        const totalSupply = await token.totalSupply()
        const addr1Balance = await token.balanceOf("0x2751b3Be4B2CA09cAA3691F11A008e1Fd30F038D");
        console.log({
            totalSupply, addr1Balance, owner
        })
        const readable = formatEther(totalSupply)
        const readable1 = formatEther(addr1Balance)
        console.log({
            readable, readable1
        })
        const signer = provider.getSigner()
        const Token = token.connect(signer)
        Token.transfer("0x2751b3Be4B2CA09cAA3691F11A008e1Fd30F038D", 40)
        console.log({ addr1Balance })
    }
    main()
    return (
        <Text>
            Token
        </Text>
    );
}