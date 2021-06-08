import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 1150,
    height: 550,
  },
  header: {
    borderBottom: `1px dotted ${theme.palette.divider}`,
    width: 1000,
    '& .MuiTypography-body1': {
      display: 'inline-flex',
      justifyContent: 'flex-start',
      // alignItems: 'center',
      fontFamily: 'Kaushan Script',
    },
    margin: theme.spacing(6, 10),
  },
  title: {
    color: '#00A3E1',
    letterSpacing: 1.5,
    fontSize: '2rem',
    width: 900,
  },

  icon: {
    color: '#00A3E1',
    fontSize: '2.8rem',
    marginBottom: '-13px',
  },
  body: {
    width: '1000px',
    display: 'flex',
    margin: theme.spacing(0, 10),
  },
  sectionOne: {
    width: '60%',
    border: '1px solid #f00',
  },
  sectionTwo: {
    width: '40%',
    border: '1px solid #f00',
  },
}));

export default useStyles;
