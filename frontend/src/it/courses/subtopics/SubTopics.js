import React, { useEffect, useState } from "react"
import { getAdminSubTopics, addSubTopic, editSubTopic} from '../../../actions/courses';
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
import { useHistory } from 'react-router-dom';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import AddSubTopic from './AddSubTopic';
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
  { id: 'title', label: 'TITLE' },
  { id: 'actions', label: 'Actions', disableSorting: true }
]

const options = {
  filterType: "checkbox"
};

const SubTopics = props => {
  const history = useHistory();
  const classes = useStyles();
  const [recordForEdit, setRecordForEdit] = useState(null)
  const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
  const [openPopup, setOpenPopup] = useState(false)
  const {id} =props.data;
  const [newtopic, setNewTopic] = useState({})
  const {token} = props;

  useEffect(() => {
    if(!props.fetched) {
        props.getAdminSubTopics(id, token);
    }
    console.log('mount it!');


  }, [newtopic]);


  const addOrEdit = (fee, resetForm, token) => {
      if (fee.id > 0){
        props.editSubTopic(fee.id, fee, token)
        setNewTopic(fee)
      }else{
        props.addSubTopic(fee, token)
        setNewTopic(fee)
        props.getAdminSubTopics(id, token);
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
    history.push(`/itdashboard/subtopics/${id}`)
  }

  return (
    <>
      <Paper className={classes.pageContent}>

      <Toolbar>
          <Controls.Input
              label="Search Topic"
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
      title="Subtopic Form"
      openPopup={openPopup}
      setOpenPopup={setOpenPopup}
      >
        <AddSubTopic
            recordForEdit={recordForEdit}
            addOrEdit={addOrEdit}
            id={id}
        />
      </Popup>
    </>
  );
};

const mapStateToProps = state =>({
    records: state.courses.adminsubtopics,
    token: state.auth.token,
})

export default connect(
  mapStateToProps,
  {getAdminSubTopics, addSubTopic, editSubTopic} )
  (SubTopics);
