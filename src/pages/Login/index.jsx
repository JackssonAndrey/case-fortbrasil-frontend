import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Container,
  Box, Flex,
  Heading,
  Spacer,
  FormControl,
  FormLabel,
  Input,
  Text,
  Divider,
  Center,
} from '@chakra-ui/react';

export default function Login() {
  async function handleSubmitForm(e) {
    e.preventDefault();
  }

  return (
    <Container
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="100vw"
      maxWidth="100vw"
      height="100vh"
      margin="0"
    >
      <Box
        width="500px"
        height="auto"
        padding="10"
        borderRadius="md"
        shadow="md"
      >
        <Flex
          height="auto"
          width="100%"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Heading
            mb="20px"
            color="blue.600"
          >
            Faça login para entrar no seu dashboard.
          </Heading>

          <Spacer />

          <form style={{ width: '100%' }} onSubmit={(e) => handleSubmitForm(e)}>
            <FormControl id="email" mb="10px">
              <FormLabel
                fontWeight="normal"
                marginBottom={0}
              >
                Endereço de email
              </FormLabel>
              <Input type="email" focusBorderColor="blue.700" />
            </FormControl>

            <FormControl id="password" mb="30px">
              <FormLabel
                fontWeight="normal"
                marginBottom={0}
              >
                Sua senha
              </FormLabel>
              <Input type="password" focusBorderColor="blue.700" />
            </FormControl>

            <FormControl mb="10px">
              <Button
                type="submit"
                width="100%"
                background="blue.700"
                color="white"
                _hover={{ background: 'blue.1000' }}
                _focus={{ border: 'none' }}
              >
                Entrar
              </Button>
            </FormControl>

            <Text
              textAlign="right"
              color="blue.700"
              fontSize="sm"
            >
              <Link to="/esqueci-senha">
                Esqueceu a senha?
              </Link>
            </Text>
          </form>

          <Spacer />

          <Flex
            flexDirection="row"
            alignItems="center"
          >
            <Divider />
            <Text color="gray.500" fontSize="sm" margin="10px">ou</Text>
            <Divider />
          </Flex>

          <Spacer />

          <Box width="100%">
            <Link to="/cadastro">
              <Button
                variant="outline"
                colorScheme="blue"
                width="100%"
                style={{ borderColor: 'blue.700', color: 'blue.700' }}
                color="blue.700"
                _focus={{ outline: 'none' }}
              >
                Criar conta
              </Button>
            </Link>
          </Box>

          <Spacer />

          <Box width="100%">
            <Center>
              <Text color="gray.400" fontSize="sm">
                Criado e desenvolvido por Andrey Araújo.
              </Text>
            </Center>
          </Box>
        </Flex>
      </Box>
    </Container>
  );
}
