import React from 'react';
import {
  Container,
  Box,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';

import './styles.css';
import TopMenu from '../../components/TopMenu';

export default function Dashboard() {
  return (
    <Container
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      width="100vw"
      maxWidth="100vw"
      height="100vh"
      margin="0"
      padding="0"
    >
      <TopMenu />

      <Container
        marginTop="120px"
        height="100%"
        maxWidth="container.lg"
      >
        <Flex>
          <Heading
            as="h3"
            size="lg"
          >
            Bem vindo de volta, este é seu dashboard.
          </Heading>
        </Flex>

        <Flex
          alignContent="center"
          justifyContent="center"
          flexDirection="row"
          width="100%"
          marginTop="4"
        >
          <Box
            width="300px"
            height="270px"
            shadow="md"
            borderRadius="md"
            padding="5"
            margin="2"
            display="flex"
            justifyContent="center"
            alignContent="center"
            flexDirection="column"
            backgroundColor="blackAlpha.300"
          >
            <Heading as="h1" marginBottom="3" color="blue.600">Em breve</Heading>
            <Text>Relatórios financeiros, dos seus ganhos e gastos.</Text>
          </Box>

          <Box
            width="300px"
            height="270px"
            shadow="md"
            borderRadius="md"
            padding="5"
            margin="2"
            display="flex"
            justifyContent="center"
            alignContent="center"
            flexDirection="column"
          >
            <Heading as="h1" marginBottom="3" color="blue.600">Em breve</Heading>
            <Text>Dados sobre seus usuários mais ativos no sistema.</Text>
          </Box>

          <Box
            width="300px"
            height="270px"
            shadow="md"
            borderRadius="md"
            padding="5"
            margin="2"
            display="flex"
            justifyContent="center"
            alignContent="center"
            flexDirection="column"
          >
            <Heading as="h1" marginBottom="3" color="blue.600">Em breve</Heading>
            <Text>Dados sobre seus estabelcimentos.</Text>
          </Box>
        </Flex>
      </Container>
    </Container>
  );
}
