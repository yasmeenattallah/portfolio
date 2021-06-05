import React, { useState } from 'react';

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';

import Header from '../component';

import { darkTheme, lightTheme } from './theme';

import useStyles from './style';

function App() {
  const classes = useStyles();
  const [darkState, setDarkState] = useState(false);
  const handleThemeChange = () => {
    setDarkState(!darkState);
  };
  return (
    <ThemeProvider theme={darkState ? darkTheme : lightTheme}>
      <CssBaseline />
      <Button
        onClick={handleThemeChange}
        title="Toggle light/dark theme"
        checked={darkState}
        className={classes.toggleTheme}
      >
        {darkState ? <Brightness7Icon /> : <Brightness4Icon />}
      </Button>
      <Header />
    </ThemeProvider>
  );
}

export default App;
