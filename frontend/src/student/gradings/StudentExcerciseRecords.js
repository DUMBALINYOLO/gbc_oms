import React, { useEffect, useState } from "react"
import {  getStudentExcercises } from '../../actions/gradings';
import { connect } from 'react-redux';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CloseIcon from '@material-ui/icons/Close';
import { Search } from "@material-ui/icons";
import AddIcon from '@material-ui/icons/Add';
import axios from 'axios';
import {
  Paper,
  makeStyles,
  TableBody,
  TableRow,
  TableCell,
  Toolbar,
  InputAdornment }
from '@material-ui/core';
import  Controls  from "../../components/formcontrols/Controls";
import  Popup  from "../../components/formcontrols/Popup";
import  useTable  from "../../components/table/useTable";
import StudentLayout from '../layout/StudentLayout';



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


const headCells = [
  { id: 'id', label: 'ID' },
  { id: 'name', label: 'NAME' },
  { id: 'subject', label: 'SUBJECT' },
  { id: 'totalmarks', label: 'TOTAL' },
  { id: 'score', label: 'MY SCORE' },
  { id: 'actions', label: 'Actions', disableSorting: true }
]



const options = {
  filterType: "checkbox"
};

const StudentExcerciseRecords = props => {
    const classes = useStyles();
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
    const {token, email} = props;
    const [query, setQuery] = useState('')


  useEffect(() => {
    if(!props.fetched) {
        props.getStudentExcercises(email,query, token);
    }
    console.log('mount it!');

  }, []);

  const handleQuery = e => {
    let target = e.target;
    setQuery(target.value);
    props.getStudentExcercises(query, token)
  }

  const{records} = props;
  const {
      TblContainer,
      TblHead,
      TblPagination,
      recordsAfterPagingAndSorting
  } = useTable(records, headCells, filterFn);

  const handleSearch = e => {
      let target = e.target;
      setFilterFn({
          fn: items => {
              if (target.value === "")
                  return items;
              else
                  return items.filter(x => x.name.toLowerCase().includes(target.value))
          }
      })
  }



  return (
    <StudentLayout>
      <Paper className={classes.pageContent}>

      <Toolbar>
          <Controls.Input
              label="Search Excercise Record"
              value={query}
              className={classes.searchInput}
              InputProps={{
                  startAdornment: (<InputAdornment position="start">
                      <Search />
                  </InputAdornment>)
              }}
              onChange={handleQuery}
          />
      </Toolbar>
      <TblContainer>
          <TblHead />
          <TableBody>
              {
                  recordsAfterPagingAndSorting().map(item =>
                      (<TableRow key={item.id}>
                          <TableCell>{item.id}</TableCell>
                          <TableCell>{item.name}</TableCell>
                          <TableCell>{item.subject}</TableCell>
                          <TableCell>{item.totalmarks}</TableCell>
                          <TableCell>{item.score}</TableCell>
                          <TableCell>
                              <Controls.ActionButton
                                  color="secondary">
                                  <CloseIcon fontSize="small" />
                              </Controls.ActionButton>
                          </TableCell>
                      </TableRow>)
                  )
              }
          </TableBody>
      </TblContainer>
      <TblPagination />
      </Paper>
    </StudentLayout>
  );
};

const mapStateToProps = state =>({
    token: state.auth.token,
    email: state.auth.email,
    records: state.gradings.studentexcercises,
})

export default connect(
  mapStateToProps,
  {getStudentExcercises}
  )
  (StudentExcerciseRecords);
