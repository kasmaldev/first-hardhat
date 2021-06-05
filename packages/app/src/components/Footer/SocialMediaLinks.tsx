import { ButtonGroupProps } from '@chakra-ui/button'
import { ButtonGroup, IconButton } from '@chakra-ui/react'
import * as React from 'react'
// import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

export const SocialMediaLinks = (props: ButtonGroupProps) => (
  <ButtonGroup variant="ghost" color="gray.600" {...props}>
    {/* <IconButton as="a" href="#" aria-label="LinkedIn" icon={<FaLinkedin fontSize="20px" />} />
    <IconButton as="a" href="https://github.com/yuichiroaoki" 
    target="blank" aria-label="GitHub" icon={<FaGithub fontSize="20px" />} />
    <IconButton as="a" href="https://twitter.com/FF1KAaniyz7Tc3N" 
    target="blank" aria-label="Twitter" icon={<FaTwitter fontSize="20px" />} /> */}
  </ButtonGroup>
)