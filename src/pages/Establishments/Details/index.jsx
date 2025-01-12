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

export default function DetailsEstablishment({ match }) {
  const establishmentId = match.params.id;
  const [establishmentData, setEstablishmentData] = useState(initialStateEstablishment);
  const [address, setAddress] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get(`/establishments/${establishmentId}`);
        setAddress(data.address);
        setEstablishmentData(data);
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
              <Text>Detalhes</Text>
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
          <form>
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
                  disabled
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
                  disabled
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
                  disabled
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
                  disabled
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
                  disabled
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
                  disabled
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
                  disabled
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
                  disabled
                />
              </FormControl>
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
          <Box mb="2">
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
              onChange={(e) => onChangeInputsAddress(e)}
              value={address.zipCode}
              disabled
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
                disabled
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
                disabled
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
                disabled
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
              disabled
            />
          </FormControl>
        </Box>
        <Footer />
      </Container>
    </Container>
  );
}
