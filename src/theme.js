import React, { useState } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Switch from '@material-ui/core/Switch';

export default function Dashboard() {
  const [darkState, setDarkState] = useState(false);
  const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
      text: {
        primary: '#ffffff',
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
  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

  return (
    <ThemeProvider theme={darkState ? darkTheme : lightTheme}>
      <CssBaseline />
      <Switch checked={darkState} onChange={handleThemeChange} />
    </ThemeProvider>
  );
}
