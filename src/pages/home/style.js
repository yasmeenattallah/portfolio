import { makeStyles } from '@material-ui/core/styles';

import home from '../../images/home.jpg';

const useStyles = makeStyles(() => ({
  root: {
    width: 1166,
    height: 622,
  },
  background: {
    backgroundImage: `url(${home})`,
    backgroundSize: 'cover',
    opacity: 0.9,
    width: 1166,
    height: 622,
    position: 'absolute',
  },
}));
export default useStyles;
