import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  Button,
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Select,
  CircularProgress,
  useToast,
} from '@chakra-ui/react';
import axios from 'axios';

import { DeleteIcon, EditIcon, SearchIcon } from '@chakra-ui/icons';
import history from '../../services/history';
import api from '../../services/api';

import TopMenu from '../../components/TopMenu';
import Footer from '../../components/Footer';

export default function Establishments() {
  const toast = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [isHiddenLoadingDelete, setIsHiddenLoadingDelete] = useState(true);
  const [allEstablishments, setAllEstablishments] = useState([]);
  const [ufs, setUfs] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedUf, setSelectedUf] = useState('0');
  const [selectedCity, setSelectedCity] = useState('0');
  const [establishmentId, setEstablishmentId] = useState(0);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get('/establishments/');
        setAllEstablishments(data);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);

  useEffect(() => {
    axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then((response) => {
      const ufInitials = response.data.map((uf) => uf.sigla);
      setUfs(ufInitials);
    });
  }, []);

  useEffect(() => {
    if (selectedUf === '0') return;

    axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`)
      .then((response) => {
        const cityNames = response.data.map((city) => city.nome);
        setCities(cityNames);
      });
  }, [selectedUf]);

  async function handleGetAllEstablishments() {
    try {
      const { data } = await api.get('/establishments/');
      setAllEstablishments(data);
    } catch (error) {
      console.log(error.message);
    }
  }

  function handleSelectUf(event) {
    const uf = event.target.value;
    setSelectedUf(uf);
  }

  function handleSelectCity(event) {
    const city = event.target.value;
    setSelectedCity(city);
  }

  function openModalDelete(id) {
    setIsOpen(true);
    setEstablishmentId(id);
  }

  function closeModalDelete() {
    setIsOpen(false);
    setEstablishmentId(0);
  }

  function redirectToEdit(id) {
    history.push(`/establishments/edit/${id}`);
  }

  function handleSearchByCity() {
    const filtered = allEstablishments.filter((element) => element.address.city === selectedCity);
    setAllEstablishments(filtered);
  }

  async function handleDelete() {
    try {
      await api.put(`/establishments/deactivate/${establishmentId}`);
      setIsHiddenLoadingDelete(false);
      setTimeout(() => {
        toast({
          status: 'success',
          duration: 5000,
          title: 'Registro deletado',
          description: 'Registro deletado com sucesso',
          position: 'top',
        });

        const filtered = allEstablishments.filter((element) => element.id !== establishmentId);
        setAllEstablishments(filtered);
        closeModalDelete();
      }, 2000);
      setTimeout(() => {
        setIsHiddenLoadingDelete(true);
      }, 3000);
    } catch (error) {
      setIsHiddenLoadingDelete(false);
      setTimeout(() => {
        toast({
          status: 'error',
          duration: 5000,
          title: 'Falha na exclusão',
          description: `${error.message}`,
          position: 'top',
        });
      }, 2000);
      setTimeout(() => {
        setIsHiddenLoadingDelete(true);
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
          display="flex"
          justifyContent="flex-start"
          alignContent="flex-start"
          width="100%"
          marginBottom="4"
        >
          <Heading>
            Estabelecimentos cadastrados
          </Heading>
        </Box>

        <Box
          display="flex"
          justifyContent="space-between"
          alignContent="space-between"
          width="100%"
          paddingBottom="4"
        >
          <Box
            display="flex"
            justifyContent="flex-start"
            alignContent="flex-start"
          >
            <Select placeholder="Selecione o estado" onChange={(e) => handleSelectUf(e)}>
              {
                ufs.map((uf) => (
                  <option key={uf} value={uf}>{uf}</option>
                ))
              }
            </Select>

            <Select placeholder="Pesquise por cidade" ml="3" onChange={(e) => handleSelectCity(e)}>
              {
                cities.map((city) => (
                  <option key={city} value={city}>{city}</option>
                ))
              }
            </Select>

            <Button
              variant="solid"
              colorScheme="blue"
              onClick={handleSearchByCity}
              ml="4"
            >
              <SearchIcon />
            </Button>

            <Button
              variant="solid"
              colorScheme="orange"
              onClick={handleGetAllEstablishments}
              ml="4"
              padding="5"
            >
              Todos
            </Button>
          </Box>
          <Link to="/establishments/register">
            <Button variant="solid" colorScheme="blue">Novo</Button>
          </Link>
        </Box>

        <Box
          display="flex"
          justifyContent="flex-end"
          alignContent="flex-end"
          width="100%"
          borderRadius="md"
          padding="2"
          backgroundColor="whiteAlpha.200"
          shadow="md"
        >

          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Razão Social</Th>
                <Th>CNPJ</Th>
                <Th>E-mail</Th>
                <Th>Telefone</Th>
                <Th />
              </Tr>
            </Thead>
            <Tbody>
              {allEstablishments.length === 0 && (
                <Tr>
                  <Td colSpan="12" textAlign="center">Nenhum estabelecimento cadastrado.</Td>
                </Tr>
              )}
              {
                allEstablishments.map((establishment) => (
                  <Tr key={establishment.id}>
                    <Td>
                      <Link to={`/establishments/details/${establishment.id}`} className="link">
                        {establishment.companyName}
                      </Link>
                    </Td>
                    <Td>{establishment.cnpj}</Td>
                    <Td>{establishment.mail}</Td>
                    <Td>{establishment.phone}</Td>

                    <Td>
                      <Button
                        variant="ghost"
                        colorScheme="orange"
                        onClick={() => redirectToEdit(establishment.id)}
                      >
                        <EditIcon />
                      </Button>

                      <Button
                        variant="ghost"
                        colorScheme="red"
                        onClick={() => openModalDelete(establishment.id)}
                      >
                        <DeleteIcon />
                      </Button>
                    </Td>
                  </Tr>
                ))
              }
            </Tbody>
          </Table>
        </Box>
        <Footer />
      </Container>

      <Modal isOpen={isOpen} onClose={closeModalDelete}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Excluir registro</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Deseja realmente excluir este registro?</Text>
            <Text>Esta operação não pode ser desfeita.</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={closeModalDelete}>
              Cacelar
            </Button>
            <Button
              variant="ghost"
              colorScheme="red"
              onClick={handleDelete}
            >
              Apagar
              <CircularProgress
                hidden={isHiddenLoadingDelete}
                size={5}
                ml="2"
                isIndeterminate
                color="blue.1000"
              />
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
}
