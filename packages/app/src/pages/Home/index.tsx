import React from 'react'
import { Box } from '@chakra-ui/react';
import Hero from '../../components/Hero';
import Features from '../../components/Feature';

export default function Home() {
    return (
        <Box w="100%"  bgGradient="linear(to-b, green.700, cyan.500)">

            <Hero
                title="Ethereum"
                subtitle="Ethreum"
                ctaLink="https://github.com/yuichiroaoki"
                ctaText="Enter App"
            />
            <Features />

        </Box>
    )
}