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
  const {max_population, population, class_teacher, year, creation_date} = props.data;

  return (
    <>
      <Paper className={classes.pageContent}>
        <h1>{max_population}</h1>
        <h1>{population}</h1>
        <h1>{class_teacher}</h1>
        <h1>{year}</h1>
        <h1>{creation_date}</h1>
      </Paper>
    </>
  );
};


export default ClassProfile;
