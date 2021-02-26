import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import InformationTechnologyLayout from "../../layout/InformationTechnologyLayout";
import { getAdminOngoingCourses, addOngoingCourse, editOngoingCourse } from '../../../actions/courses';
import { connect } from 'react-redux';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CloseIcon from '@material-ui/icons/Close';
import { Search } from "@material-ui/icons";
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
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
import AddCourse from './AddCourse';
import {Link} from 'react-router-dom';
import  Controls  from "../../../components/formcontrols/Controls";
import  Popup  from "../../../components/formcontrols/Popup";
import SearchCourse from "./SearchCourse";
import CourseCard from "./CourseCard";




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


const options = {
  filterType: "checkbox"
};

const AdminOngoingCourses = props => {
  const classes = useStyles();
  const [recordForEdit, setRecordForEdit] = useState(null)
  const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
  const [openPopup, setOpenPopup] = useState(false)
  const [listView, setListView] = useState('grid')
  const history = useHistory();
  const courseData = useSelector((state) => state.courses.adminongoingcourses);
  const dispatch = useDispatch();
  const [newcourse, setNewCourse] = useState({})
  const {token} = props;


  useEffect(() => {
    if(!props.fetched) {
        dispatch(getAdminOngoingCourses(token));
    }
    console.log('mount it!');

  }, [newcourse]);

  const addOrEdit = (fee, resetForm, token) => {
      if (fee.id > 0){
        props.editOngoingCourse(fee.id, fee, token)
        setNewCourse(fee)
      }else{
        props.addOngoingCourse(fee, token)
        setNewCourse(fee)
        dispatch(getAdminOngoingCourses(token));
      }
      resetForm()
      setRecordForEdit(null)
      setOpenPopup(false)
  }

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

  const handleSwitchView = (event, value) => {
    setListView(value)
  }

  const handleClick = id =>{
    history.push(`/itdashboard/ongoingcourses/${id}`)
  }


  return (
    <InformationTechnologyLayout>
      <Paper className={classes.pageContent}>

      <Toolbar>
          <Controls.Button
              text="Add New"
              variant="outlined"
              startIcon={<AddIcon />}
              className={classes.newButton}
              onClick={() => { setOpenPopup(true); setRecordForEdit(null); }}
          />
      </Toolbar>
        <SearchCourse
            courseData={courseData}
            listView={listView}
            handleSwitchView={handleSwitchView}
          />
          <Grid
            container
            alignItems="flex-start"
            justify="flex-start"
            direction="row"
            spacing={3}
          >
            {
              courseData.map((course) => {
                return (
                  <Grid item md={listView === 'list' ? 12 : 4} sm={listView === 'list' ? 12 : 6} xs={12} key={course.id}>
                    <CourseCard
                      list={listView === 'list'}
                      full_name={course.full_name}
                      short_name={course.short_name}
                      thumbnail={course.image}
                      description={course.description}
                      status={course.status}
                      detailOpen={() => handleClick(course.id)}
                      editItem={() => openInPopup(course)}
                    />
                  </Grid>
                );
              })
            }
          </Grid>
      </Paper>
      <Popup
      title="Ongoing Course Form"
      openPopup={openPopup}
      setOpenPopup={setOpenPopup}
      >
        <AddCourse
            recordForEdit={recordForEdit}
            addOrEdit={addOrEdit}
        />
      </Popup>
    </InformationTechnologyLayout>
  );
};

const mapStateToProps = state =>({
    // courseData: state.courses.adminongoingcourses,
    token: state.auth.token,
})

export default connect(
  mapStateToProps,
  { getAdminOngoingCourses, addOngoingCourse, editOngoingCourse} )
  (AdminOngoingCourses);
