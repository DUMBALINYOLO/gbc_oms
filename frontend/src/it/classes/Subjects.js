import React, { useEffect, useState } from "react"
import { getSubjects, addSubject,  editSubject} from '../../actions/classes';
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
import AddSubject from './AddSubject';
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
  { id: 'subject', label: 'NAME' },
  { id: 'subject_teacher', label: 'SUBJECT TEACHER' },
  { id: 'status', label: 'STATUS' },
  { id: 'actions', label: 'Actions', disableSorting: true }
]


const options = {
  filterType: "checkbox"
};

const Subjects = props => {
  const { history } = props;
  const classes = useStyles();
  const [recordForEdit, setRecordForEdit] = useState(null)
  const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
  const [openPopup, setOpenPopup] = useState(false)
  const [newsubject, setNewSubject] = useState({})
  const [query, setQuery] = useState('')
  const {id} =props.data;
  const {token} = props;

  useEffect(() => {
    if(!props.fetched) {
        props.getSubjects(id,query, token);
    }
    console.log('mount it!');

  }, [newsubject]);


  const addOrEdit = (fee, resetForm, token) => {
      if (fee.id > 0){
        props.editSubject(fee.id, fee, token)
        setNewSubject(fee)
        props.getSubjects(id,query, token);
      }else{
        props.addSubject(fee, token)
        setNewSubject(fee)
        props.getSubjects(id,query, token);
      }
      resetForm()
      setRecordForEdit(null)
      setOpenPopup(false)
  }

  const {records} = props;

  const handleQuery = e => {
    let target = e.target;
    setQuery(target.value);
    props.getSubjects(query, token)

  }

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
                label="Search Subject"
                value={query}
                className={classes.searchInput}
                InputProps={{
                    startAdornment: (<InputAdornment position="start">
                        <Search />
                    </InputAdornment>)
                }}
                onChange={handleQuery}
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
                            <TableCell>{item.subject}</TableCell>
                            <TableCell>{item.subject_teacher}</TableCell>
                            <TableCell>{item.status}</TableCell>
                            <TableCell>
                                <Controls.ActionButton
                                    color="primary"
                                    onClick={() => { openInPopup(item) }}>
                                    <EditOutlinedIcon fontSize="small" />
                                    EDIT
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
      <Popup
      title="Class Form"
      openPopup={openPopup}
      setOpenPopup={setOpenPopup}
      >
        <AddSubject
            recordForEdit={recordForEdit}
            addOrEdit={addOrEdit}
        />
      </Popup>

    </>
  );
};

const mapStateToProps = state =>({
    records: state.classes.subjects,
    token: state.auth.token,
})

export default connect(
  mapStateToProps,
  {getSubjects, addSubject,  editSubject} )
  (Subjects);
