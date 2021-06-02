import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    height: 582,
    width: 180,
    '& .MuiBox-root': {
      padding: 0,
    },
    '& .MuiAppBar-root': {
      backgroundColor: '#303030',
    },
  },
  personalContainer: {
    position: 'relative',
  },

  personalImg: {
    width: '100%',
    height: '160px',
    opacity: 0.7,
  },
  personalText: {
    position: 'absolute',
    bottom: '4px',
    left: '0px',
    textAlign: 'center',
    width: 180,
    height: 40,
    border: '1px solid rgb(21,151,203,76%)',
    backgroundColor: 'rgb(21,151,203,76%)',
    paddingTop: 6,
    fontWeight: 'bold',
    fontFamily: 'Playfair Display',
  },
  tabs: {
    '& .MuiTabs-scroller': {
      // display: 'none',
    },
    '& .PrivateTabIndicator-colorSecondary-10': {
      backgroundColor: '#303030',
    },
    '& .MuiTab-labelIcon': {
      minHeight: 50,
    },
    '& .MuiTab-root': {
      borderBottom: '1px solid #202020',
    },
    '& .MuiTab-wrapper': {
      alignItems: 'flex-start',
      flexDirection: 'row',
      justifyContent: 'flex-start',
    },
    '& .MuiSvgIcon-root': {
      margin: theme.spacing(0, 3, 0, 0),
      color: '#999',
    },
  },
  footer: {
    margin: theme.spacing(3, 0, 0, 4),
    '& .MuiTypography-colorPrimary': {
      color: '#999',
    },
    '& .MuiTypography-body1': {
      color: '#999999',
      fontSize: '12px',
      margin: theme.spacing(2, 5, 0, -2),
      textAlign: 'center',
    },
    '& .MuiSvgIcon-root': {
      margin: theme.spacing(0, 1, 0, 1),
      fontSize: 19,
    },
  },
}));
export default useStyles;
