import React from 'react';

import Typography from '@material-ui/core/Typography';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import useStyles from './style';

const AboutMe = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography className={classes.title}>
          About Me
          <PersonOutlineOutlinedIcon className={classes.icon} />
        </Typography>
      </div>
    </div>
  );
};
export default AboutMe;
