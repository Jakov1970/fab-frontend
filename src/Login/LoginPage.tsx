import { Box, HStack, Stack } from '@chakra-ui/react';
import React from 'react'
import { styleProps } from './styleProps';
import AppLogo from '../images/logo2.png'
import { Login } from './Login';

export const LoginPage = () => {
  const { 
    screenWrapper,
    leftSide,
    rightSide
  } = styleProps

  return (
    <div>
    <HStack {...screenWrapper}>
      <Box {...leftSide}>
        <img src={AppLogo} />
      </Box>
      <Box {...rightSide}>
        <Login />
      </Box>
    </HStack>
    </div>
  )
}
