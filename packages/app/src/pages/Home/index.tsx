import React, { useContext } from 'react'
import { Box } from '@chakra-ui/react';
import Hero from '../../components/Hero';
import Features from '../../components/Feature';
import { ProviderContext } from '../App';
import Main from '../Main';

export default function Home() {
    const provider = useContext(ProviderContext);
    return (
        <Box w="100%" bgGradient="linear(to-b, green.700, cyan.500)">

            {
                provider ?
                <Main provider={provider} />
                :
                <>
                <Hero
                    title="Ethereum"
                    subtitle="connect your wallet to get started"
                    ctaLink="https://github.com/yuichiroaoki"
                    ctaText="Enter App"
                />
                <Features />
                </>
            }

        </Box>
    )
}