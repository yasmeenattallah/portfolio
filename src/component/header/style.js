import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 270,
    width: 200,
    '& .MuiBox-root': {
      padding: 0,
    },
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));
export default useStyles;
