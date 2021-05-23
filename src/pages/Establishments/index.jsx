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
} from '@chakra-ui/react';

import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import history from '../../services/history';
import api from '../../services/api';

import TopMenu from '../../components/TopMenu';

export default function Establishments() {
  const [isOpen, setIsOpen] = useState(false);
  const [allEstablishments, setAllEstablishments] = useState([]);

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

  function openModalDelete() {
    setIsOpen(true);
  }

  function closeModalDelete() {
    setIsOpen(false);
  }

  function redirectToEdit(id) {
    history.push(`/establishments/edit/${id}`);
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
          justifyContent="flex-end"
          alignContent="flex-end"
          width="100%"
          paddingBottom="4"
        >
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
                    <Td>{establishment.companyName}</Td>
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
                        onClick={openModalDelete}
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
            <Button variant="ghost" colorScheme="red">Apagar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
}
