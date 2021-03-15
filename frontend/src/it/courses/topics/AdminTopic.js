import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Hidden from '@material-ui/core/Hidden';
import AccountCircle from '@material-ui/icons/AccountCircle';
import GuideIcon from '@material-ui/icons/AssignmentTurnedIn';
import SubTopicIcon from '@material-ui/icons/AssignmentReturned';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Cover from '../../../components/SocialMedia/Cover';
import bgCover from '../../../images/petal_bg.svg';
import styles from '../../../components/SocialMedia/jss/cover-jss';
import { getAdminTopic } from '../../../actions/courses';
import About from './About';
import TopicBag from './TopicBag';
import SchoolIcon from '@material-ui/icons/School';
import Objectives from '../objectives/Objectives';
import GuideLines from '../guidelines/GuideLines';
import SubTopics from '../subtopics/SubTopics';
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

class AdminTopic extends React.Component {
  state = {
    value: 0
  };

  componentDidMount() {
    this.props.getAdminTopic(this.props.match.params.id);
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const {  classes } = this.props;
    const { value } = this.state;
    const {topic} = this.props;
    console.log(topic)


    return (
      <TopicBag>
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
          </Paper>
        ) : (
            <>

            <Helmet>
              <title>{topic.title}</title>
              <meta name="description" content={topic.title} />
              <meta property="og:title" content={topic.title} />
              <meta property="og:description" content={topic.title} />
              <meta property="twitter:title" content={topic.title} />
              <meta property="twitter:description" content={topic.title} />
            </Helmet>
            <Cover
              coverImg={bgCover}
              name={topic.title}
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
                  <Tab icon={<GuideIcon />} />
                  <Tab icon={<SubTopicIcon />} />

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
                  <Tab icon={<SchoolIcon />} label="OBJECTIVES" />
                  <Tab icon={<GuideIcon />} label="GUIDELINES" />
                  <Tab icon={<SubTopicIcon />} label="SUBTOPICS" />
                </Tabs>
              </Hidden>
            </AppBar>
            {value === 0 && <TabContainer><About data={topic}/></TabContainer>}
            {value === 1 && <TabContainer><Objectives data={topic}/></TabContainer>}
            {value === 2 && <TabContainer><GuideLines data={topic}/></TabContainer>}
            {value === 3 && <TabContainer><SubTopics data={topic}/></TabContainer>}
          </>
        )}
      </TopicBag >
    );
  }
}



const mapStateToProps = state => ({
  topic: state.courses.admintopic,
  loading: state.courses.loading,
});



const AttendanceMapped = connect(
  mapStateToProps,
  {getAdminTopic}
)(AdminTopic);

export default withStyles(styles)(AttendanceMapped);
