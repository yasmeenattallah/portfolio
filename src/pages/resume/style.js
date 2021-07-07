import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 1166,
    height: 622,
    overflowY: 'scroll',
    overflowX: 'hidden',
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
  body: {
    width: '950px',
    display: 'flex',
    flexWrap: 'nowrap',
    margin: theme.spacing(0, 20),
    color: theme.props.MuiTypography.color,
    [theme.breakpoints.down('sm')]: {
      flexWrap: ' wrap',
      margin: theme.spacing(0, 0),
      width: '100%',
    },
  },
  sectionOne: {
    fontFamily: 'Arial',
    width: '70%',
    lineHeight: 2.178,
    marginTop: '60px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginTop: '-160px',
      marginLeft: '90px',
      fontSize: '0.9rem',
    },
  },
  sectionTwo: {
    width: '50%',
    fontFamily: 'Arial',
    lineHeight: 2.5,
    marginTop: '60px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      // marginTop: '20px',
      marginTop: '-160px',
      marginLeft: '90px',
      fontSize: '0.9rem',
    },
  },
  bodyTitle: {
    fontSize: '1.6rem',
    letterSpacing: 1,
    fontFamily: 'serif',
    marginLeft: '120px',
    borderBottom: '2px solid #00A3E1',
    marginTop: '30px',
    display: 'inline-block',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '0px',
      fontSize: '1.2rem',
    },
  },
  timeline: {
    marginLeft: '-120px',
    marginTop: '50px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '-130px',
      marginTop: '30px',
    },
  },
  timelineContent: {
    color: '#00A3E1',
    fontWeight: 'bold',
  },
  timelineDot: {
    backgroundColor: '#00A3E1',
  },
  span: {
    color: '#00A3E1',
  },
  skills: {
    marginTop: '30px',
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginLeft: '40px',
    width: 1100,
    [theme.breakpoints.down('sm')]: {
      marginLeft: 5,
      justifyContent: 'space-between',
      width: '100%',
    },
  },
  skillsIcon: {
    width: '200px',
    height: '100px',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'arial',
    justifyContent: 'center',
    alignItems: 'center',
    '&:hover': {
      boxShadow: `-7px -7px 10px ${theme.palette.action.selected} , 5px 5px 10px ${theme.palette.action.selected}`,
    },
    [theme.breakpoints.down('sm')]: {
      width: '100px',
    },
  },
}));
export default useStyles;
