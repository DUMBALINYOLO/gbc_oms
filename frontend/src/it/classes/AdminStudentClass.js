import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Hidden from '@material-ui/core/Hidden';
import AccountCircle from '@material-ui/icons/AccountCircle';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Cover from '../../components/SocialMedia/Cover';
import bgCover from '../../images/petal_bg.svg';
import styles from '../../components/SocialMedia/jss/cover-jss';
import { getClass } from '../../actions/classes';
import About from './About';
import Students from './Students';
import Subjects from './Subjects';
import ClassBag from './ClassBag';
import SchoolIcon from '@material-ui/icons/School';
import { Paper }from '@material-ui/core';
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

class AdminStudentClass extends React.Component {
  state = {
    value: 0
  };

  componentDidMount() {
    if (this.props.token !== undefined && this.props.token !== null) {
      this.props.getClass(this.props.match.params.id, this.props.token );
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.token !== this.props.token) {
      if (newProps.token !== undefined && newProps.token !== null) {
        this.props.getClass(this.props.match.params.id, newProps.token);
      }
    }
  }


  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const {  classes } = this.props;
    const { value } = this.state;
    const {classi} = this.props;

    return (
      <ClassBag>
      {this.props.loading ? (
          <Paper>
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
                <title>{classi.name}</title>
                <meta name="description" content={classi.name} />
                <meta property="og:title" content={classi.name} />
                <meta property="og:description" content={classi.name} />
                <meta property="twitter:title" content={classi.name} />
                <meta property="twitter:description" content={classi.name} />
              </Helmet>
              <Cover
                coverImg={bgCover}
                name={classi.name}
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
                    <Tab icon={<PermIdentityIcon />} />
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
                    <Tab icon={<PermIdentityIcon />} label="STUDENTS" />
                  </Tabs>
                </Hidden>
              </AppBar>
              {value === 0 && <TabContainer><About data={classi}/></TabContainer>}
              {value === 1 && <TabContainer><Students data={classi}/></TabContainer>}
          </>
        )}
      </ClassBag >
    );
  }
}


const mapStateToProps = state => ({
  force: state, // force state from reducer
  classi: state.classes.classi,
  token: state.auth.token,
  loading: state.classes.loading,
});

const UserProfileMapped = connect(
  mapStateToProps,
  {getClass}
)(AdminStudentClass);

export default withStyles(styles)(UserProfileMapped);
