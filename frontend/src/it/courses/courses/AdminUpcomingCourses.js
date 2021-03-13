import React, { useEffect, useState } from "react"
import InformationTechnologyLayout from "../../layout/InformationTechnologyLayout";
import { getAdminUpcomingCourses, addUpComingCourse, editUpComingCourse } from '../../../actions/courses';
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
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';

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

const AdminUpcomingCourses = props => {
  const classes = useStyles();
  const [recordForEdit, setRecordForEdit] = useState(null)
  const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
  const [openPopup, setOpenPopup] = useState(false)
  const [listView, setListView] = useState('grid')
  const history = useHistory();
  const [query, setQuery] = useState('')
  const {token} = props;
  const [newcourse, setNewCourse] = useState({})
  const [progress, setProgress] = React.useState(0);
  const [buffer, setBuffer] = React.useState(10);
  const progressRef = React.useRef(() => {});


  useEffect(() => {
    progressRef.current = () => {
      if (progress > 100) {
        setProgress(0);
        setBuffer(10);
      } else {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 10;
        setProgress(progress + diff);
        setBuffer(progress + diff + diff2);
      }
    };
  });

  useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current();
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if(!props.fetched) {
        props.getAdminUpcomingCourses(query, token);
    }
    console.log('mount it!');


  }, [newcourse]);


  const addOrEdit = (fee, resetForm, token) => {
      if (fee.id > 0){
        props.editUpComingCourse(fee.id, fee, token)
        setNewCourse(fee)
        props.getAdminUpcomingCourses(query, token);
      }else{
        props.addUpComingCourse(fee, token)
        setNewCourse(fee)
        props.getAdminUpcomingCourses(query, token);
      }
      resetForm()
      setRecordForEdit(null)
      setOpenPopup(false)
  }

  const handleQuery = e => {
    let target = e.target;
    setQuery(target.value);
    props.getAdminUpcomingCourses(query, token)
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
    history.push(`/itdashboard/upcomingcourses/${id}`)
  }

  const {
      courseData
    } = props;

  return (
    <InformationTechnologyLayout>
      <Paper className={classes.pageContent}>
      {props.loading ? (
          <div className={classes.rootaa}>
            <CircularProgress variant="determinate" value={progress} />
            <CircularProgress variant="determinate" value={progress} />
            <CircularProgress variant="determinate" value={progress} />
            <CircularProgress variant="determinate" value={progress}/>
            <CircularProgress variant="determinate" value={progress} />
            <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
            <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
            <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
            <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
            <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
            <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
            <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
            <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
            <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
          </div>
        ) : (
          <>
          <Toolbar>
            <Controls.Input
                  label="Search UpComing Course"
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
          </>
        )}
      </Paper>
      <Popup
      title="UpComing Course Form"
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
    courseData: state.courses.adminupcomingcourses,
    token: state.auth.token,
    loading: state.courses.loading,
})

export default connect(
  mapStateToProps,
  {getAdminUpcomingCourses, addUpComingCourse, editUpComingCourse} )
  (AdminUpcomingCourses);
