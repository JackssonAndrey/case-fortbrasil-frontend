import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
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

import TopMenu from '../../components/TopMenu';

export default function Establishments() {
  const [isOpen, setIsOpen] = useState(false);

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
            <TableCaption>Imperial to metric conversion factors</TableCaption>
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
              <Tr>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td>millimetres (mm)</Td>
                <Td>millimetres (mm)</Td>
                <Td>
                  <Button
                    variant="ghost"
                    colorScheme="orange"
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
              <Tr>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td>millimetres (mm)</Td>
                <Td>millimetres (mm)</Td>
                <Td>
                  <Button
                    variant="ghost"
                    colorScheme="orange"
                    onClick={() => redirectToEdit(1)}
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
              <Tr>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td>millimetres (mm)</Td>
                <Td>millimetres (mm)</Td>
                <Td>
                  <Button
                    variant="ghost"
                    colorScheme="orange"
                    onClick={() => redirectToEdit(1)}
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
            </Tbody>
            <Tfoot>
              <Tr>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td>millimetres (mm)</Td>
                <Td>millimetres (mm)</Td>
                <Td>
                  <Button
                    variant="ghost"
                    colorScheme="orange"
                    onClick={() => redirectToEdit(1)}
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
            </Tfoot>
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
