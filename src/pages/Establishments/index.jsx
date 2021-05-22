import React from 'react';
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
} from '@chakra-ui/react';

import { DeleteIcon, EditIcon } from '@chakra-ui/icons';

import TopMenu from '../../components/TopMenu';

export default function Establishments() {
  return (
    <Container
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
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
          border="1px"
          borderColor="ButtonShadow"
          padding="2"
        >

          <Table variant="simple">
            <TableCaption>Imperial to metric conversion factors</TableCaption>
            <Thead>
              <Tr>
                <Th>Razão Socila</Th>
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
                  >
                    <EditIcon />
                  </Button>

                  <Button
                    variant="ghost"
                    colorScheme="red"
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
                  >
                    <EditIcon />
                  </Button>

                  <Button
                    variant="ghost"
                    colorScheme="red"
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
                  >
                    <EditIcon />
                  </Button>

                  <Button
                    variant="ghost"
                    colorScheme="red"
                  >
                    <DeleteIcon />
                  </Button>
                </Td>
              </Tr>
            </Tfoot>
          </Table>
        </Box>

      </Container>
    </Container>
  );
}
