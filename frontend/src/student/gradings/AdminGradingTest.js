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
import { getAdminStudentTest } from '../../actions/gradings';
import About from './About';
import GradingBag from './GradingBag';
import TestRecords from './TestRecords';



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

export class AdminGradingTest extends React.Component {
  state = {
    value: 0
  };

  componentDidMount() {
    this.props.getAdminStudentTest(this.props.match.params.id);
  }



  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const {  classes } = this.props;
    const { value } = this.state;
    const { adminstudenttest } = this.props;
    const { id } = adminstudenttest;

    console.log(adminstudenttest)
    console.log(id)

    return (
      <GradingBag>
        
        <Helmet>
          <title>{adminstudenttest.name}</title>
          <meta name="description" content={adminstudenttest.name} />
          <meta property="og:title" content={adminstudenttest.name} />
          <meta property="og:description" content={adminstudenttest.name} />
          <meta property="twitter:title" content={adminstudenttest.name} />
          <meta property="twitter:description" content={adminstudenttest.name} />
        </Helmet>
        <Cover
          coverImg={bgCover}
          name={adminstudenttest.name}
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
        {value === 0 && <TabContainer><About data={adminstudenttest}/></TabContainer>}
        {value === 1 && <TabContainer><TestRecords data={adminstudenttest}/></TabContainer>}
      </GradingBag>
    );
  }
}

AdminGradingTest.propTypes = {
  classes: PropTypes.object.isRequired,
};


const mapStateToProps = state => ({
  force: state, // force state from reducer
  adminstudenttest: state.gradings.adminstudenttest,
});



const AdminGradingTestMapped = connect(
  mapStateToProps,
  { getAdminStudentTest}
)(AdminGradingTest);

export default withStyles(styles)( AdminGradingTestMapped );


