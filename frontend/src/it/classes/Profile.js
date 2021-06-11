import React, { useEffect, useState } from "react"
import classNames from 'classnames';
import styles from './profile-jss';
import { withStyles } from '@material-ui/core/styles';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import {
  Paper,
  makeStyles,
  TableBody,
  TableRow,
  TableCell,
  Toolbar,
  InputAdornment }
from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Event from '@material-ui/icons/Event';
import Person from '@material-ui/icons/Person';
import People from '@material-ui/icons/People';
import PeopleOutline from '@material-ui/icons/PeopleOutline';
import DateRange from '@material-ui/icons/DateRange';

const useStyles = makeStyles(theme => ({
  pageContent: {
      margin: theme.spacing(5),
      padding: theme.spacing(3)
  },
  searchInput: {
      width: '75%'
  },
  newButton: {
      position: 'absolute',
      right: '10px'
  }
}))


const options = {
  filterType: "checkbox"
};

const ClassProfile = props => {
  const classes = useStyles();
  const {max_population, population, class_teacher, year, creation_date} = props.data;

  return (
    <main className={classNames(classes.content)}>
      <div>
        <List>
          <ListItem>
            <ListItemAvatar>
                <Avatar className={classes.blueIcon}>
                  <People />
                </Avatar>
              </ListItemAvatar>
            <ListItemText primary={max_population} secondary="POPULATION"/>
          </ListItem>
          <Divider variant="inset" />
          <ListItem>
            <ListItemAvatar>
                <Avatar className={classes.blueIcon}>
                  <PeopleOutline />
                </Avatar>
              </ListItemAvatar>
            <ListItemText primary={population} secondary="POPULATION" />
          </ListItem>
          <Divider variant="inset" />
          <ListItem>
            <ListItemAvatar>
                <Avatar className={classes.blueIcon}>
                  <Person />
                </Avatar>
              </ListItemAvatar>
            <ListItemText primary={class_teacher} secondary="CLASS TEACHER" />
          </ListItem>
          <Divider variant="inset" />
          <ListItem>
            <ListItemAvatar>
                <Avatar className={classes.blueIcon}>
                  <DateRange />
                </Avatar>
              </ListItemAvatar>
            <ListItemText primary={creation_date} secondary="CREATION DATE"/>
          </ListItem>
          <Divider variant="inset" />
          <ListItem>
            <ListItemAvatar>
                <Avatar className={classes.blueIcon}>
                  <Event />
                </Avatar>
              </ListItemAvatar>
            <ListItemText primary={year} secondary="YEAR"/>
          </ListItem>
        </List>
      </div>
    </main>
  );
};


export default withStyles(styles)(ClassProfile);
