import { createMuiTheme } from '@material-ui/core/styles';

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
  props: {
    MuiButton: {
      variant: 'outlined',
    },
    MuiTextField: {
      color: '#fff',
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
  props: {
    MuiButton: {
      variant: 'outlined',
    },
    MuiTextField: {
      color: '#000',
    },
  },
});

// const paletteType = darkState ? 'dark' : 'light';
// const primaryText = darkState ? '#ffffff' : '#202020';
// const secText = darkState ? '#C1C1C1' : '#727272';
// const disableText = darkState ? '#989898' : '#FAFAFA';
// const primaryBackground = darkState ? '#303030' : '#FAFAFA';
// const paperGround = darkState ? '#424242' : '#727272';
// const divider = darkState ? '#424242' : '#2a2b30';
// const activeAction = darkState ? '#ffffff' : '#727272';
// const hoverAction = darkState ? '#404040' : '#F0F0F0';
// const selectedAction = darkState ? '#515151' : '#E6E6E6';
// const disableAction = darkState ? '#6F6F6F' : '#BABABA';
// const disableGroundAction = darkState ? '#303030' : '#DCDCDC';
// const colorTextField = darkState ? '#fff' : '#000';

// const darkTheme = createMuiTheme({
//   palette: {
//     type: paletteType,
//     text: {
//       primary: primaryText,
//       secondary: secText,
//       disabled: disableText,
//     },
//     background: {
//       primary: primaryBackground,
//       paper: paperGround,
//     },
//     divider,
//     action: {
//       active: activeAction,
//       hover: hoverAction,
//       selected: selectedAction,
//       disabled: disableAction,
//       disabledBackground: disableGroundAction,
//     },
//   },

//   props: {
//     MuiButton: {
//       variant: 'outlined',
//     },
//     MuiTextField: {
//       color: colorTextField,
//     },
//   },
// });
export { darkTheme, lightTheme };
