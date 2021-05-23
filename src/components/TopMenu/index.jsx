import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';

import { Context } from '../../Context/AuthContext';

import './styles.css';

export default function TopMenu() {
  const { handleLogout } = useContext(Context);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      height="auto"
      width="100%"
      position="absolute"
      top="0"
      left="0"
      shadow="md"
      backgroundColor="whiteAlpha.200"
    >
      <Flex
        alignContent="space-between"
        justifyContent="space-between"
        flexDirection="row"
        padding="3"
      >
        <Heading
          as="h3"
          size="lg"
        >
          Dashboard
        </Heading>

        <div className="top-menu">
          <ul>
            <li>
              <Link to="/establishments">
                <Text _hover={{ color: 'blue.1000' }}>Estabelecimentos</Text>
              </Link>
            </li>
            <li>
              <Link to="/profile">
                <Text _hover={{ color: 'blue.1000' }}>Perfil</Text>
              </Link>
            </li>
          </ul>
        </div>

        <div className="buttons">
          <Button onClick={onOpen} marginRight="2" colorScheme="red" fontSize="x-small">
            Sair
          </Button>
        </div>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sair do sistema</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Deseja realmente sair do sistema?</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Cacelar
            </Button>
            <Button variant="ghost" colorScheme="red" onClick={handleLogout}>Sair</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
