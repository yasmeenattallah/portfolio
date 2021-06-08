import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 1150,
    height: 550,
  },
  header: {
    borderBottom: `1px dotted ${theme.palette.divider}`,
    width: 1000,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    '& .MuiTypography-body1': {
      fontFamily: 'Kaushan Script',
    },
    margin: theme.spacing(6, 10),
  },
  title: {
    color: '#00A3E1',
    letterSpacing: 1.5,
    fontSize: '2rem',
  },

  icon: {
    color: '#00A3E1',
    fontSize: '2rem',
    justifyItems: 'flex-end',
  },
}));

export default useStyles;
