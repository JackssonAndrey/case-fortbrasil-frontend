import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Container,
  Box,
  Flex,
  Heading,
  Spacer,
  FormControl,
  FormLabel,
  Input,
  Text,
  Center,
  useToast,
  CircularProgress,
} from '@chakra-ui/react';

import api from '../../services/api';
import history from '../../services/history';

const initialUserDataSate = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

export default function Register() {
  const toast = useToast();
  const [userData, setUserData] = useState(initialUserDataSate);
  const [isHiddenLoadingRegister, setIsHiddenLoadingRegister] = useState(true);

  function onChangeInputs(e) {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  }

  async function handleSubmitForm(e) {
    e.preventDefault();

    try {
      await api.post('/users', userData);
      setIsHiddenLoadingRegister(false);
      setTimeout(() => {
        toast({
          status: 'success',
          duration: 5000,
          title: 'Cadastro feito',
          description: 'Sua conta foi criada, faça login.',
          position: 'top',
        });
      }, 2000);
      setTimeout(() => {
        history.push('/');
      }, 4000);
    } catch (error) {
      setIsHiddenLoadingRegister(false);
      setTimeout(() => {
        toast({
          status: 'error',
          duration: 5000,
          title: 'Falha na cadastro',
          description: `${error.message}`,
          position: 'top',
        });
      }, 2000);
      setTimeout(() => {
        setIsHiddenLoadingRegister(true);
      }, 3000);
    }
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
      backgroundColor="whiteAlpha.100"
    >
      <Box
        width="500px"
        height="auto"
        padding="10"
        borderRadius="md"
        shadow="md"
        backgroundColor="whiteAlpha.200"
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
            Crie sua conta agora mesmo.
          </Heading>

          <Spacer />

          <form style={{ width: '100%' }} onSubmit={(e) => handleSubmitForm(e)}>
            <Box
              width="100%"
              display="flex"
            >
              <FormControl id="firstName" mb="10px" mr="10px" width="50%">
                <FormLabel
                  fontWeight="normal"
                  marginBottom={0}
                >
                  Primeiro nome
                </FormLabel>
                <Input
                  type="text"
                  focusBorderColor="blue.700"
                  name="firstName"
                  onChange={(e) => onChangeInputs(e)}
                  value={userData.firstName}
                />
              </FormControl>

              <FormControl id="lastName" mb="10px" width="50%">
                <FormLabel
                  fontWeight="normal"
                  marginBottom={0}
                >
                  Segundo nome
                </FormLabel>
                <Input
                  type="text"
                  focusBorderColor="blue.700"
                  name="lastName"
                  onChange={(e) => onChangeInputs(e)}
                  value={userData.lastName}
                />
              </FormControl>
            </Box>

            <FormControl id="email" mb="10px">
              <FormLabel
                fontWeight="normal"
                marginBottom={0}
              >
                Endereço de email
              </FormLabel>
              <Input
                type="email"
                focusBorderColor="blue.700"
                name="email"
                onChange={(e) => onChangeInputs(e)}
                value={userData.email}
              />
            </FormControl>

            <FormControl id="password" mb="30px">
              <FormLabel
                fontWeight="normal"
                marginBottom={0}
              >
                Sua senha
              </FormLabel>
              <Input
                type="password"
                focusBorderColor="blue.700"
                name="password"
                onChange={(e) => onChangeInputs(e)}
                value={userData.password}
              />
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
                Salvar
                <CircularProgress
                  hidden={isHiddenLoadingRegister}
                  size={5}
                  ml="2"
                  isIndeterminate
                  color="blue.1000"
                />
              </Button>
            </FormControl>

            <Text
              textAlign="right"
              color="blue.700"
              fontSize="sm"
            >
              <Link to="/">
                Já tem conta? Faça login.
              </Link>
            </Text>
          </form>

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
