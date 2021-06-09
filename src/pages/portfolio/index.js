import React from 'react';

import useStyles from './style';

const PortfolioPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <p> Hi from Portfolio page</p>
    </div>
  );
};
export default PortfolioPage;
