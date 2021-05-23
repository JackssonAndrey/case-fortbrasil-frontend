import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Box,
  Heading,
  Breadcrumb,
  BreadcrumbItem,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
  CircularProgress,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import TopMenu from '../../../components/TopMenu';
import Footer from '../../../components/Footer';
import api from '../../../services/api';
import history from '../../../services/history';

const initialStateEstablishment = {
  companyName: '',
  fantasyName: '',
  branch: '',
  cnpj: '',
  mail: '',
  phone: '',
  stateRegistration: '',
  municipalRegistration: '',
  street: '',
  city: '',
  complement: '',
  number: '',
  zipCode: '',
  latitude: '',
  longitude: '',
};

export default function RegisterEstablishment() {
  const toast = useToast();
  const [establishmentData, setEstablishmentData] = useState(initialStateEstablishment);
  const [isHiddenLoadingRegister, setIsHiddenLoadingRegister] = useState(true);

  function onChangeInputs(e) {
    const { name, value } = e.target;
    setEstablishmentData({ ...establishmentData, [name]: value });
  }

  async function handleRegister(e) {
    e.preventDefault();

    try {
      await api.post('/establishments', establishmentData);
      setIsHiddenLoadingRegister(true);
      setTimeout(() => {
        toast({
          status: 'success',
          duration: 5000,
          title: 'Cadastro feito',
          description: 'Estabelecimento cadastro com sucesso',
          position: 'top',
        });
      }, 2000);
      setTimeout(() => {
        history.push('/establishments');
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
      >
        <Box
          marginTop="40px"
          marginBottom="4"
        >
          <Breadcrumb spacing="8px" separator={<ChevronRightIcon color="gray.500" />} color="gray.300">
            <BreadcrumbItem>
              <Link to="/establishments" className="link">Estabelecimentos</Link>
            </BreadcrumbItem>

            <BreadcrumbItem isLastChild>
              <Text>Cadastro</Text>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>

        <Box
          display="flex"
          justifyContent="flex-start"
          alignContent="flex-start"
          width="100%"
          marginBottom="4"
        >
          <Heading>
            Cadastrar novo estabelecimento
          </Heading>
        </Box>

        <Box
          width="100%"
          padding="30px"
          backgroundColor="whiteAlpha.200"
          borderRadius="md"
          shadow="md"
        >
          <form onSubmit={(e) => handleRegister(e)}>
            <Box
              width="100%"
              display="flex"
            >
              <FormControl id="companyName" mb="10px" mr="10px" width="50%">
                <FormLabel
                  fontWeight="normal"
                  marginBottom={0}
                >
                  Razão Social
                </FormLabel>
                <Input
                  type="text"
                  focusBorderColor="blue.700"
                  name="companyName"
                  onChange={(e) => onChangeInputs(e)}
                  value={establishmentData.companyName}
                />
              </FormControl>

              <FormControl id="fantasyName" mb="10px" width="50%">
                <FormLabel
                  fontWeight="normal"
                  marginBottom={0}
                >
                  Nome Fantasia
                </FormLabel>
                <Input
                  type="text"
                  focusBorderColor="blue.700"
                  name="fantasyName"
                  onChange={(e) => onChangeInputs(e)}
                  value={establishmentData.fantasyName}
                />
              </FormControl>
            </Box>

            <Box
              width="100%"
              display="flex"
            >
              <FormControl id="cnpj" mb="10px" mr="10px" width="33%">
                <FormLabel
                  fontWeight="normal"
                  marginBottom={0}
                >
                  CNPJ
                </FormLabel>
                <Input
                  type="text"
                  focusBorderColor="blue.700"
                  name="cnpj"
                  onChange={(e) => onChangeInputs(e)}
                  value={establishmentData.cnpj}
                />
              </FormControl>

              <FormControl id="stateRegistration" mb="10px" mr="10px" width="33%">
                <FormLabel
                  fontWeight="normal"
                  marginBottom={0}
                >
                  Incrição Estadual
                </FormLabel>
                <Input
                  type="text"
                  focusBorderColor="blue.700"
                  name="stateRegistration"
                  onChange={(e) => onChangeInputs(e)}
                  value={establishmentData.stateRegistration}
                />
              </FormControl>

              <FormControl id="municipalRegistration" mb="10px" width="33%">
                <FormLabel
                  fontWeight="normal"
                  marginBottom={0}
                >
                  Inscrição Municipal
                </FormLabel>
                <Input
                  type="text"
                  focusBorderColor="blue.700"
                  name="municipalRegistration"
                  onChange={(e) => onChangeInputs(e)}
                  value={establishmentData.municipalRegistration}
                />
              </FormControl>
            </Box>

            <Box
              width="100%"
              display="flex"
            >
              <FormControl id="branch" mb="10px" mr="10px" width="33%">
                <FormLabel
                  fontWeight="normal"
                  marginBottom={0}
                >
                  Ramo
                </FormLabel>
                <Input
                  type="text"
                  focusBorderColor="blue.700"
                  name="branch"
                  onChange={(e) => onChangeInputs(e)}
                  value={establishmentData.branch}
                />
              </FormControl>

              <FormControl id="mail" mb="10px" mr="10px" width="33%">
                <FormLabel
                  fontWeight="normal"
                  marginBottom={0}
                >
                  E-mail
                </FormLabel>
                <Input
                  type="email"
                  focusBorderColor="blue.700"
                  name="mail"
                  onChange={(e) => onChangeInputs(e)}
                  value={establishmentData.mail}
                />
              </FormControl>

              <FormControl id="phone" mb="10px" width="33%">
                <FormLabel
                  fontWeight="normal"
                  marginBottom={0}
                >
                  Telefone
                </FormLabel>
                <Input
                  type="text"
                  focusBorderColor="blue.700"
                  name="phone"
                  onChange={(e) => onChangeInputs(e)}
                  value={establishmentData.phone}
                />
              </FormControl>
            </Box>

            <Box>
              <Heading>Endereço</Heading>
            </Box>

            <FormControl id="zipCode" mb="10px" mr="10px" width="20%">
              <FormLabel
                fontWeight="normal"
                marginBottom={0}
              >
                CEP
              </FormLabel>
              <Input
                type="text"
                focusBorderColor="blue.700"
                name="zipCode"
                onChange={(e) => onChangeInputs(e)}
                value={establishmentData.zipCode}
              />
            </FormControl>

            <Box
              width="100%"
              display="flex"
            >
              <FormControl id="street" mb="10px" mr="10px" width="50%">
                <FormLabel
                  fontWeight="normal"
                  marginBottom={0}
                >
                  Rua
                </FormLabel>
                <Input
                  type="text"
                  focusBorderColor="blue.700"
                  name="street"
                  onChange={(e) => onChangeInputs(e)}
                  value={establishmentData.street}
                />
              </FormControl>

              <FormControl id="number" mb="10px" mr="10px" width="20%">
                <FormLabel
                  fontWeight="normal"
                  marginBottom={0}
                >
                  Número
                </FormLabel>
                <Input
                  type="text"
                  focusBorderColor="blue.700"
                  name="number"
                  onChange={(e) => onChangeInputs(e)}
                  value={establishmentData.number}
                />
              </FormControl>

              <FormControl id="city" mb="10px" width="30%">
                <FormLabel
                  fontWeight="normal"
                  marginBottom={0}
                >
                  Cidade
                </FormLabel>
                <Input
                  type="text"
                  focusBorderColor="blue.700"
                  name="city"
                  onChange={(e) => onChangeInputs(e)}
                  value={establishmentData.city}
                />
              </FormControl>
            </Box>

            <FormControl id="complement" mb="10px" width="100%">
              <FormLabel
                fontWeight="normal"
                marginBottom={0}
              >
                Complemento
              </FormLabel>
              <Input
                type="text"
                focusBorderColor="blue.700"
                name="complement"
                onChange={(e) => onChangeInputs(e)}
                value={establishmentData.complement}
              />
            </FormControl>

            <Box
              display="flex"
              justifyContent="flex-end"
              marginTop="30px"
            >
              <Button
                type="submit"
                variant="solid"
                colorScheme="blue"
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
            </Box>
          </form>
        </Box>
        <Footer />
      </Container>
    </Container>
  );
}
