import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import ManagementLayout from '../layout/InformationTechnologyLayout'
import {
  getUpcomingOfferedCourse,
  getCourseModules,
  getStudentExitProfiles,
  getOfferedCourseObjectives,
  addOfferedCourseObjective,
  addCourseModule,
  addStudentExitProfile
} from '../../actions/adverts';
import Detail from './OngoingDetail';
import Objectives from './Objectives';
import Modules from './Modules';
import ExitProfiles from './ExitProfiles';

function TabContainer(props) {
  const { children } = props;
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});

const Course =(props) => {
    const [value, setValue] =useState(0)
    const { classes, token } = props;

    useEffect(() => {
      if(!props.fetched) {
          props.getUpcomingOfferedCourse(props.match.params.id, token);
          props.getCourseModules(props.match.params.id, token);
          props.getOfferedCourseObjectives(props.match.params.id, token);
          props.getStudentExitProfiles(props.match.params.id, token);
      }
      console.log('mount it!');
    }, []);
  
  

  const handleChange = (event, value) => {
    setValue(value)
  };


    return (
      <ManagementLayout>
        <div className={classes.root}>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={handleChange }
              variant="fullWidth"
              scrollButtons="on"
              indicatorColor="primary"
              textColor="secondary"
            >
              <Tab label="DETAIL" />
              <Tab label="MODULES" />
              <Tab label="STUDENT EXIT PROFILES" />
              <Tab label="OBJECTIVES" />
            </Tabs>
          </AppBar>
          {value === 0 && <TabContainer><Detail data={props.course}/></TabContainer>}
          {value === 1 && <TabContainer><Modules addModule={props.addCourseModule} getModules={props.getCourseModules}  records={props.modules} token={props.token} id={props.course.id}/></TabContainer>}
          {value === 2 && <TabContainer><ExitProfiles getProfiles={props.getStudentExitProfiles} addProfile={props.addStudentExitProfile} records={props.profiles} token={props.token} id={props.course.id}/></TabContainer>}
          {value === 3 && <TabContainer><Objectives token={props.token} getObjectives={props.getOfferedCourseObjectives} addObjective={props.addOfferedCourseObjective} id={props.course.id} records={props.objectives}/></TabContainer>}
        </div>
      </ManagementLayout>
    );
}

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
      addOfferedCourseObjective,
      addCourseModule,
      addStudentExitProfile
    }
  )(Course);


export default withStyles(styles)(SingleAccountMapped);
