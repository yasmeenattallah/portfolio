import React from 'react';

import Typography from '@material-ui/core/Typography';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import useStyles from './style';

const AboutMe = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography className={classes.title}>About Me .</Typography>
        <PersonOutlineOutlinedIcon className={classes.icon} />
      </div>
      <div className={classes.body}>
        <Typography className={classes.sectionOne}>
          Front-End developer
        </Typography>
        <Typography className={classes.SectionTwo}>
          Personal Information <br />
          <span> Name : </span> yasmeen attallah <br />
          <span> Age : </span> 24 <br />
          <span> Residence : </span> Palestine, Gaza <br />
          <span> Email : </span> yattallah7@gmail.com <br />
          <span> Phone : </span> 00970598077473 <br />
          <span> Freelancer : </span> Available <br />
        </Typography>
      </div>
    </div>
  );
};
export default AboutMe;
