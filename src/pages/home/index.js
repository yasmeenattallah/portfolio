import React from 'react';

import Typography from '@material-ui/core/Typography';

import useStyles from './style';

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <div className={classes.typo}>
        <Typography className={classes.typo1}>
          YASMEEN ATTALLAH <br />
        </Typography>
        <Typography className={classes.typo2}>
          I&apos;m a Front-End Web Developer
        </Typography>
      </div>
    </div>
  );
};
export default Home;
