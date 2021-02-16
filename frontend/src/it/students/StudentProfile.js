import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import brand from '../../api/dummy/brand';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Hidden from '@material-ui/core/Hidden';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SchoolIcon from '@material-ui/icons/Assignment';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Cover from '../../components/SocialMedia/Cover';
import bgCover from '../../images/petal_bg.svg';
import styles from '../../components/SocialMedia/jss/cover-jss';
import { getAdminStudent } from '../../actions/people';
import About from './About';
import Assignments from './Assignments';
import Attendance from './Attendance';
import Excercises from './Excercises';
import Tests from './Tests';
import ProfileBag from './ProfileBag';
import AttIcon from '@material-ui/icons/HowToReg';
import TestIcon from '@material-ui/icons/MenuBook';



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

class CompanyProfile extends React.Component {
  state = {
    value: 0
  };

  componentDidMount() {
    this.props.getAdminStudent(this.props.match.params.id);
  }



  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const description = brand.desc;
    const {  classes } = this.props;
    const { value } = this.state;
    const {adminstudent} = this.props;
    const { id } = adminstudent;

    console.log(adminstudent)
    console.log(id)

    return (
      <ProfileBag>
        
        <Helmet>
          <title>{adminstudent.username}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={adminstudent.username} />
          <meta property="og:description" content={description} />
          <meta property="twitter:title" content={adminstudent.username} />
          <meta property="twitter:description" content={adminstudent.username} />
        </Helmet>
        <Cover
          coverImg={bgCover}
          name={adminstudent.username}
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
              <Tab icon={<AttIcon />} />
              <Tab icon={<SchoolIcon />} />
              <Tab icon={<TestIcon />} />
              <Tab icon={<TestIcon />} />
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
              <Tab icon={<AttIcon />} label="ATTENDANCE" />
              <Tab icon={<TestIcon />} label="TESTS" />
              <Tab icon={<TestIcon />} label="EXCERCISES" />
              <Tab icon={<SchoolIcon />} label="ASSIGNMENTS" />
            </Tabs>
          </Hidden>
        </AppBar>
        {value === 0 && <TabContainer><About data={adminstudent}/></TabContainer>}
        {value === 1 && <TabContainer><Attendance data={adminstudent} /></TabContainer>}
        {value === 2 && <TabContainer><Tests data={adminstudent}/></TabContainer>}
        {value === 3 && <TabContainer><Excercises data={adminstudent}/></TabContainer>}
        {value === 4 && <TabContainer><Assignments data={adminstudent}/></TabContainer>}
      </ProfileBag >
    );
  }
}

CompanyProfile.propTypes = {
  classes: PropTypes.object.isRequired,
};


const mapStateToProps = state => ({
  force: state, // force state from reducer
  adminstudent: state.people.adminstudent,
});



const UserProfileMapped = connect(
  mapStateToProps,
  {getAdminStudent}
)(CompanyProfile);

export default withStyles(styles)(UserProfileMapped);


