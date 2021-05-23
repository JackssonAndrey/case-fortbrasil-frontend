import React from 'react';
import { Box, Center, Text } from '@chakra-ui/react';

export default function Footer() {
  return (
    <Box width="100%" height="100px" padding="30px">
      <Center>
        <Text color="gray.400" fontSize="sm">
          Criado e desenvolvido por Andrey Araújo.
        </Text>
      </Center>
    </Box>
  );
}
