import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Hidden from '@material-ui/core/Hidden';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Cover from '../../../components/SocialMedia/Cover';
import bgCover from '../../../images/petal_bg.svg';
import styles from '../../../components/SocialMedia/jss/cover-jss';
import { getStudentUpcomingCourse } from '../../../actions/courses';
import About from './About';
import CourseBag from './CourseBag';
import SchoolIcon from '@material-ui/icons/School';
import Topics from '../topics/Topics';
// import Enrollments from '../enrollments/Enrollments';


function TabContainer(props) {
  const { children } = props;
  return (
    <div style={{ paddingTop: 8 * 3 }}>
      {children}
    </div>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

class Course extends React.Component {
  state = {
    value: 0,
  };

  componentDidMount() {
    if (this.props.token !== undefined && this.props.token !== null) {
      this.props.getStudentUpcomingCourse(this.props.match.params.id, this.props.token);
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.token !== this.props.token) {
      if (newProps.token !== undefined && newProps.token !== null) {
        this.props.getStudentUpcomingCourse( this.props.match.params.id, newProps.token);
      }
    }
  }


  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const {  classes } = this.props;
    const { value } = this.state;
    const {course} = this.props;


    return (
      <CourseBag>

        <Helmet>
          <title>{course.full_name}</title>
          <meta name="description" content={course.full_name} />
          <meta property="og:title" content={course.full_name} />
          <meta property="og:description" content={course.full_name} />
          <meta property="twitter:title" content={course.full_name} />
          <meta property="twitter:description" content={course.full_name} />
        </Helmet>
        <Cover
          coverImg={bgCover}
          name={course.full_name}
        />
        <AppBar position="static" className={classes.profileTab}>
          <Hidden mdUp>
            <Tabs
              value={value}
              onChange={this.handleChange}
              variant="fullWidth"
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab icon={<AccountCircle />} />
              <Tab icon={<SchoolIcon />} />
            </Tabs>
          </Hidden>
          <Hidden smDown>
            <Tabs
              value={value}
              onChange={this.handleChange}
              variant="fullWidth"
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab icon={<AccountCircle />} label="ABOUT" />
              <Tab icon={<SchoolIcon />} label="TOPICS" />
            </Tabs>
          </Hidden>
        </AppBar>
        {value === 0 && <TabContainer><About data={course}/></TabContainer>}
        {value === 1 && <TabContainer><Topics data={course}/></TabContainer>}
      </CourseBag >
    );
  }
}



const mapStateToProps = state => ({
  course: state.courses.studentupcomingcourse,
  token: state.auth.token,
});



const AttendanceMapped = connect(
  mapStateToProps,
  {getStudentUpcomingCourse}
)(Course);

export default withStyles(styles)(AttendanceMapped);
