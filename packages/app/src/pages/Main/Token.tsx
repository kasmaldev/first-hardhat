import { Text } from '@chakra-ui/layout';
import { Contract, providers } from 'ethers';
import React from 'react'
import TokenABI from '../../abis/Token.json'

interface TokenProps {
    provider: providers.Web3Provider;
}

export const Token: React.FC<TokenProps> = ({
    provider
}: TokenProps) => {

    const tokenAddress = "0xC017603475A78C28Cc5e397111A9727A2323f941"
    const token = new Contract(tokenAddress, TokenABI, provider);
    return (
        <Text>

        </Text>
    );
}