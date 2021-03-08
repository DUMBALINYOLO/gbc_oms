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
        <h4>MAX POPULATION: {max_population}</h4>
        <h4>POPULATION: {population}</h4>
        <h4>CLASS TEACHER: {class_teacher}</h4>
        <h5>YEAR: {year}</h5>
        <h5>CREATION DATE: {creation_date}</h5>
      </Paper>
    </>
  );
};


export default ClassProfile;
