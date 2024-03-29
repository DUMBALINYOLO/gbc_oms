import React, {useState, useRef, useEffect } from "react"
import { Toast } from 'primereact/toast';
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom';
import {
  Paper,
  makeStyles,
 } from '@material-ui/core';
import SearchCourse from "./SearchCourse";
import CourseCard from "./CoursesCard";
import { connect } from 'react-redux';
import { getUpcomingOfferedCourses} from '../../actions/adverts';


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




const Courses = props => {

  const classes = useStyles();
  const [listView, setListView] = useState('grid')
  const history = useHistory();
  const toast = useRef(null);
  const { records} = props;

  useEffect(() => {
    if(!props.fetched) {
        props.getUpcomingOfferedCourses();
    }
    console.log('mount it!');


  }, []);

  



  const handleSwitchView = (event, value) => {
    setListView(value)
  }

  const handleClick = id =>{
    history.push(`/upcoming-courses/${id}`)
  }

  



  return (
    <>

      <Paper className={classes.pageContent}>
        <Toast ref={toast} />
            <SearchCourse
                courseData={records}
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
                  records.map((course) => {
                    return (
                      <Grid
                        item
                        md={listView === 'list' ? 12 : 3}
                        sm={listView === 'list' ? 12 : 6}
                        xs={12}
                        key={course.id}
                      >
                        <CourseCard
                          list={listView === 'list'}
                          full_name={course.name}
                          short_name={course.start_date}
                          thumbnail={course.image}
                          status={course.end_date}
                          detailOpen={() => handleClick(course.id)}
                        />
                      </Grid>
                    );
                  })
                }
              </Grid>
        </Paper>

    </>
  );
};

const mapStateToProps = state =>({
    records: state.adverts.upcomingofferedcourses,
})

export default connect(
  mapStateToProps,
  { getUpcomingOfferedCourses} )
  (Courses);
