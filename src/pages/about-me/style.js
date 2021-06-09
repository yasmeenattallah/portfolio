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
    color: theme.props.MuiTypography.color,
  },
  sectionOne: {
    fontFamily: 'Arial',
    width: '60%',
    lineHeight: 2.178,
  },
  sectionTwo: {
    width: '40%',
    fontFamily: 'Arial',
    marginLeft: '15px',
    lineHeight: 2.5,
  },
  bodyTitle: {
    fontWeight: 'bold',
    fontSize: '1.3rem',
  },
  info: {
    fontWeight: 'bold',
    textDecoration: 'underline #00A3E1  2px',
  },
}));

export default useStyles;
