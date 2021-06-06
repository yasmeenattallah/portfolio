import { createMuiTheme } from '@material-ui/core/styles';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    background: {
      primary: '#303030',
      paper: '#202020',
    },
    divider: '#707070',
    action: {
      active: '#ffffff',
      hover: '#404040',
      selected: '#515151',
      disabled: '#6F6F6F',
      disabledBackground: '#303030',
    },
  },
  props: {
    MuiButton: {
      variant: 'outlined',
    },
    MuiTextField: {
      color: '#fff',
    },
    MuiTypography: {
      color: '#fff',
    },
  },
});

const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    background: {
      primary: '#FAFAFA',
      paper: '#ffffff',
    },
    divider: '#DCDCDC',
    action: {
      active: '#727272',
      hover: '#F0F0F0',
      selected: '#E6E6E6',
      disabled: '#BABABA',
      disabledBackground: '#DCDCDC',
    },
  },
  props: {
    MuiButton: {
      variant: 'outlined',
    },
    MuiTextField: {
      color: '#000',
    },
    MuiTypography: {
      color: '#000',
    },
  },
});

export { darkTheme, lightTheme };
