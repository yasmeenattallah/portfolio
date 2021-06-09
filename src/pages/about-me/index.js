import React from 'react';

import Typography from '@material-ui/core/Typography';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import ComputerIcon from '@material-ui/icons/Computer';
import DevicesIcon from '@material-ui/icons/Devices';
import VisibilityIcon from '@material-ui/icons/Visibility';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

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
      <Typography className={classes.sectionThree}>
        <span className={classes.servicesTitle}> SERVICES</span>
        <List className={classes.list}>
          <ListItem className={classes.listItem}>
            <ListItemIcon>
              <ComputerIcon className={classes.serviceIcon} />
            </ListItemIcon>
            <ListItemText className={classes.serviceText}>
              Web Development
            </ListItemText>
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemIcon>
              <VisibilityIcon className={classes.serviceIcon} />
            </ListItemIcon>
            <ListItemText className={classes.serviceText}>
              Web Design
            </ListItemText>
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemIcon>
              <DevicesIcon className={classes.serviceIcon} />
            </ListItemIcon>
            <ListItemText className={classes.serviceText}>
              Responsive Design
            </ListItemText>
          </ListItem>
        </List>
      </Typography>
    </div>
  );
};
export default AboutMe;
