import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
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
export default theme;
