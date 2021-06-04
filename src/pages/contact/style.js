import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 1166,
    height: 622,
  },
  header: {
    borderBottom: `1px dotted ${theme.palette.divider}`,
    width: 800,
    display: 'inline-flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    '& .MuiTypography-body1': {
      fontFamily: 'Kaushan Script',
    },
    margin: theme.spacing(6, 7),
  },
  title: {
    color: '#00A3E1',
    letterSpacing: 1.5,
    fontSize: '2rem',
  },

  icon: {
    color: '#00A3E1',
    fontSize: '2rem',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  subTitle: {
    fontWeight: 'bold',
    fontSize: '1.8rem',
    fontFamily: 'Roboto',
    textAlign: 'center',
  },
  body: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-around',
    margin: theme.spacing(7, 15),
    width: 900,
  },
  input: {
    width: 400,
    '& .MuiOutlinedInput-notchedOutline': {
      border: `1px solid #999`,
    },
    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline ': {
      borderColor: '#000',
    },
    '& .MuiFormLabel-root': {
      color: '#000',
    },
    '& .MuiOutlinedInput-input:-webkit-autofill': {
      boxShadow: ' 0 0 0 100px black inset',
    },
  },
}));
export default useStyles;
