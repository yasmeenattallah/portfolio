import React, { useState } from 'react';

import emailjs from 'emailjs-com';

import Typography from '@material-ui/core/Typography';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

import useStyles from './style';

import validationSchema from '../../utils/contactValidation';

const ContactPage = () => {
  const classes = useStyles();
  const [username, setName] = useState('');
  const [userEmail, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [err, setError] = useState(false);
  const [sendSuccess, setSendSuccess] = useState('');
  const [sendFail, setSendFail] = useState('');
  const [open, setOpen] = useState(false);

  const clear = () => {
    setName('');
    setEmail('');
    setMessage('');
    setError(null);
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  const handelChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'username':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'message':
        setMessage(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const templateParams = {
        username,
        userEmail,
        message,
      };
      await validationSchema.validate(templateParams, {
        abortEarly: false,
      });
      clear();
      emailjs
        .send(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          templateParams,
          process.env.REACT_APP_USER_ID
        )
        .then(
          (result) => {
            setSendSuccess(
              `  Message Sent, We will get back to you shortly,${result.text}`
            );
            setOpen(true);
          },
          (error) => {
            setSendFail(` An error occurred, Please try again,${error.text}`);
            setOpen(true);
          }
        );
    } catch (er) {
      setError(er.response ? er.response.data.message : er.errors[0]);
    }
  };
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography className={classes.title}>Contact Me</Typography>
        <MailOutlineIcon className={classes.icon} />
      </div>
      <Typography className={classes.subTitle}>LET&apos;S TALK</Typography>
      <div className={classes.body}>
        <TextField
          variant="outlined"
          label="Name"
          name="username"
          value={username}
          onChange={handelChange}
          className={classes.input}
        />
        <TextField
          variant="outlined"
          label="Email"
          className={classes.input}
          type="email"
          value={userEmail}
          name="email"
          onChange={handelChange}
        />
        <TextField
          placeholder="How can i help you "
          variant="outlined"
          className={classes.input}
          multiline
          rows={4}
          name="message"
          value={message}
          onChange={handelChange}
        />
        {err && (
          <Alert severity="error" className={classes.alert}>
            {err}
          </Alert>
        )}
        {sendSuccess && (
          <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              {sendSuccess}
            </Alert>
          </Snackbar>
        )}
        {sendFail && (
          <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
            <Alert severity="error" className={classes.alert}>
              {sendFail}
            </Alert>
          </Snackbar>
        )}
        <Button
          variant="outlined"
          color="primary"
          className={classes.btn}
          onClick={handleSubmit}
        >
          Send Message
        </Button>
      </div>
    </div>
  );
};
export default ContactPage;
