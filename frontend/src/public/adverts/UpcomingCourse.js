import React, {  useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Corporate from '../../containers/Templates/Corporate';
import clsx from 'clsx';
import {
  Grid,
  Button,
  Box,
  Typography,
  Tabs,
  Tab,
  Card,
  CardContent,


} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import {connect} from 'react-redux';

import {
    getUpcomingOfferedCourse,
    getCourseModules,
    getStudentExitProfiles,
    getOfferedCourseObjectives,
  } from '../../actions/adverts';

import AOS from "aos";
import 'aos/dist/aos.css';

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: 'primary',
    paddingTop: '30px',
    paddingLeft: '40px',
    paddingRight: '20px',
    paddingBottom: '20px',
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      {...other}>
      {value === index && <Box p={0}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

const Course = (props) => {
  const {
    classes,
    course,
    modules,
    profiles,
    objectives,
  } = props;
  const [value, setValue] = React.useState(0);
  const [isSidebarMenuOpen2, setIsSidebarMenuOpen2] = useState(false);
  const toggleSidebarMenu2 = () => setIsSidebarMenuOpen2(!isSidebarMenuOpen2);


  useEffect(() => {
    if(!props.fetched) {
        props.getUpcomingOfferedCourse(props.match.params.id);
        props.getCourseModules(props.match.params.id);
        props.getOfferedCourseObjectives(props.match.params.id);
        props.getStudentExitProfiles(props.match.params.id);
    }
    console.log('mount it!');
  }, []);

  useEffect(() =>{
    AOS.init({duration : 3000})

  }, []);


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Corporate >
      <div className={classes.root} data-aos="zoom-in-up">
        <Grid container spacing={4}>
            <Grid item xs={12} lg={12}>
                <Card className="mb-4">
                  <div className="card-badges">
                    <span className="h-auto px-3 py-1 badge badge-warning badge-pill">
                      START DATE {course.start_date}
                    </span>
                    <span className="h-auto px-3 py-1 badge badge-warning badge-pill">
                      END DATE {course.end_date}
                    </span>
                  </div>
                  <a
                    href="#/"
                    onClick={e => e.preventDefault()}
                    className="image-title-overlay"
                    title="...">
                    <div className="image-title-overlay--bottom">
                      <h3 className="display-4 font-weight-bold m-0 text-white">
                        {course.name}
                      </h3>
                    </div>
                    <img 
                      alt="..." className="card-img-top" 
                      src={course.image}
                      style={{height: '500px'}}
                    />
                  </a>
                </Card>
              </Grid>
        </Grid>
        <Grid style={{paddingTop: '20px'}} container spacing={4} data-aos="zoom-in-up">
            <Grid item xs={12} lg={12}  data-aos="zoom-in-up">
                <Card className="mb-4">
                  <CardContent className="p-3">
                    
                    <p className="card-text">
                      {course.description}
                    </p>
                  </CardContent>
                </Card>
            </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={12} lg={12}>
            <Tabs
              value={value}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
              onChange={handleChange}>
              <Tab label="MODULES" />
              <Tab label="STUDENT EXIT PROFILE" />
              <Tab label="OBJECTIVES" />
            </Tabs>
            <TabPanel value={value} index={0}>
              <Grid style={{paddingTop: '20px'}} container spacing={4} data-aos="zoom-in-up">
                { modules.map((topic) => {
                        return (
                                <Grid item xs={12} lg={4} key={topic.id}  data-aos="zoom-in-up">
                                    <Card className="card-box-alt card-border-top border-warning mb-4 pb-4">
                                        <h3 className="font-size-lg font-weight-bold mt-5 mb-4">
                                            {topic.name}
                                        </h3>
                                        <p className="card-text px-4 mb-4">
                                            {topic.description}
                                        </p>
                                        <Button
                                            color="primary"
                                            className="text-first mb-2"
                                            title="Find out more"
                                        >
                                            <span>{topic.longevity} months long</span>
                                        </Button>
                                    </Card>
                                </Grid>
                            );
                        })
                    }
                    
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
            <Grid style={{paddingTop: '20px'}} container spacing={4} data-aos="zoom-in-up">
                {profiles.map((profile) => {
                        return (
                                <Grid item xs={12} lg={4} key={profile.id}  data-aos="zoom-in-up">
                                    <Card className="card-box-alt  card-border-top border-warning mb-4 pb-4">
                                        <h3 className="font-size-lg font-weight-bold mt-5 mb-4">
                                            {profile.name}
                                        </h3>
                                        <p className="card-text px-4 mb-4">
                                            {profile.description}
                                        </p>
                                        
                                    </Card>
                                </Grid>
                            );
                        })
                    }
                    
              </Grid>

            </TabPanel>
            <TabPanel value={value} index={2}>
            <Grid style={{paddingTop: '20px'}} container spacing={4} data-aos="zoom-in-up">
                { objectives.map((objective) => {
                        return (
                                <Grid item xs={12} lg={4} key={objective.id}  data-aos="zoom-in-up">
                                    <Card className="card-box-alt card-border-top border-warning mb-4 pb-4">
                                        <h3 className="font-size-lg font-weight-bold mt-5 mb-4">
                                            {objective.name}
                                        </h3>
                                        <p className="card-text px-4 mb-4">
                                            {objective.description}
                                        </p>
                                    </Card>
                                </Grid>
                            );
                        })
                    }
                    
              </Grid>
            </TabPanel>
          </Grid>
        </Grid>
        <div className="sidebar-inner-layout-overlay" />
      </div>
    </Corporate>
  );
};


const mapStateToProps = state => ({
    course: state.adverts.upcomingofferedcourse,
    profiles: state.adverts.studentexitprofiles,
    modules: state.adverts.coursemodules,
    objectives: state.adverts.offeredcourseobjectives,
    token: state.auth.token,
    loading: state.adverts.loading,
  });
  
  
  
  const SingleAccountMapped = connect(
    mapStateToProps,
    {
      getUpcomingOfferedCourse,
      getCourseModules,
      getStudentExitProfiles,
      getOfferedCourseObjectives,
    }
  )(Course);


export default withStyles(styles)(SingleAccountMapped);

