import React, { useEffect, useState } from "react"
import TeacherLayout from "../../layout/TeacherLayout";
import { getAdminFinishedCourses, addFinishedCourse, editFinishedCourse } from '../../../actions/courses';
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

const TeacherOngoingCourses = props => {
  const classes = useStyles();
  const [recordForEdit, setRecordForEdit] = useState(null)
  const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
  const [openPopup, setOpenPopup] = useState(false)
  const [listView, setListView] = useState('grid')
  const [newcourse, setNewCourse] = useState({})
  const [query, setQuery] = useState('')
  const history = useHistory();

  const {
      courseData,
      token
    } = props;

  useEffect(() => {
    if(!props.fetched) {
        props.getAdminFinishedCourses(query, token);
    }
    console.log('mount it!');


  }, [newcourse]);

  const handleQuery = e => {
    let target = e.target;
    setQuery(target.value);
    props.getAdminFinishedCourses(query, token)
  }


  const addOrEdit = (fee, resetForm, token) => {
      if (fee.id > 0){
        props.editFinishedCourse(fee.id, fee, token)
        setNewCourse(fee)
      }
      else{
        props.addFinishedCourse(fee, token)
        setNewCourse(fee)
        props.getAdminFinishedCourses(query, token);
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
    history.push(`/teacherdashboard/finishedcourses/${id}`)
  }



  return (
    <>
      <Paper className={classes.pageContent}>

      <Toolbar>
          <Controls.Input
              label="Search Finished Course"
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
      title="Finished Course Form"
      openPopup={openPopup}
      setOpenPopup={setOpenPopup}
      >
        <AddCourse
            recordForEdit={recordForEdit}
            addOrEdit={addOrEdit}
        />
      </Popup>
    </>
  );
};

const mapStateToProps = state =>({
    courseData: state.courses.adminfinishedcourses,
    token: state.auth.token,
})

export default connect(
  mapStateToProps,
  {getAdminFinishedCourses, addFinishedCourse, editFinishedCourse} )
  (TeacherOngoingCourses);
