import React from 'react';

import Typography from '@material-ui/core/Typography';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

import useStyles from './style';

const ResumePage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography className={classes.title}>Resume .</Typography>
        <ListAltOutlinedIcon className={classes.icon} />
      </div>
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
          <span className={classes.bodyTitle}> Eduction</span> <br />
          computer and communication Engineering
        </Typography>
        <Typography className={classes.sectionTwo}>
          <span className={classes.bodyTitle}> Experience </span>
        </Typography>
      </div>
    </div>
  );
};
export default ResumePage;
