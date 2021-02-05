import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import brand from '../../api/dummy/brand';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Hidden from '@material-ui/core/Hidden';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Cover from '../../components/SocialMedia/Cover';
import bgCover from '../../images/petal_bg.svg';
import styles from '../../components/SocialMedia/jss/cover-jss';
import { getAdminAttendance } from '../../actions/attendances';
import About from './About';
import Records from './Records';
import AttendanceBag from './AttendanceBag';
import SchoolIcon from '@material-ui/icons/School';


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

class TeacherAttendance extends React.Component {
  state = {
    value: 0
  };

  componentDidMount() {
    this.props.getAdminAttendance(this.props.match.params.id);
  }



  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const description = brand.desc;
    const {  classes } = this.props;
    const { value } = this.state;
    const {adminattendance} = this.props;
    const { id } = adminattendance;

    console.log(adminattendance)
    console.log(id)

    return (
      <AttendanceBag>
        
        <Helmet>
          <title>{adminattendance.date}</title>
          <meta name="description" content={adminattendance.date} />
          <meta property="og:title" content={adminattendance.date} />
          <meta property="og:description" content={description} />
          <meta property="twitter:title" content={adminattendance.date} />
          <meta property="twitter:description" content={adminattendance.date} />
        </Helmet>
        <Cover
          coverImg={bgCover}
          name={adminattendance.id}
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
              <Tab icon={<SchoolIcon />} label="RECORDS" />
            </Tabs>
          </Hidden>
        </AppBar>
        {value === 0 && <TabContainer><About data={adminattendance}/></TabContainer>}
        {value === 1 && <TabContainer><Records data={adminattendance}/></TabContainer>}
      </AttendanceBag >
    );
  }
}

TeacherAttendance.propTypes = {
  classes: PropTypes.object.isRequired,
};


const mapStateToProps = state => ({
  force: state, // force state from reducer
  adminattendance: state.adminattendances.adminattendance,
});



const AttendanceMapped = connect(
  mapStateToProps,
  {getAdminAttendance}
)(TeacherAttendance);

export default withStyles(styles)(AttendanceMapped);

