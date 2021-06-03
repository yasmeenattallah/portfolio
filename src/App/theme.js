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
  const paletteType = darkState ? 'dark' : 'light';
  const primaryText = darkState ? '#ffffff' : '#202020';
  const secText = darkState ? '#C1C1C1' : '#727272';
  const disableText = darkState ? '#989898' : '#FAFAFA';
  const primaryBackground = darkState ? '#303030' : '#FAFAFA';
  const paperGround = darkState ? '#424242' : '#727272';
  const divider = darkState ? '#424242' : '#2a2b30';
  const activeAction = darkState ? '#ffffff' : '#727272';
  const hoverAction = darkState ? '#404040' : '#F0F0F0';
  const selectedAction = darkState ? '#515151' : '#E6E6E6';
  const disableAction = darkState ? '#6F6F6F' : '#BABABA';
  const disableGroundAction = darkState ? '#303030' : '#DCDCDC';
  const darkTheme = createMuiTheme({
    palette: {
      type: paletteType,
      text: {
        primary: primaryText,
        secondary: secText,
        disabled: disableText,
      },
      background: {
        primary: primaryBackground,
        paper: paperGround,
      },
      divider,
      action: {
        active: activeAction,
        hover: hoverAction,
        selected: selectedAction,
        disabled: disableAction,
        disabledBackground: disableGroundAction,
      },
    },
  });
  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className={classes.toggleTheme}>
        <Button
          onClick={handleThemeChange}
          title="Toggle light/dark theme"
          checked={darkState}
        >
          {darkState ? <Brightness7Icon /> : <Brightness4Icon />}
        </Button>
      </div>
    </ThemeProvider>
  );
}
