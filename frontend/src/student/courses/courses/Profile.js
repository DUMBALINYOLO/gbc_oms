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
import Assignment from '@material-ui/icons/Assignment';
import AssignmentInd from '@material-ui/icons/AssignmentInd';
import DateRange from '@material-ui/icons/DateRange';
import NextWeek from '@material-ui/icons/NextWeek';

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
  const {status, created, short_name, end_date, course_number, description} = props.data;


  return (
    <main className={classNames(classes.content)}>
      <div>
        <List>
          <ListItem>
            <ListItemAvatar>
                <Avatar className={classes.blueIcon}>
                  <Assignment />
                </Avatar>
              </ListItemAvatar>
            <ListItemText primary={status} secondary="STATUS"/>
          </ListItem>
          <Divider variant="inset" />
          <ListItem>
            <ListItemAvatar>
                <Avatar className={classes.blueIcon}>
                  <AssignmentInd />
                </Avatar>
              </ListItemAvatar>
            <ListItemText primary={short_name} secondary="SHORT NAME" />
          </ListItem>
          <Divider variant="inset" />
          <ListItem>
            <ListItemAvatar>
                <Avatar className={classes.blueIcon}>
                  <DateRange />
                </Avatar>
              </ListItemAvatar>
            <ListItemText primary={end_date} secondary="END DATE"/>
          </ListItem>
          <Divider variant="inset" />
          <ListItem>
            <ListItemAvatar>
                <Avatar className={classes.blueIcon}>
                  <NextWeek />
                </Avatar>
              </ListItemAvatar>
            <ListItemText primary={course_number} secondary="COURSE NUMBER" />
          </ListItem>
          <Divider variant="inset" />
          <Paper>
            DESCRIPTION: {description}
          </Paper>
        </List>
      </div>
    </main>
  );
};


export default withStyles(styles)(ClassProfile);

