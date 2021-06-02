import React from 'react';

import Typography from '@material-ui/core/Typography';

import useStyles from './style';
// import home from '../../images/home.jpg';

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.background} />
      <Typography>
        YASMEEN ATTALLAH <br />
        I&apos;M A FRONT-END WEB DEVELOPER
      </Typography>
    </div>
  );
};
export default Home;
