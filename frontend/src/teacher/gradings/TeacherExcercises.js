import React, { useEffect, useState } from "react"
import TeacherLayout from "../layout/TeacherLayout";
import { getAdminStudentExcercises, addGrade, editGrade } from '../../actions/gradings';
import { connect } from 'react-redux';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CloseIcon from '@material-ui/icons/Close';
import { useHistory } from 'react-router-dom';
import BorderColorIcon from '@material-ui/icons/BorderColor';
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
import AddGrade from './AddGrade';
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
  { id: 'name', label: 'NAME' },
  { id: 'total_marks', label: 'MARKS' },
  { id: 'type', label: 'TYPE' },
  { id: 'klass', label: 'CLASS' },
  { id: 'actions', label: 'Actions', disableSorting: true }
]

const options = {
  filterType: "checkbox"
};

const TeacherStudentExcercises = props => {
    const history = useHistory();
    const classes = useStyles();
    const [recordForEdit, setRecordForEdit] = useState(null)
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
    const [openPopup, setOpenPopup] = useState(false)
    const [newgrading, setNewGrading] = useState({})
    const [query, setQuery] = useState('')
    const {token} = props;

  useEffect(() => {
    if(!props.fetched) {
        props.getAdminStudentExcercises(query, token);
    }
    console.log('mount it!');


  }, [newgrading]);


  const addOrEdit = (fee, resetForm, token) => {
      if (fee.id > 0){
        props.editGrade(fee.id, fee, token)
        setNewGrading(fee)
      }
      else{
        props.addGrade(fee, token)
        setNewGrading(fee)
        props.getAdminStudentExcercises(query, token);
      }
      resetForm()
      setRecordForEdit(null)
      setOpenPopup(false)
  }

  const handleQuery = e => {
    let target = e.target;
    setQuery(target.value);
    props.getAdminStudentExcercises(query, token)
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
    history.push(`/teacherdashboard/excercises/${id}`)
  }

  return (
    <TeacherLayout>
      <Paper className={classes.pageContent}>

      <Toolbar>
          <Controls.Input
              label="Search Excercise"
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
                          <TableCell>{item.name}</TableCell>
                          <TableCell>{item.total_marks}</TableCell>
                          <TableCell>{item.type}</TableCell>
                          <TableCell>{item.klass}</TableCell>
                          <TableCell>
                              <Controls.ActionButton
                                  color="primary"
                                  onClick={() => { openInPopup(item) }}>
                                  <EditOutlinedIcon fontSize="small" />
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
      title="Excercise Form"
      openPopup={openPopup}
      setOpenPopup={setOpenPopup}
      >
        <AddGrade
            recordForEdit={recordForEdit}
            addOrEdit={addOrEdit}
        />
      </Popup>
    </TeacherLayout>
  );
};

const mapStateToProps = state =>({
    records: state.gradings.adminstudentexcercises,
    token: state.auth.token,
})

export default connect(
  mapStateToProps,
  {getAdminStudentExcercises, addGrade, editGrade} )
  (TeacherStudentExcercises);
