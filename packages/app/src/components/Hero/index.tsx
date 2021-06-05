import React from 'react'
import {
    Box,
    Button,
    Heading,
    Text
} from "@chakra-ui/react";

interface indexProps {
    title: string;
    subtitle: string;
    ctaLink: string;
    ctaText: string;
}

const Hero: React.FC<indexProps> = ({
    title,
    subtitle,
    ctaLink,
    ctaText
}) => {
    return (
        <Box as="section">
            <Box
                maxW="2xl"
                mx="auto"
                px={{ base: '6', lg: '8' }}
                py={{ base: '16', sm: '20' }}
                textAlign="center"
            >
                <Heading as="h2" size="3xl" fontWeight="extrabold" letterSpacing="tight">
                    {title}
                </Heading>
                <Text mt="4" fontSize="lg">
                    {subtitle}
                </Text>

                <Button mt="8" as="a" href={ctaLink} target="blank" size="lg" colorScheme="blue" fontWeight="bold">
                    {ctaText}
                </Button>
                <Box>

                    <Text
                        fontSize="xs"
                        mt={2}
                        textAlign="center"
                        color="primary.800"
                        opacity="0.6"
                    >
                        No credit card required.
        </Text>
                </Box>
            </Box>
        </Box>
    );
}

export default Hero;