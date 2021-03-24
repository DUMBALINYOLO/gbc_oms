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
import DateRange from '@material-ui/icons/DateRange';
import School from '@material-ui/icons/School';


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
  const {date, subject} = props.data;

  return (
    <main className={classNames(classes.content)}>
      <div>
        <List>
          <ListItem>
            <ListItemAvatar>
                <Avatar className={classes.blueIcon}>
                  <School />
                </Avatar>
              </ListItemAvatar>
            <ListItemText primary={subject} secondary="SUBJECT"/>
          </ListItem>
          <Divider variant="inset" />
          <ListItem>
            <ListItemAvatar>
                <Avatar className={classes.blueIcon}>
                  <DateRange />
                </Avatar>
              </ListItemAvatar>
            <ListItemText primary={date} secondary="DATE"/>
          </ListItem>
        </List>
      </div>
    </main>
  );
};


export default ClassProfile;
