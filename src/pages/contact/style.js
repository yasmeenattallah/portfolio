import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 1166,
    height: 622,
    border: '3px solid #707070',
  },
  header: {
    borderBottom: `1px dotted ${theme.palette.divider}`,
    display: 'flex',
    justifyContent: 'flex-start',
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
    alignItems: 'flex-end',
  },
}));
export default useStyles;
