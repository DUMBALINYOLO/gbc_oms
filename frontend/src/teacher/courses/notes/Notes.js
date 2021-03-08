import React, { useEffect, useState } from "react"
import { getStudyNotes, addStudyNote, editStudyNote } from '../../../actions/courses';
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
import AddNote from './AddNote';
import  Controls  from "../../../components/formcontrols/Controls";
import  Popup  from "../../../components/formcontrols/Popup";
import  useTable  from "../../../components/table/useTable";
import { useHistory } from 'react-router-dom';
import BorderColorIcon from '@material-ui/icons/BorderColor';



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
  { id: 'title', label: 'TITLE' },
  { id: 'status', label: 'STATUS' },
  { id: 'approval_status', label: 'APPROVAL STATUS' },
  { id: 'actions', label: 'Actions', disableSorting: true }
]


const options = {
  filterType: "checkbox"
};

const Notes = props => {
  const history = useHistory();
  const classes = useStyles();
  const [recordForEdit, setRecordForEdit] = useState(null)
  const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
  const [openPopup, setOpenPopup] = useState(false)
  const [newcourse, setNewCourse] = useState({})
  const {id} =props.data;
  const {token} = props;

  useEffect(() => {
    if(!props.fetched) {
        props.getStudyNotes(id, token);
    }
    console.log('mount it!');


  }, [newcourse]);


  const addOrEdit = (fee, resetForm, token) => {
      if (fee.id > 0){
        props.editStudyNote(fee.id, fee, token)
        setNewCourse(fee)
      }
      else{
        props.addStudyNote(fee, token)
        setNewCourse(fee)
        props.getStudyNotes(id, token);
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

  const handleClick = id =>{
    history.push(`/teacherdashboard/notes/${id}`)
  }

  return (
    <>
      <Paper className={classes.pageContent}>

      <Toolbar>
          <Controls.Input
              label="Search Notes"
              className={classes.searchInput}
              InputProps={{
                  startAdornment: (<InputAdornment position="start">
                      <Search />
                  </InputAdornment>)
              }}
          />
          <Controls.Button
              text="Add New"
              variant="outlined"
              startIcon={<AddIcon />}
              className={classes.newButton}
              onClick={() => { setOpenPopup(true); setRecordForEdit(null); }}
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
                          <TableCell>{item.status}</TableCell>
                          <TableCell>{item.approval_status}</TableCell>
                          <TableCell>
                            <Controls.ActionButton
                                color="primary"
                                onClick={() => { openInPopup(item) }}>
                                <EditOutlinedIcon fontSize="small" />
                                EDIT
                            </Controls.ActionButton>
                            <Controls.ActionButton
                                color="secondary"
                                onClick={() => { handleClick(item.id) }}
                              >
                                <BorderColorIcon fontSize="small" />
                                OPEN
                            </Controls.ActionButton>
                          </TableCell>
                      </TableRow>)
                  )
              }
          </TableBody>
      </TblContainer>
      <TblPagination />
      </Paper>
      <Popup
      title="Notes Form"
      openPopup={openPopup}
      setOpenPopup={setOpenPopup}
      >
        <AddNote
            recordForEdit={recordForEdit}
            addOrEdit={addOrEdit}
            id={id}
        />
      </Popup>
    </>
  );
};

const mapStateToProps = state =>({
    records: state.courses.adminstudynotes,
    token: state.auth.token,
})

export default connect(
  mapStateToProps,
  {getStudyNotes, addStudyNote, editStudyNote} )
  (Notes);
