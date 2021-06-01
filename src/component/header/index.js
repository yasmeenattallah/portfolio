import React, { useState } from 'react';

import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

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
          <LinkTab label="HOME" href="/home" {...a11yProps(1)} />
          <LinkTab label="ABOUT ME" href="/about" {...a11yProps(2)} />
          <LinkTab label="RESUME" href="/resume" {...a11yProps(3)} />
          <LinkTab label="PORTFOLIO" href="/portfolio" {...a11yProps(4)} />
          <LinkTab label="CONTACT" href="/contact" {...a11yProps(5)} />
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
