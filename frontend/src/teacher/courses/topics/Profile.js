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
  const {content_overview, assessment_overview} = props.data;


  return (
    <>
      <Paper className={classes.pageContent}>
        <List>
          <ListItem>
            <h5>CONTENT OVERVIEW:</h5>
            <Divider variant="inset" />
            <ListItemText primary={content_overview} />
          </ListItem>
          <ListItem>
            <h5>ASSESSMENT OVERVIEW:</h5>
            <Divider variant="inset" />
            <ListItemText primary={assessment_overview} />
          </ListItem>
        </List>
      </Paper>
    </>
  );
};


export default ClassProfile;
