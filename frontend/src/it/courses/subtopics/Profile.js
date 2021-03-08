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



  return (
    <>
      <Paper className={classes.pageContent}>
        <h2>
          THIS IS A SUBTOPIC WHICH BELONGS TO A COURSE. A SUBTOPIC HAS GOT STUDY CONTENT ATTACHED TO
          IT, MAY YOU PROCEED TO VIEW STUDY CONTENTS ASSOCIATED WITH THIS SUBTOPIC
        </h2>
      </Paper>
    </>
  );
};


export default ClassProfile;
