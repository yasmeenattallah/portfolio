import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 1100,
    height: 570,
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
    width: '950px',
    display: 'flex',
    flexWrap: 'nowrap',
    margin: theme.spacing(0, 20),
    color: theme.props.MuiTypography.color,
  },
  sectionOne: {
    fontFamily: 'Arial',
    width: '70%',
    lineHeight: 2.178,
    marginTop: '60px',
  },
  sectionTwo: {
    width: '50%',
    fontFamily: 'Arial',
    lineHeight: 2.5,
    marginTop: '60px',
  },
  bodyTitle: {
    fontSize: '1.6rem',
    letterSpacing: 1,
    fontFamily: 'serif',
    marginLeft: '120px',
    borderBottom: '2px solid #00A3E1',
    marginTop: '30px',
    display: 'inline-block',
  },
  timeline: {
    marginLeft: '-120px',
    marginTop: '50px',
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
  },
  skillsIcon: {
    width: '200px',
    height: '100px',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'arial',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
export default useStyles;
