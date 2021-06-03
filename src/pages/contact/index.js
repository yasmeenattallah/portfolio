import React from 'react';

import Typography from '@material-ui/core/Typography';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import useStyles from './style';

const ContactPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography className={classes.title}>
          Contact Me
          <MailOutlineIcon className={classes.icon} />
        </Typography>
      </div>
      <div className={classes.body}>
        <Typography className={classes.subTitle}>LET&apos;S TALK</Typography>
        <TextField variant="outlined" label="Name" />
        <TextField variant="outlined" label="Email" />
        <TextField
          placeholder="How can i help you "
          variant="outlined"
          multiline
        />
        <Button variant="outlined" color="primary">
          Send Message
        </Button>
      </div>
    </div>
  );
};
export default ContactPage;
