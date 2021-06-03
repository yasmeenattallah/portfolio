import React from 'react';

import useStyles from './style';

const AboutMe = () => {
  const classes = useStyles();
  return <div className={classes.root}> Hi from about me page</div>;
};
export default AboutMe;
