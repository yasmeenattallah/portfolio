import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 1150,
    height: 550,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  header: {
    borderBottom: `1px dotted ${theme.palette.divider}`,
    width: 1000,
    '& .MuiTypography-body1': {
      display: 'inline-flex',
      justifyContent: 'flex-start',
      fontFamily: 'Kaushan Script',
    },
    margin: theme.spacing(6, 10),
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      margin: theme.spacing(0, 0),
    },
  },
  title: {
    color: '#00A3E1',
    letterSpacing: 1.5,
    fontSize: '2rem',
    width: 900,
    [theme.breakpoints.down('sm')]: {
      width: '80%',
    },
  },

  icon: {
    color: '#00A3E1',
    fontSize: '2.8rem',
    marginBottom: '-13px',
  },
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexFlow: 'column nowrap',
    },
  },
  body: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: '90px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  link: {
    width: '100%',
    height: '100%',
    border: '2px solid #f0f',
  },
  img: {
    objectFit: 'cover',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      minWidth: '100%',
    },
  },
}));
export default useStyles;
