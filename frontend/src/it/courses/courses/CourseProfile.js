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
  const {status, created, short_name, end_date, course_number, description} = props.data;








  return (
    <>
      <Paper className={classes.pageContent}>
        <h4>STATUS: {status}</h4>
        <h4>DATE CREATED: {created}</h4>
        <h4>SHORT NAME: {short_name}</h4>
        <h4>END DATE: {end_date}</h4>
        <h4>COURSE NUMBER: {course_number}</h4>
        <h5>DESCRIPTION: {description}</h5>
      </Paper>
    </>
  );
};


export default ClassProfile;
