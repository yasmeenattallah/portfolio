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
          <span className={classes.bodyTitle}> Front-End developer</span> <br />
          I&apos;m yasmeen attallah front-end web developer from Palestine, Gaza
          <br />
          graduated as a computer and communication engineering with more <br />
          than one year of developing websites, graduated from Code Academy
          <br />
          Bootcamp at Gaza sky geeks company that was for 6 months. then <br />
          have a lot of experience that includes soft skills and technical
          skills in <br /> web development and experience in web design and have
          many web development projects .
          <br />
        </Typography>
        <Typography className={classes.sectionTwo}>
          <span className={classes.bodyTitle}> Personal Information </span>
          <br />
          <span className={classes.info}> Name</span> : yasmeen attallah <br />
          <span className={classes.info}> Age</span> : 24 <br />
          <span className={classes.info}> Residence</span> : Palestine, Gaza
          <br />
          <span className={classes.info}>Email</span> : yattallah7@gmail.com
          <br />
          <span className={classes.info}> Phone</span> : 00970598077473 <br />
          <span className={classes.info}> Freelancer</span> : Available <br />
        </Typography>
      </div>
    </div>
  );
};
export default AboutMe;
