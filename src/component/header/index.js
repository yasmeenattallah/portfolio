import React, { useState } from 'react';

import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import useStyles from './style';

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
      <AppBar position="static">
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="vertical tabs "
          className={classes.tabs}
        >
          <LinkTab label="HOME" href="/home" {...a11yProps(0)} />
          <LinkTab label="ABOUT ME" href="/about" {...a11yProps(1)} />
          <LinkTab label="RESUME" href="/resume" {...a11yProps(2)} />
          <LinkTab label="PORTFOLIO" href="/portfolio" {...a11yProps(3)} />
          <LinkTab label="CONTACT" href="/contact" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        Home
      </TabPanel>
      <TabPanel value={value} index={1}>
        ABOUT ME
      </TabPanel>
      <TabPanel value={value} index={2}>
        RESUME
      </TabPanel>
      <TabPanel value={value} index={3}>
        PORTFOLIO
      </TabPanel>
      <TabPanel value={value} index={4}>
        CONTACT
      </TabPanel>
    </div>
  );
};
export default Header;
