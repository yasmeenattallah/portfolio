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
        <Typography className={classes.title}>Contact Me</Typography>
        <MailOutlineIcon className={classes.icon} />
      </div>
      <Typography className={classes.subTitle}>LET&apos;S TALK</Typography>
      <div className={classes.body}>
        <TextField variant="outlined" label="Name" className={classes.input} />
        <TextField variant="outlined" label="Email" className={classes.input} />
        <TextField
          placeholder="How can i help you "
          variant="outlined"
          className={classes.input}
          multiline
          rows={4}
        />
        <Button variant="outlined" color="primary" className={classes.btn}>
          Send Message
        </Button>
      </div>
    </div>
  );
};
export default ContactPage;
