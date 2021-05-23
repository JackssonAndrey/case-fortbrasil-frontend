import React, { useState } from 'react';

import {
  Container, Box, FormControl, Input, FormLabel, Button, Heading, Text,
} from '@chakra-ui/react';
import TopMenu from '../../components/TopMenu';

const initialUserDataSate = {
  firstName: '',
  lastName: '',
  mail: '',
  password: '',
};

const initialPasswordState = {
  oldPassword: '',
  newPassword: '',
};

export default function Profile() {
  const [userData, setUserData] = useState(initialUserDataSate);
  const [passwordData, setPasswordData] = useState(initialPasswordState);

  function onChangeInputs(e) {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  }

  function onChangeInputsPassword(e) {
    const { name, value } = e.target;
    setPasswordData({ ...userData, [name]: value });
  }

  return (
    <Container
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      maxWidth="100vw"
      height="100%"
      margin="0"
      padding="0"
      backgroundColor="whiteAlpha.100"
    >
      <TopMenu />

      <Container
        marginTop="120px"
        height="100%"
        maxWidth="container.lg"
        display="flex"
        alignContent="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Box
          display="flex"
          justifyContent="center"
          alignContent="center"
          flexDirection="column"
          width="auto"
          margin="auto"
        >
          <Heading as="h3" size="lg">
            Olá
            {' '}
            {userData.firstName}
          </Heading>
          <Text mb="20px" fontSize="sm">Você é membro desde 20/01/2021</Text>
        </Box>

        <Box
          display="flex"
          justifyContent="center"
          alignContent="center"
          flexDirection="column"
          width="60%"
          height="auto"
          borderRadius="md"
          padding="30px"
          backgroundColor="whiteAlpha.200"
          shadow="md"
          margin="auto"
        >
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

          <FormControl id="email" mb="20px">
            <FormLabel
              fontWeight="normal"
              marginBottom={0}
            >
              Endereço de email
            </FormLabel>
            <Input
              type="email"
              focusBorderColor="blue.700"
              name="lastName"
              onChange={(e) => onChangeInputs(e)}
              value={userData.mail}
            />
          </FormControl>

          <FormControl>
            <Button variant="solid" colorScheme="blue">Salvar Alterações</Button>
          </FormControl>
        </Box>

        <Box
          display="flex"
          justifyContent="center"
          alignContent="center"
          flexDirection="column"
          width="60%"
          height="auto"
          borderRadius="md"
          padding="30px"
          backgroundColor="whiteAlpha.200"
          shadow="md"
          margin="auto"
          mt="5"
        >
          <Heading as="h3" size="lg" mb="4">Alterar Senha</Heading>
          <Box
            width="100%"
            display="flex"
          >
            <FormControl id="oldPassword" mb="10px" mr="10px" width="50%">
              <FormLabel
                fontWeight="normal"
                marginBottom={0}
              >
                Senha atual
              </FormLabel>
              <Input
                type="password"
                focusBorderColor="blue.700"
                name="oldPassword"
                onChange={(e) => onChangeInputsPassword(e)}
                value={passwordData.oldPassword}
              />
            </FormControl>

            <FormControl id="newPassword" mb="20px" width="50%">
              <FormLabel
                fontWeight="normal"
                marginBottom={0}
              >
                Nova senha
              </FormLabel>
              <Input
                type="password"
                focusBorderColor="blue.700"
                name="newPassword"
                onChange={(e) => onChangeInputsPassword(e)}
                value={passwordData.newPassword}
              />
            </FormControl>
          </Box>

          <FormControl>
            <Button variant="solid" colorScheme="blue">Salvar Alterações</Button>
          </FormControl>
        </Box>
      </Container>
    </Container>
  );
}
