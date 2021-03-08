import React, { useEffect, useState } from "react"
import {  editExcerciseRecord } from '../../actions/gradings';
import { connect } from 'react-redux';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CloseIcon from '@material-ui/icons/Close';
import { Search } from "@material-ui/icons";
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
import EditRecord from './EditRecord';
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
  { id: 'student', label: 'STUDENT' },
  { id: 'totalmarks', label: 'TOTAL' },
  { id: 'score', label: 'SCORE' },
  { id: 'actions', label: 'Actions', disableSorting: true }
]



const options = {
  filterType: "checkbox"
};

const ExcerciseRecords = props => {
    const classes = useStyles();
    const [recordForEdit, setRecordForEdit] = useState(null)
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
    const [openPopup, setOpenPopup] = useState(false)
    const [records, setRecords] = useState([])
    const [newgrading, setNewGrading] = useState({})
    const {token} = props;

    const {id} =props.data


  const addOrEdit = (fee, resetForm, token) => {
      if (fee.id > 0){
        props.editExcerciseRecord(fee.id, fee, token)
        setNewGrading(fee)
      }else{
        console.log(fee, token) 
        setNewGrading(fee)
      }
      resetForm()
      setRecordForEdit(null)
      setOpenPopup(false)
  }

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchData = async () => {
        try {
            const res = await axios.get(`http://127.0.0.1:8000/api/grading/grading-excercise-records/?id=${id}`);

            setRecords(res.data);
        }
        catch (err) {

        }
    }

        fetchData();
    }, [newgrading]);



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
              label="Search Record"
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
                          <TableCell>{item.name}</TableCell>
                          <TableCell>{item.student}</TableCell>
                          <TableCell>{item.totalmarks}</TableCell>
                          <TableCell>{item.score}</TableCell>
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
      title="Record Form"
      openPopup={openPopup}
      setOpenPopup={setOpenPopup}
      >
        <EditRecord
            recordForEdit={recordForEdit}
            addOrEdit={addOrEdit}
        />
      </Popup>
    </>
  );
};

const mapStateToProps = state =>({
    token: state.auth.token,
})

export default connect(
  mapStateToProps,
  {editExcerciseRecord} )
  (ExcerciseRecords);
