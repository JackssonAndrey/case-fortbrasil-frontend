import React, { useState, useEffect } from 'react';
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
  CircularProgress,
  useToast,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import TopMenu from '../../../components/TopMenu';
import Footer from '../../../components/Footer';
import api from '../../../services/api';

import './styles.css';

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

export default function EditEstablishment({ match }) {
  const toast = useToast();
  const establishmentId = match.params.id;
  const [establishmentData, setEstablishmentData] = useState(initialStateEstablishment);
  const [isHiddenLoadingEdit, setIsHiddenLoadingEdit] = useState(true);
  const [isHiddenLoadingEditAddress, setIsHiddenLoadingEditAddress] = useState(true);
  const [address, setAddress] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get(`/establishments/${establishmentId}`);
        setEstablishmentData(data);
        setAddress(data.address);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);

  function onChangeInputs(e) {
    const { name, value } = e.target;
    setEstablishmentData({ ...establishmentData, [name]: value });
  }

  function onChangeInputsAddress(e) {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  }

  async function handleEdit(e) {
    e.preventDefault();

    try {
      await api.put('/establishments', establishmentData);
      setIsHiddenLoadingEdit(false);
      setTimeout(() => {
        toast({
          status: 'success',
          duration: 5000,
          title: 'Atualização feita',
          description: 'Dados atualizados com sucesso',
          position: 'top',
        });
      }, 2000);
      setTimeout(() => {
        setIsHiddenLoadingEdit(true);
      }, 3000);
    } catch (error) {
      setIsHiddenLoadingEdit(false);
      setTimeout(() => {
        toast({
          status: 'error',
          duration: 5000,
          title: 'Falha na atualizaçaõ',
          description: `${error.message}`,
          position: 'top',
        });
      }, 2000);
      setTimeout(() => {
        setIsHiddenLoadingEdit(true);
      }, 3000);
    }
  }

  async function handleEditAddress(e) {
    e.preventDefault();

    try {
      await api.put('/address/', address);
      setIsHiddenLoadingEditAddress(false);
      setTimeout(() => {
        toast({
          status: 'success',
          duration: 5000,
          title: 'Atualização feita',
          description: 'Dados de endereço atualizados com sucesso',
          position: 'top',
        });
      }, 2000);
      setTimeout(() => {
        setIsHiddenLoadingEditAddress(true);
      }, 3000);
    } catch (error) {
      setIsHiddenLoadingEditAddress(false);
      setTimeout(() => {
        toast({
          status: 'error',
          duration: 5000,
          title: 'Falha na atualizaçaõ',
          description: `${error.message}`,
          position: 'top',
        });
      }, 2000);
      setTimeout(() => {
        setIsHiddenLoadingEditAddress(true);
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
          marginBottom="4"
        >
          <Breadcrumb spacing="8px" separator={<ChevronRightIcon color="gray.500" />} color="gray.300">
            <BreadcrumbItem>
              <Link to="/establishments" className="link">Estabelecimentos</Link>
            </BreadcrumbItem>

            <BreadcrumbItem isLastChild>
              <Text>Editar</Text>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>

        <Box
          width="100%"
          padding="30px"
          backgroundColor="whiteAlpha.200"
          borderRadius="md"
          shadow="md"
        >
          <Box
            marginBottom="4"
          >
            <Heading>
              Dados de
              {' '}
              {establishmentData.companyName}
            </Heading>
          </Box>
          <form onSubmit={(e) => handleEdit(e)}>
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
                Salvar Alterações
                <CircularProgress
                  hidden={isHiddenLoadingEdit}
                  size={5}
                  ml="2"
                  isIndeterminate
                  color="blue.1000"
                />
              </Button>
            </Box>
          </form>
        </Box>
        <Box
          width="100%"
          padding="30px"
          backgroundColor="whiteAlpha.200"
          borderRadius="md"
          shadow="md"
          mt="4"
        >
          <Box
            mb="2"
          >
            <Heading>Endereço</Heading>
          </Box>
          <form onSubmit={(e) => handleEditAddress(e)}>

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
                onChange={(e) => onChangeInputsAddress(e)}
                value={address.zipCode}
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
                  onChange={(e) => onChangeInputsAddress(e)}
                  value={address.street}
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
                  onChange={(e) => onChangeInputsAddress(e)}
                  value={address.number}
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
                  onChange={(e) => onChangeInputsAddress(e)}
                  value={address.city}
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
                onChange={(e) => onChangeInputsAddress(e)}
                value={address.complement}
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
                Salvar Alterações
                <CircularProgress
                  hidden={isHiddenLoadingEditAddress}
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
