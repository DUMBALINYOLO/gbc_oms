import React, { useEffect, useState } from "react"
import { getStudyNoteReferences, addStudyNoteReference, editStudyNoteReference } from '../../../actions/courses';
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
import AddReferences from './AddReference';
import  Controls  from "../../../components/formcontrols/Controls";
import  Popup  from "../../../components/formcontrols/Popup";
import  useTable  from "../../../components/table/useTable";



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
  { id: 'title', label: 'NAME' },
  { id: 'author', label: 'AUTHOR' },
  { id: 'publisher', label: 'PUBLISHER' },
  { id: 'date_published', label: 'PUBLICATION DATE' },
  { id: 'actions', label: 'Actions', disableSorting: true }
]


const options = {
  filterType: "checkbox"
};

const References = props => {
  const { history } = props;
  const classes = useStyles();
  const [recordForEdit, setRecordForEdit] = useState(null)
  const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
  const [openPopup, setOpenPopup] = useState(false)
  const {id} =props.data;
  const [newstudent, setNewStudent] = useState({})
  const {token} = props;

  useEffect(() => {
    if(!props.fetched) {
        props.getStudyNoteReferences(id, token);
    }
    console.log('mount it!');


  }, [newstudent]);


  const addOrEdit = (fee, resetForm, token) => {
      if (fee.id > 0){
        props.editStudyNoteReference(fee.id, fee, token)
        setNewStudent(fee)
      }
      else{
        props.addStudyNoteReference(fee, token)
        setNewStudent(fee)
        props.getStudyNoteReferences(id, token);
      }
      resetForm()
      setRecordForEdit(null)
      setOpenPopup(false)
  }



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
              label="Search Reference"
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
                          <TableCell>{item.title}</TableCell>
                          <TableCell>{item.author}</TableCell>
                          <TableCell>{item.publisher}</TableCell>
                          <TableCell>{item.date_published}</TableCell>
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
    </>
  );
};

const mapStateToProps = state =>({
    records: state.courses.adminstudynotesreferences,
    token: state.auth.token,
})

export default connect(
  mapStateToProps,
  {getStudyNoteReferences, addStudyNoteReference, editStudyNoteReference} )
  (References);
