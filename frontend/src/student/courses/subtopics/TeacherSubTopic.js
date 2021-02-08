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
import { getAdminSubTopic } from '../../../actions/courses';
import About from './About';
import SubTopicBag from './SubTopicBag';
import SchoolIcon from '@material-ui/icons/School';
import Notes from '../notes/Notes';


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

class AdminSubTopic extends React.Component {
  state = {
    value: 0
  };

  componentDidMount() {
    this.props.getAdminSubTopic(this.props.match.params.id);
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const {  classes } = this.props;
    const { value } = this.state;
    const {subtopic} = this.props;


    return (
      <SubTopicBag>

        <Helmet>
          <title>{subtopic.title}</title>
          <meta name="description" content={subtopic.title} />
          <meta property="og:title" content={subtopic.title} />
          <meta property="og:description" content={subtopic.title} />
          <meta property="twitter:title" content={subtopic.title} />
          <meta property="twitter:description" content={subtopic.title} />
        </Helmet>
        <Cover
          coverImg={bgCover}
          name={subtopic.title}
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
              <Tab icon={<SchoolIcon />} label="STUDY CONTENT" />
            </Tabs>
          </Hidden>
        </AppBar>
        {value === 0 && <TabContainer><About data={subtopic}/></TabContainer>}
        {value === 1 && <TabContainer><Notes data={subtopic}/></TabContainer>}
      </SubTopicBag >
    );
  }
}



const mapStateToProps = state => ({
  force: state, // force state from reducer
  subtopic: state.courses.adminsubtopic,
});



const AttendanceMapped = connect(
  mapStateToProps,
  {getAdminSubTopic}
)(AdminSubTopic);

export default withStyles(styles)(AttendanceMapped);
