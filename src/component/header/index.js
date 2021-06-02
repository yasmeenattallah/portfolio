import React, { useState } from 'react';

import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import CardTravelIcon from '@material-ui/icons/CardTravel';
import NotesIcon from '@material-ui/icons/Notes';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';

import useStyles from './style';
import Home from '../../pages';
import personal from '../../images/personal.jpg';

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};
TabPanel.propTypes = {
  children: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const LinkTab = (props) => (
  <Tab
    component="a"
    onClick={(event) => {
      event.preventDefault();
    }}
    {...props}
  />
);

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}
const Header = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="vertical tabs "
          className={classes.tabs}
        >
          <div {...a11yProps(0)} className={classes.personalContainer}>
            <img
              src={personal}
              alt="personal"
              className={classes.personalImg}
            />
            <Typography className={classes.personalText}>
              YASMEEN ATTALLAH
            </Typography>
          </div>
          <LinkTab
            label="HOME"
            href="/home"
            {...a11yProps(1)}
            icon={<HomeIcon />}
          />
          <LinkTab
            label="ABOUT ME"
            href="/about"
            icon={<PersonIcon />}
            {...a11yProps(2)}
          />
          <LinkTab
            label="RESUME"
            href="/resume"
            icon={<NotesIcon />}
            {...a11yProps(3)}
          />
          <LinkTab
            label="PORTFOLIO"
            href="/portfolio"
            icon={<CardTravelIcon />}
            {...a11yProps(4)}
          />
          <LinkTab
            label="CONTACT"
            href="/contact"
            icon={<EmailIcon />}
            {...a11yProps(5)}
          />
          <div className={classes.footer}>
            <Link href="https://github.com/yasmeenattallah" {...a11yProps(6)}>
              <GitHubIcon />
            </Link>
            <Link
              href="https://www.linkedin.com/in/yasmeen-attallah-51958712b/"
              {...a11yProps(7)}
            >
              <LinkedInIcon />
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=100009599895904"
              {...a11yProps(8)}
            >
              <FacebookIcon />
            </Link>
            <Typography {...a11yProps(9)}>
              2021 &#169; yasmeen Attallah <br /> All Right Reserved.
            </Typography>
          </div>
        </Tabs>
      </AppBar>
      <div>
        <TabPanel value={value} index={1}>
          <Home />
        </TabPanel>
        <TabPanel value={value} index={2}>
          ABOUT ME
        </TabPanel>
        <TabPanel value={value} index={3}>
          RESUME
        </TabPanel>
        <TabPanel value={value} index={4}>
          PORTFOLIO
        </TabPanel>
        <TabPanel value={value} index={5}>
          CONTACT
        </TabPanel>
      </div>
    </div>
  );
};
export default Header;
