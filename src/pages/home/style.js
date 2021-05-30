import { makeStyles } from '@material-ui/core/styles';

import home from '../../images/home.jpg';

const useStyles = makeStyles(() => ({
  root: {
    backgroundImage: `url(${home})`,
    width: 800,
    height: 300,
    backgroundSize: 'cover',
  },
}));
export default useStyles;
