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
    flexWrap: 'nowrap',
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
  sectionThree: {
    marginTop: '43px',
    fontFamily: 'Arial',
    textAlign: 'center',
  },
  servicesTitle: {
    '&::before ': {
      content: '""',
      position: 'absolute',
      width: '2px',
      height: '10px',
      bottom: 3,
      border: '1px solid #00A3E1',
      boxSizing: 'border-box',
    },
    fontWeight: 'bold',
    fontSize: '1.5rem',
    marginBottom: '20px',
    fontFamily: 'Roboto',
    position: 'relative',
    textDecoration: 'underline #00A3E1  2px',
    letterSpacing: 1.5,
    '&::after ': {
      content: '""',
      position: 'absolute',
      width: '2px',
      height: '10px',
      bottom: 3,
      border: '1px solid #00A3E1',
      boxSizing: 'border-box',
    },
  },
  list: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  listItem: {
    display: 'flex',
    flexFlow: 'column nowrap',
    textAlign: 'center',
    width: 200,
  },
  serviceIcon: {
    color: '#00A3E1',
    fontSize: '40px',
  },
  serviceText: {
    '& .MuiTypography-displayBlock': {
      fontWeight: 'bold',
      fontSize: '1.2rem',
    },
  },
}));

export default useStyles;
