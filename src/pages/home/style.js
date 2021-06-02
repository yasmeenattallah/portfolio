import { makeStyles } from '@material-ui/core/styles';

import home from '../../images/home.jpg';

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${home})`,
    backgroundSize: 'cover',
    opacity: 0.8,
    width: 1166,
    height: 622,
    position: 'absolute',
  },
  typo: {
    textAlign: 'center',
    fontFamily: 'Oswald',
    margin: theme.spacing(30, 0, 0, 0),
    backgroundColor: theme.palette.action.active,
  },
  typo1: {
    // width: 500,
    fontSize: '2rem',
    fontWeight: 'bold',
    opacity: 1,
    letterSpacing: 3,
  },
  typo2: {
    fontSize: '1.5rem',
    textAlign: 'center',
  },
}));
export default useStyles;
