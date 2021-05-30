import React from 'react';

import useStyles from './style';

const Home = () => {
  const classes = useStyles();
  return <div className={classes.root}>Hi from Home page</div>;
};
export default Home;
