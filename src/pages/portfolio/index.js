import React from 'react';

import Typography from '@material-ui/core/Typography';
import CardTravelOutlinedIcon from '@material-ui/icons/CardTravelOutlined';
import Link from '@material-ui/core/Link';

import useStyles from './style';
import beautySalon from '../../images/beautySalon.png';
import houseHunting from '../../images/houseHunting.png';

const PortfolioPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography className={classes.title}>Portfolio .</Typography>
        <CardTravelOutlinedIcon className={classes.icon} />
      </div>
      <div className={classes.body}>
        <Link
          href="https://github.com/yasmeenattallah/house-hunting-app"
          component="a"
          target="_blank"
          className={classes.linkImg}
        >
          <img src={houseHunting} alt="HouseHunting" className={classes.img} />
        </Link>
        <Link
          href="https://github.com/yasmeenattallah/beauty-salon"
          target="_blank"
          className={classes.linkImg}
        >
          <img src={beautySalon} alt="BeautySalon" className={classes.img} />
        </Link>
      </div>
    </div>
  );
};
export default PortfolioPage;
