import React from 'react';

import {
  Box, Flex, Heading, Text, Button, useColorMode,
} from '@chakra-ui/react';

import { MoonIcon, SunIcon } from '@chakra-ui/icons';

import './styles.css';

export default function TopMenu() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      height="auto"
      width="100%"
      position="absolute"
      top="0"
      left="0"
      shadow="md"
    >
      <Flex
        alignContent="space-between"
        justifyContent="space-between"
        flexDirection="row"
        padding="3"
      >
        <Heading
          as="h3"
          size="lg"
        >
          Dashboard
        </Heading>

        <div className="top-menu">
          <ul>
            <li><Text>Estabelecimentos</Text></li>
            <li><Text>Perfil</Text></li>
          </ul>
        </div>

        <div className="buttons">
          <Button onClick={toggleColorMode} marginRight="2">
            {colorMode === 'light' ? (<MoonIcon />) : (<SunIcon />)}
          </Button>
        </div>
      </Flex>
    </Box>
  );
}
