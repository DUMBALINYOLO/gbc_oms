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
  const {message, subject} = props.data;

  return (
    <>
      <Paper className={classes.pageContent}>
        <h2>
          Subject: {subject}
        </h2>
        <h2>
          Message: {message}
        </h2>
      </Paper>
    </>
  );
};


export default ClassProfile;

