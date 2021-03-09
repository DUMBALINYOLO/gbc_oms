import React, { useEffect, useState } from "react"
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
    <>
      <Paper className={classes.pageContent}>
        <List>
          <ListItem>
            <h4>STATUS:</h4>
            <Divider variant="inset" />
            <ListItemText primary={status} />
          </ListItem>
          <ListItem>
            <h4>SHORT NAME:</h4>
            <Divider variant="inset" />
            <ListItemText primary={short_name} />
          </ListItem>
          <ListItem>
            <h4>END DATE:</h4>
            <Divider variant="inset" />
            <ListItemText primary={end_date} />
          </ListItem>
          <ListItem>
            <h4>COURSE NUMBER:</h4>
            <Divider variant="inset" />
            <ListItemText primary={course_number} />
          </ListItem>
          <h5>DESCRIPTION: {description}</h5>
        </List>
      </Paper>
    </>
  );
};


export default ClassProfile;
