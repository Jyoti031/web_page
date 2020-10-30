import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import NestedGrid from "./NestedGrid";
import DashboardIcon from '@material-ui/icons/Dashboard';
import LocalAtmIcon from '@material-ui/icons/LocalAtm'; 
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import MailIcon from '@material-ui/icons/Mail';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';

function TabPanel(props) {
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
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 545
  }
}));

export default function SidePanel() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        style={{backgroundColor: "blue", width: 120}}
        
      >
        <Tab icon={<DashboardIcon />} style={{right: 30}} aria-label="phone" {...a11yProps(0)} />
        <Tab icon={<LocalAtmIcon />} style={{right: 30}} aria-label="person" {...a11yProps(2)} />
        <Tab icon={<HelpIcon />} style={{right: 30}} aria-label="help" {...a11yProps(3)} />
        <Tab icon={<ShoppingBasket />} style={{right: 30}} aria-label="shopping" {...a11yProps(4)} />
        <Tab icon={<MailIcon />} style={{right: 30}} aria-label="down" {...a11yProps(6)} />
        <Tab icon={<LibraryBooksIcon />} style={{right: 30}} aria-label="up" {...a11yProps(5)} />
        <Tab icon={<SettingsApplicationsIcon />} style={{right: 30}} aria-label="down" {...a11yProps(6)} />
      </Tabs>
      <NestedGrid />
    </div>
  );
}
