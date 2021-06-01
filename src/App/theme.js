import React, { useState } from 'react';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';

import useStyles from './style';

export default function Theme() {
  const classes = useStyles();
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
      divider: '#424242',
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
      divider: '#2a2b30',
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
      <div className={classes.toggleTheme}>
        <Button onClick={handleThemeChange} title="Toggle light/dark theme">
          {darkState ? <Brightness7Icon /> : <Brightness4Icon />}
        </Button>
      </div>
    </ThemeProvider>
  );
}
