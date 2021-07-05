import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 200;
const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(-5, 0, 0, 0),
    flexGrow: 1,
    display: 'flex',
    height: 655,
    width: 200,
    '& .MuiBox-root': {
      padding: 0,
    },
    '& .MuiAppBar-root': {
      backgroundColor: '#303030',
    },
  },
  personalContainer: {
    position: 'relative',
  },

  personalImg: {
    width: '100%',
    height: '160px',
    objectFit: 'cover',
  },
  personalText: {
    position: 'absolute',
    bottom: '4px',
    left: '0px',
    textAlign: 'center',
    width: 200,
    height: 40,
    border: '1px solid rgb(21,151,203,76%)',
    backgroundColor: 'rgb(21,151,203,76%)',
    paddingTop: 6,
    fontWeight: 'bold',
    fontFamily: 'Playfair Display',
  },
  tabs: {
    '& .PrivateTabIndicator-colorSecondary-10': {
      backgroundColor: '#303030',
    },
    '& .PrivateTabIndicator-colorSecondary-1137': {
      backgroundColor: '#303030',
    },
    '& .PrivateTabIndicator-colorSecondary-20': {
      backgroundColor: '#303030',
    },
    '& .PrivateTabIndicator-colorSecondary-15': {
      backgroundColor: '#303030',
    },
    '& .MuiTab-labelIcon': {
      fontFamily: 'Arial',
      minHeight: 62,
    },
    '& .MuiTab-root': {
      borderBottom: '1px solid #202020',
    },
    '& .MuiTab-wrapper': {
      alignItems: 'flex-start',
      flexDirection: 'row',
      justifyContent: 'flex-start',
    },
    '& .MuiSvgIcon-root': {
      margin: theme.spacing(0, 3, 0, 0),
      color: '#999',
    },
  },
  footer: {
    margin: theme.spacing(7, 0, 0, 4),
    '& .MuiTypography-colorPrimary': {
      color: '#999',
    },
    '& .MuiTypography-body1': {
      fontFamily: 'Arial',
      color: '#999999',
      fontSize: '12px',
      margin: theme.spacing(2, 5, 0, -2),
      textAlign: 'center',
    },
    '& .MuiSvgIcon-root': {
      margin: theme.spacing(0, 1, 0, 1),
      fontSize: 19,
    },
  },
  //
  mobileRoot: {
    display: 'flex',
    '& .MuiToolbar-regular': {
      backgroundColor: theme.palette.background.primary,
      color: theme.props.MuiTypography.color,
      minHeight: '0px',
    },
    '& .MuiAppBar-colorPrimary': {
      background: '#303030',
    },
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      height: 655,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));
export default useStyles;
