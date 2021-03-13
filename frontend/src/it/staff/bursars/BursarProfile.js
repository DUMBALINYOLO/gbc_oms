import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import brand from '../../../api/dummy/brand';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Hidden from '@material-ui/core/Hidden';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SchoolIcon from '@material-ui/icons/Assignment';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Cover from '../../../components/SocialMedia/Cover';
import bgCover from '../../../images/petal_bg.svg';
import styles from '../../../components/SocialMedia/jss/cover-jss';
import { getAdminBursar } from '../../../actions/people';
import About from './About';
import ProfileBag from './ProfileBag';
import AttIcon from '@material-ui/icons/HowToReg';
import { Paper }from '@material-ui/core';
import TestIcon from '@material-ui/icons/MenuBook';
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

class CompanyProfile extends React.Component {
  state = {
    value: 0
  };

  componentDidMount() {
    this.props.getAdminBursar(this.props.match.params.id);
  }



  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const description = brand.desc;
    const {  classes } = this.props;
    const { value } = this.state;
    const {adminbursar} = this.props;
    const { id } = adminbursar;


    return (
      <ProfileBag>
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
              <title>{adminbursar.username}</title>
              <meta name="description" content={description} />
              <meta property="og:title" content={adminbursar.username} />
              <meta property="og:description" content={description} />
              <meta property="twitter:title" content={adminbursar.username} />
              <meta property="twitter:description" content={adminbursar.username} />
            </Helmet>
            <Cover
              coverImg={bgCover}
              name={adminbursar.username}
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
                </Tabs>
              </Hidden>
            </AppBar>
            {value === 0 && <TabContainer><About data={adminbursar}/></TabContainer>}
          </>
        )}
      </ProfileBag >
    );
  }
}

CompanyProfile.propTypes = {
  classes: PropTypes.object.isRequired,
};


const mapStateToProps = state => ({
  force: state, // force state from reducer
  adminbursar: state.people.adminbursar,
  loading: state.people.loading,
});


const UserProfileMapped = connect(
  mapStateToProps,
  {getAdminBursar}
)(CompanyProfile);

export default withStyles(styles)(UserProfileMapped);


