import React from 'react';

import Typography from '@material-ui/core/Typography';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
// import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';

import useStyles from './style';
import html from '../../images/html.png';
import css from '../../images/css.png';
import js from '../../images/js.png';
import react from '../../images/react.png';
import git from '../../images/git.png';
import github from '../../images/github.png';
import heroku from '../../images/heroku.png';
import material from '../../images/material.png';
import nodejs from '../../images/nodejs.png';
import postgresql from '../../images/postgresql.png';

const ResumePage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography className={classes.title}>Resume .</Typography>
        <ListAltOutlinedIcon className={classes.icon} />
      </div>
      <span className={classes.bodyTitle}> Eduction</span> <br />
      <div className={classes.body}>
        <Timeline align="right" className={classes.timeline}>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot className={classes.timelineDot} />
              <TimelineConnector className={classes.timelineDot} />
            </TimelineSeparator>
            <TimelineContent className={classes.timelineContent}>
              2015
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot className={classes.timelineDot} />
              <TimelineConnector className={classes.timelineDot} />
            </TimelineSeparator>
            <TimelineContent className={classes.timelineContent}>
              2020
            </TimelineContent>
          </TimelineItem>
        </Timeline>
        <Typography className={classes.sectionOne}>
          Bachelor&apos;s of Computer and Communication Engineering <br />
          <span className={classes.span}>
            Al-azher University, palestine, Gaza
          </span>
          <br /> GPA: 87.23%
        </Typography>
        <Timeline align="right" className={classes.timeline}>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot className={classes.timelineDot} />
              <TimelineConnector className={classes.timelineDot} />
            </TimelineSeparator>
            <TimelineContent className={classes.timelineContent}>
              Oct,2020
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot className={classes.timelineDot} />
              <TimelineConnector className={classes.timelineDot} />
            </TimelineSeparator>
            <TimelineContent className={classes.timelineContent}>
              May,2021
            </TimelineContent>
          </TimelineItem>
        </Timeline>
        <Typography className={classes.sectionTwo}>
          Code Academy Program <br />
          <span className={classes.span}>
            Gaza Sky Geeks Company, palestine, Gaza
          </span>
          <br />
          javascript full-stack developer
        </Typography>
      </div>
      <Typography className={classes.bodyTitle}>
        Skills,Tools and Technologies
      </Typography>
      <div className={classes.skills}>
        <Box className={classes.skillsIcon}>
          <Avatar src={react} alt="react" />
          React
        </Box>
        <Box className={classes.skillsIcon}>
          <Avatar src={js} alt="js" />
          Javascript
        </Box>
        <Box className={classes.skillsIcon}>
          <Avatar src={nodejs} alt="nodejs" />
          NodeJs
        </Box>
        <Box className={classes.skillsIcon}>
          <Avatar src={postgresql} alt="postgresql" />
          Postgresql
        </Box>
        <Box className={classes.skillsIcon}>
          <Avatar src={html} alt="html" />
          Html
        </Box>
        <Box className={classes.skillsIcon}>
          <Avatar src={css} alt="css" />
          Css
        </Box>
        <Box className={classes.skillsIcon}>
          <Avatar src={material} alt="material" />
          Material-UI
        </Box>
        <Box className={classes.skillsIcon}>
          <Avatar src={git} alt="git" />
          Git
        </Box>
        <Box className={classes.skillsIcon}>
          <Avatar src={github} alt="github" />
          GitHub
        </Box>
        <Box className={classes.skillsIcon}>
          <Avatar src={heroku} alt="heroku" />
          Heroku
        </Box>
      </div>
    </div>
  );
};
export default ResumePage;
