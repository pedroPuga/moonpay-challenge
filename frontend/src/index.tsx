import React from 'react';
import ReactDOM from 'react-dom';
import App from './Pages/App/App';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { theme } from './theme';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CssBaseline>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </CssBaseline>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
