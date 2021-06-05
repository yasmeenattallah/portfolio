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
    margin: theme.spacing(7, 24),
    width: 800,
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
    },
    '& .MuiOutlinedInput-input:-webkit-autofill': {
      boxShadow: ' 0 0 0 100px black inset',
    },
    '& .MuiOutlinedInput-multiline': {
      width: 750,
    },
    '& .MuiInputLabel-root': {
      color: theme.props.MuiTypography.color,
      fontWeight: 'bold',
    },
    '& .PrivateNotchedOutline-root-344 .MuiOutlinedInput-notchedOutline': {
      color: theme.props.MuiTypography.color,
    },
    '& .MuiButton-outlinedPrimary': {
      color: '#0f0',
    },
  },

  btn: {
    marginTop: 30,
    alignSelf: 'center',
    color: theme.props.MuiTypography.color,
  },
}));
export default useStyles;
