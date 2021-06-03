import React from 'react';

import Typography from '@material-ui/core/Typography';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

import useStyles from './style';

const ContactPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography className={classes.title}> Contact Me</Typography>
        <MailOutlineIcon className={classes.icon} />
      </div>
    </div>
  );
};
export default ContactPage;
