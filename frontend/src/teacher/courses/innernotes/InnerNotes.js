import React, { useEffect, useState } from "react"
import { getStudyNoteNotes, addStudyNoteNote, editStudyNoteNote} from '../../../actions/courses';
import { withStyles } from '@material-ui/core/styles'
import CustomizedExpansionPanels from './CustomExpansion';
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
  { id: 'created', label: 'DATE' },
  { id: 'actions', label: 'Actions', disableSorting: true }
]


const options = {
  filterType: "checkbox"
};

const InnerNotes = props => {
  const { history } = props;
  const classes = useStyles();
  const [recordForEdit, setRecordForEdit] = useState(null)
  const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
  const [openPopup, setOpenPopup] = useState(false)
  const {id} =props.data;
  const [newcourse, setNewCourse] = useState({})
  const [query, setQuery] = useState('')
  const {token} = props;
  const [expanded, setExpanded] = useState('panel_0')

  useEffect(() => {
    if(!props.fetched) {
        props.getStudyNoteNotes(id, token);
    }
    console.log('mount it!');


  }, [newcourse]);


  const addOrEdit = (fee, resetForm, token) => {
      if (fee.id > 0){
        props.editStudyNoteNote(fee.id, fee, token)
        setNewCourse(fee)
      }
      else{
        props.addStudyNoteNote(fee, token)
        setNewCourse(fee)
        props.getStudyNoteNotes(id, token);
      }
      resetForm()
      setRecordForEdit(null)
      setOpenPopup(false)
  }

  const handleQuery = e => {
    let target = e.target;
    setQuery(target.value);
    props.getStudyNoteNotes(query, token)
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
              label="Search InnerNotes"
              value={query}
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
        <div>
            {records.map((note, i) => CustomizedExpansionPanels(note, i, expanded, setExpanded))}
        </div>
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
    records: state.courses.adminstudynotesnotes,
    token: state.auth.token,
})

export default connect(
  mapStateToProps,
  {getStudyNoteNotes, addStudyNoteNote, editStudyNoteNote} )
  (InnerNotes);
