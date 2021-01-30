import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Hidden from '@material-ui/core/Hidden';
import AccountCircle from '@material-ui/icons/AccountCircle';
import GradientIcon from '@material-ui/icons/Gradient';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import Cover from '../../components/SocialMedia/Cover';
import bgCover from '../../images/petal_bg.svg';
import styles from '../../components/SocialMedia/jss/cover-jss';
import { getAdminStudentAssignment} from '../../actions/gradings';
import About from './About';
import GradingBag from './GradingBag';
import ExcerciseRecords from './ExcerciseRecords';



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

export class AdminAssignment extends React.Component {
  state = {
    value: 0
  };

  componentDidMount() {
    this.props.getAdminStudentAssignment(this.props.match.params.id);
  }



  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const {  classes } = this.props;
    const { value } = this.state;
    const { adminstudentassignment } = this.props;
    const { id } = adminstudentassignment;

    console.log(adminstudentassignment)
    console.log(id)

    return (
      <GradingBag>
        
        <Helmet>
          <title>{adminstudentassignment.name}</title>
          <meta name="description" content={adminstudentassignment.name} />
          <meta property="og:title" content={adminstudentassignment.name} />
          <meta property="og:description" content={adminstudentassignment.name} />
          <meta property="twitter:title" content={adminstudentassignment.name} />
          <meta property="twitter:description" content={adminstudentassignment.name} />
        </Helmet>
        <Cover
          coverImg={bgCover}
          name={adminstudentassignment.name}
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
              <Tab icon={<GradientIcon />} />
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
              <Tab icon={<GradientIcon />} label="RECORDS" />
            </Tabs>
          </Hidden>
        </AppBar>
        {value === 0 && <TabContainer><About data={adminstudentassignment}/></TabContainer>}
        {value === 1 && <TabContainer><ExcerciseRecords data={adminstudentassignment}/></TabContainer>}
      </GradingBag>
    );
  }
}

AdminAssignment.propTypes = {
  classes: PropTypes.object.isRequired,
};


const mapStateToProps = state => ({
  force: state, // force state from reducer
  adminstudentassignment: state.gradings.adminstudentassignment,
});



const AdminGradingTestMapped = connect(
  mapStateToProps,
  { getAdminStudentAssignment}
)(AdminAssignment);

export default withStyles(styles)( AdminGradingTestMapped );


