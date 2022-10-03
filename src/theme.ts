import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#463db9',
    },
    secondary: {
      main: '#eda439',
    },
    // text: {
    //   primary: '#ffffff',
    // },
  },
  typography: {
    fontFamily: 'Montserrat',
    body1: {
      fontSize: '1.3rem',
    },
  },
});
