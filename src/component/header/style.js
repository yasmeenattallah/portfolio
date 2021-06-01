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
      backgroundColor: '#17181B',
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
    '& .PrivateTabIndicator-colorSecondary-9': {
      backgroundColor: '#303030',
    },
    '& .MuiTab-wrapper': {
      alignItems: 'flex-start',
      flexDirection: 'row',
    },
    '& .MuiSvgIcon-root': {
      margin: theme.spacing(0, 5, 0, 0),
    },
  },
}));
export default useStyles;
