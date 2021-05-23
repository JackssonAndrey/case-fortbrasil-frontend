import React from 'react';
import { Router } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import Routes from './Routes';
import history from './services/history';
import customTheme from './styles/theme';
import { AuthProvider } from './Context/AuthContext';

import './styles/global.css';

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <AuthProvider>
        <Router history={history}>
          <Routes />
        </Router>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
