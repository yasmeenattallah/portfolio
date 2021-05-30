import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';


const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    text: {
      primary: '#fffff',
      secondary: '#C1C1C1',
      disabled: '#989898',
    },
    background: {
      primary: '#303030',
      paper: '#424242',
    },
    divider: '#494949',
    action: {
      active: '#ffffff',
      hover: '#404040',
      selected: '#515151',
      disabled: '#6F6F6F',
      disabledBackground: '#303030',
    },
  },
});
const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    text: {
      primary: '#202020',
      secondary: '#727272',
      disabled: '#FAFAFA',
    },
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
});
const Theme = (props) => {
  const { children, darkMode } = props;
  const defaultTheme = darkMode ? darkTheme : lightTheme;
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

