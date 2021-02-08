import React, { useEffect, useState } from "react"
import { getStudents } from '../../actions/classes';
import { connect } from 'react-redux';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CloseIcon from '@material-ui/icons/Close';
import { Search } from "@material-ui/icons";
import AddIcon from '@material-ui/icons/Add';
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
  { id: 'stdnt', label: 'STUDENT' },
  { id: 'status', label: 'ENROLMENT STATUS' },
  { id: 'enrollment_date', label: 'ENROLMENT DATE' },
  { id: 'actions', label: 'Actions', disableSorting: true }
]




const options = {
  filterType: "checkbox"
};

const Students = props => {
  const { history } = props;
  const classes = useStyles();
  const [recordForEdit, setRecordForEdit] = useState(null)
  const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
  const [openPopup, setOpenPopup] = useState(false)
  const {id} =props.data;
  const {token} = props;

  useEffect(() => {
    if(!props.fetched) {
        props.getStudents(id, token);
    }
    console.log('mount it!');


  }, []);


  const {records} = props;

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

  const openInPopup = item => {
      setRecordForEdit(item)
      setOpenPopup(true)
  }

  return (
    <>
      <Paper className={classes.pageContent}>

      <Toolbar>
          <Controls.Input
              label="Search Objective"
              className={classes.searchInput}
              InputProps={{
                  startAdornment: (<InputAdornment position="start">
                      <Search />
                  </InputAdornment>)
              }}
          />
      </Toolbar>
      <TblContainer>
          <TblHead />
          <TableBody>
              {
                  recordsAfterPagingAndSorting().map(item =>
                      (<TableRow key={item.id}>
                          <TableCell>{item.id}</TableCell>
                          <TableCell>{item.stdnt}</TableCell>
                          <TableCell>{item.status}</TableCell>
                          <TableCell>{item.enrollment_date}</TableCell>
                          <TableCell>
                              <Controls.ActionButton
                                  color="primary"
                              >
                                  <EditOutlinedIcon fontSize="small" />
                              </Controls.ActionButton>
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
    </>
  );
};

const mapStateToProps = state =>({
    records: state.classes.students,
    token: state.auth.token,
})

export default connect(
  mapStateToProps,
  {getStudents} )
  (Students);
