import React from 'react';

import Typography from '@material-ui/core/Typography';
import CardTravelOutlinedIcon from '@material-ui/icons/CardTravelOutlined';
import Link from '@material-ui/core/Link';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

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
      <GridList>
        <GridListTile className={classes.body}>
          <Link
            href="https://github.com/yasmeenattallah/house-hunting-app"
            component="a"
            target="_blank"
          >
            <img
              src={houseHunting}
              alt="HouseHunting"
              className={classes.img}
            />
          </Link>
          <GridListTileBar title="House Hunting" />
        </GridListTile>
        <GridListTile className={classes.body}>
          <Link
            href="https://github.com/yasmeenattallah/beauty-salon"
            target="_blank"
          >
            <img src={beautySalon} alt="BeautySalon" className={classes.img} />
          </Link>
          <GridListTileBar title="Beauty Salon" />
        </GridListTile>
      </GridList>
    </div>
  );
};
export default PortfolioPage;
