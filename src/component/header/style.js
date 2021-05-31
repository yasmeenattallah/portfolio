import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 582,
    width: 180,
    '& .MuiBox-root': {
      padding: 0,
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
    border: '1px solid #92d9f4',
    backgroundColor: '#92d9f4',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));
export default useStyles;
