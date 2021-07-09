import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 1166,
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
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      margin: theme.spacing(0, 0),
    },
    margin: theme.spacing(6, 10),
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
  subTitle: {
    fontWeight: 'bold',
    fontSize: '1.8rem',
    fontFamily: 'Roboto',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.4rem',
      textAlign: 'left',
      marginBottom: '10px',
      marginTop: '10px',
    },
  },
  body: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-around',
    margin: theme.spacing(7, 24),
    width: 800,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      width: '100%',
      margin: theme.spacing(0, 0),
    },
  },
  input: {
    '& .MuiOutlinedInput-notchedOutline': {
      border: `1px solid ${theme.props.MuiTypography.color}`,
    },
    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline ': {
      borderColor: theme.props.MuiTypography.color,
    },
    '& .MuiInputBase-root': {
      color: theme.props.MuiTypography.color,
      fontWeight: 'bold',
      width: 350,
      marginBottom: 30,
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
    },
    '& .MuiOutlinedInput-multiline': {
      width: 750,
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
    },
    '& .MuiInputLabel-root': {
      color: theme.props.MuiTypography.color,
      fontWeight: 'bold',
    },
    '& .PrivateNotchedOutline-root-344 .MuiOutlinedInput-notchedOutline': {
      color: theme.props.MuiTypography.color,
    },
  },
  btn: {
    '&.MuiButton-outlinedPrimary': {
      color: '#00A3E1',
      border: '2px solid #00A3E1',
      '&:hover': {
        backgroundColor: '#00A3E1',
        color: theme.palette.background.paper,
      },
    },
    marginTop: 30,
    alignSelf: 'center',
    color: '#00A3E1',
    fontWeight: 'bolder',
    fontSize: '1rem',
  },
  alert: {
    width: 750,
  },
}));
export default useStyles;
