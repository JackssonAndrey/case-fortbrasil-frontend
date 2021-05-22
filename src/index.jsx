import React from 'react';
import ReactDOM from 'react-dom';
import { ColorModeScript } from '@chakra-ui/react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import customTheme from './styles/theme';

ReactDOM.render(
  <React.StrictMode>
    <>
      <ColorModeScript initialColorMode={customTheme.config.initialColorMode} />
      <App />
    </>
  </React.StrictMode>,
  document.getElementById('root'),
);
reportWebVitals();
