import React, { useState } from 'react';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';

import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Link from '@material-ui/core/Link';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import CardTravelOutlinedIcon from '@material-ui/icons/CardTravelOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';

import yasmeen from '../../images/yasmeen.png';
import {
  Home,
  ContactPage,
  AboutMe,
  PortfolioPage,
  ResumePage,
} from '../../pages';

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
const a11yProps = (index) => ({
  id: `vertical-tab-${index}`,
  'aria-controls': `vertical-tabpanel-${index}`,
});

const PersistentDrawerLeft = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <div className={classes.mobileRoot}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <AppBar position="static">
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
                src={yasmeen}
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
              icon={<HomeOutlinedIcon />}
            />
            <LinkTab
              label="ABOUT ME"
              href="/about"
              icon={<PersonOutlineOutlinedIcon />}
              {...a11yProps(2)}
            />
            <LinkTab
              label="RESUME"
              href="/resume"
              icon={<ListAltOutlinedIcon />}
              {...a11yProps(3)}
            />
            <LinkTab
              label="PORTFOLIO"
              href="/portfolio"
              icon={<CardTravelOutlinedIcon />}
              {...a11yProps(4)}
            />
            <LinkTab
              label="CONTACT"
              href="/contact"
              icon={<EmailOutlinedIcon />}
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
      </Drawer>
      <div
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <TabPanel value={value} index={0}>
          <Home />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Home />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <AboutMe />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <ResumePage />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <PortfolioPage />
        </TabPanel>
        <TabPanel value={value} index={5}>
          <ContactPage />
        </TabPanel>
      </div>
    </div>
  );
};
export default PersistentDrawerLeft;
