import React, { useState } from 'react';

import Typography from '@material-ui/core/Typography';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import emailjs from 'emailjs-com';
import useStyles from './style';

const ContactPage = () => {
  const classes = useStyles();
  const [username, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
      name: 'James',
      notes: 'Check this out!',
    };
    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          <Alert severity="success">
            Message Sent, We will get back to you shortly,{result.text}
          </Alert>;
        },
        (error) => {
          <Alert severity="error">
            An error occurred, Please try again,{error.text}
          </Alert>;
        }
      );
  };
  return (
    <div className={classes.root}>
      {console.log(username, 1, email, 2, message, 3)}
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
          value={email}
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
