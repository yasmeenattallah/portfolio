import React from 'react';

import Typography from '@material-ui/core/Typography';
import CardTravelOutlinedIcon from '@material-ui/icons/CardTravelOutlined';
import useStyles from './style';

const PortfolioPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography className={classes.title}>Portfolio .</Typography>
        <CardTravelOutlinedIcon className={classes.icon} />
      </div>
    </div>
  );
};
export default PortfolioPage;
