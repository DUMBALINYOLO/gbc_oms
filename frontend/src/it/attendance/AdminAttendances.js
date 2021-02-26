import React, { useEffect, useState } from "react"
import InformationTechnologyLayout from "../layout/InformationTechnologyLayout";
import { getAdminAttendances, editAdminAttendance, addAdminAttendance } from '../../actions/attendances';
import { connect } from 'react-redux';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import { Search } from "@material-ui/icons";
import AddIcon from '@material-ui/icons/Add';
import { useHistory } from 'react-router-dom';
import {
  Paper,
  makeStyles,
  TableBody,
  TableRow,
  TableCell,
  Toolbar,
  InputAdornment }
from '@material-ui/core';
import MarkRegister from './AddAttendance';
import  Controls  from "../../components/formcontrols/Controls";
import  Popup  from "../../components/formcontrols/Popup";
import  useTable  from "../../components/table/useTable";
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
  { id: 'date', label: 'DATE' },
  { id: 'klass', label: 'CLASS' },
  { id: 'recorded_by', label: 'TEACHER' },
  { id: 'actions', label: 'Actions', disableSorting: true }
]





const options = {
  filterType: "checkbox"
};

const AdminAttendances = props => {
    const history = useHistory();
    const classes = useStyles();
    const [recordForEdit, setRecordForEdit] = useState(null)
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
    const [openPopup, setOpenPopup] = useState(false)
    const [newattendance, setNewAttendance] = useState({})
    const {token} = props;


  useEffect(() => {
    if(!props.fetched) {
        props.getAdminAttendances(token);
    }
    console.log('mount it!');

  }, [newattendance]);


  const addOrEdit = (fee, resetForm, token) => {
      if (fee.id > 0){
        props.editAdminAttendance(fee.id, fee, token)
        setNewAttendance(fee)
      }
      else{
        props.addAdminAttendance(fee, token)
        setNewAttendance(fee)
        props.getAdminAttendances(token);
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
    history.push(`/itdashboard/attendance/${id}`)
  }


  return (
    <InformationTechnologyLayout>
      <Paper className={classes.pageContent}>

      <Toolbar>
          <Controls.Input
              label="Search Attendance"
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
                          <TableCell>{item.date}</TableCell>
                          <TableCell>{item.klass}</TableCell>
                          <TableCell>{item.recorded_by}</TableCell>
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
      title="Attendance Form"
      openPopup={openPopup}
      setOpenPopup={setOpenPopup}
      >
        <MarkRegister
            recordForEdit={recordForEdit}
            addOrEdit={addOrEdit}
        />
      </Popup>
    </InformationTechnologyLayout>
  );
};

const mapStateToProps = state =>({
    records: state.adminattendances.adminattendances,
    token: state.auth.token,
})

export default connect(
  mapStateToProps,
  {getAdminAttendances, editAdminAttendance, addAdminAttendance} )
  (AdminAttendances);
