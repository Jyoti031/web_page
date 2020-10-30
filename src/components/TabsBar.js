import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import MenuButton from './MenuButton';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    left: 100
  },
  div: {
    width: 92
  },
  div2: {
    width: 800
  }
});

export default function TabsBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        // centered
      >
        <div className={classes.div} />
        <Tab label="Fabric (928)" />
        <Tab label="Trims (540)" />
        <div className={classes.div2} />
        <MenuButton />
      </Tabs>
    </Paper>
  );
}
