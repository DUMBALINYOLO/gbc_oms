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
  const {content_overview, assessment_overview} = props.data;


  return (
    <>
      <Paper className={classes.pageContent}>
        <h5>CONTENT OVERVIEW: {content_overview}</h5>
        <h5>ASSESMENT OVERVIEW: {assessment_overview}</h5>
      </Paper>
    </>
  );
};


export default ClassProfile;
