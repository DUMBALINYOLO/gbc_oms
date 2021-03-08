import React, { useEffect, useState } from "react"
import { getCourseAdverts, addCourseAdvert } from '../../actions/adverts';
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
import AddAdvert from './AddCourseAdvert';
import  Controls  from "../../components/formcontrols/Controls";
import  Popup  from "../../components/formcontrols/Popup";
import  useTable  from "../../components/table/useTable";
import InformationTechnologyLayout from '../layout/InformationTechnologyLayout';


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


const AdminCourseAdverts = props => {
  const classes = useStyles();
  const [recordForEdit, setRecordForEdit] = useState(null)
  const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
  const [openPopup, setOpenPopup] = useState(false)
  const [expanded, setExpanded] = useState('panel_0')
  const [newAdvert, setNewAdvert] = useState({})
  const [query, setQuery] = useState('')
  const {id} = 1;

  useEffect(() => {
    if(!props.fetched) {
        props.getCourseAdverts(query);
    }
    console.log('mount it!');

  }, [newAdvert]);


  const addOrEdit = (fee, resetForm) => {
      props.addCourseAdvert(fee, props.token)
      setNewAdvert(fee)
      props.getCourseAdverts(query)
      resetForm()
      setRecordForEdit(null)
      setOpenPopup(false)
  }

  const handleQuery = e => {
    let target = e.target;
    setQuery(target.value);
    props.getCourseAdverts(query)
  }

  const {records} = props;

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
    <InformationTechnologyLayout>
      <Paper className={classes.pageContent}>
      <Toolbar>
          <Controls.Input
              label="Search Advert"
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
        <div>
            {records.map((advert, i) => CustomizedExpansionPanels(advert, i, expanded, setExpanded))}
        </div>
      </Paper>
      <Popup
      title="Advert Form"
      openPopup={openPopup}
      setOpenPopup={setOpenPopup}
      >
        <AddAdvert
            recordForEdit={recordForEdit}
            addOrEdit={addOrEdit}
        />
      </Popup>
    </InformationTechnologyLayout>
  );
};

const mapStateToProps = state =>({
    records: state.adverts.courseadverts,
    token: state.auth.token
})

export default connect(
  mapStateToProps,
  {getCourseAdverts, addCourseAdvert} )
  (AdminCourseAdverts);
