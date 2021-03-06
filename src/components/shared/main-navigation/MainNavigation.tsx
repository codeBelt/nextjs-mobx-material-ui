import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import InfoIcon from '@material-ui/icons/Info';
import List from '@material-ui/core/List';
import Link from 'next/link';

interface IProps {}

export const MainNavigation: React.FC<IProps> = (props) => {
  return (
    <List>
      <Link href="/" passHref>
        <ListItem button component="a">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
      </Link>
      <Link href="/dashboard" passHref>
        <ListItem button component="a">
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
      </Link>
      <Link href="/about" passHref>
        <ListItem button component="a">
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
      </Link>
    </List>
  );
};
