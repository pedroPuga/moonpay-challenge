import { Theme, createMuiTheme } from '@material-ui/core';

export const theme: Theme = createMuiTheme({
  typography: {
    fontFamily: 'Roobert Regular',
    h6: {
      color: 'rgb(85,85,85)',
      fontSize: '1rem',
      fontWeight: 500,
    },
  },
  palette: {
    primary: {
      main: '#000',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});
