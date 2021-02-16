import React, { useEffect, useState } from "react"
import { getCourseAdverts } from '../../actions/adverts';
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
import  Controls  from "../../components/formcontrols/Controls";
import  Popup  from "../../components/formcontrols/Popup";
import  useTable  from "../../components/table/useTable";
import PuclicLayout from '../layout/InformationTechnologyLayout';



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
  const {id} = 1;

  useEffect(() => {
    if(!props.fetched) {
        props.getCourseAdverts();
    }
    console.log('mount it!');

  }, [newAdvert]);





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
    < PuclicLayout>
      <Paper className={classes.pageContent}>
      <Toolbar>
          <Controls.Input
              label="Search Courses"
              className={classes.searchInput}
              InputProps={{
                  startAdornment: (<InputAdornment position="start">
                      <Search />
                  </InputAdornment>)
              }}
          />
      </Toolbar>
        <div>
            {records.map((advert, i) => CustomizedExpansionPanels(advert, i, expanded, setExpanded))}
        </div>
      </Paper>
    </PuclicLayout>
  );
};

const mapStateToProps = state =>({
    records: state.adverts.courseadverts,
})

export default connect(
  mapStateToProps,
  {getCourseAdverts} )
  (AdminCourseAdverts);
