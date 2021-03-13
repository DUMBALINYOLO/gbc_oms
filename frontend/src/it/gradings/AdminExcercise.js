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
import { Paper }from '@material-ui/core';
import Cover from '../../components/SocialMedia/Cover';
import bgCover from '../../images/petal_bg.svg';
import styles from '../../components/SocialMedia/jss/cover-jss';
import { getAdminStudentExcercise } from '../../actions/gradings';
import About from './About';
import GradingBag from './GradingBag';
import ExcerciseRecords from './ExcerciseRecords';
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';


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

export class AdminGradingExcercise extends React.Component {
  state = {
    value: 0
  };

  componentDidMount() {
    this.props.getAdminStudentExcercise(this.props.match.params.id);
  }



  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const {  classes } = this.props;
    const { value } = this.state;
    const { adminstudentexcercise } = this.props;
    const { id } = adminstudentexcercise;


    return (
      <GradingBag>
      {this.props.loading ? (
          <Paper>
            <LinearProgress color="secondary" />
            <LinearProgress color="secondary" />
            <LinearProgress color="secondary" />
            <LinearProgress color="secondary" />
            <LinearProgress color="secondary" />
            <LinearProgress color="secondary" />
            <LinearProgress color="secondary" />
            <LinearProgress color="secondary" />
            <LinearProgress color="secondary" />
            <LinearProgress color="secondary" />
            <LinearProgress color="secondary" />
            <LinearProgress color="secondary" />
            <LinearProgress color="secondary" />
            <LinearProgress color="secondary" />
            <LinearProgress color="secondary" />
          </Paper>
        ) : (
            <>
        
              <Helmet>
                <title>{adminstudentexcercise.name}</title>
                <meta name="description" content={adminstudentexcercise.name} />
                <meta property="og:title" content={adminstudentexcercise.name} />
                <meta property="og:description" content={adminstudentexcercise.name} />
                <meta property="twitter:title" content={adminstudentexcercise.name} />
                <meta property="twitter:description" content={adminstudentexcercise.name} />
              </Helmet>
              <Cover
                coverImg={bgCover}
                name={adminstudentexcercise.name}
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
              {value === 0 && <TabContainer><About data={adminstudentexcercise}/></TabContainer>}
              {value === 1 && <TabContainer><ExcerciseRecords data={adminstudentexcercise}/></TabContainer>}
          </>
        )}
      </GradingBag>
    );
  }
}

AdminGradingExcercise.propTypes = {
  classes: PropTypes.object.isRequired,
};


const mapStateToProps = state => ({
  force: state, // force state from reducer
  adminstudentexcercise: state.gradings.adminstudentexcercise,
  loading: state.gradings.loading,
});



const AdminGradingTestMapped = connect(
  mapStateToProps,
  { getAdminStudentExcercise}
)(AdminGradingExcercise);

export default withStyles(styles)( AdminGradingTestMapped );


