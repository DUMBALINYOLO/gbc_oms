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
import { getStudyNote } from '../../../actions/courses';
import About from './About';
import Images from '../images/Images';
import InnerNotes from '../innernotes/InnerNotes';
import NoteBag from './NoteBag';
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

class AdminStudyNote extends React.Component {
  state = {
    value: 0
  };

  componentDidMount() {
    this.props.getStudyNote(this.props.match.params.id);
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const {  classes } = this.props;
    const { value } = this.state;
    const {note} = this.props;


    return (
      <NoteBag>

        <Helmet>
          <title>{note.title}</title>
          <meta name="description" content={note.title} />
          <meta property="og:title" content={note.title} />
          <meta property="og:description" content={note.title} />
          <meta property="twitter:title" content={note.title} />
          <meta property="twitter:description" content={note.title} />
        </Helmet>
        <Cover
          coverImg={bgCover}
          name={note.title}
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
              <Tab icon={<AccountCircle />} />
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
              <Tab icon={<AccountCircle />} label="IMAGES" />
              <Tab icon={<AccountCircle />} label="NOTES" />
            </Tabs>
          </Hidden>
        </AppBar>
        {value === 0 && <TabContainer><About data={note}/></TabContainer>}
        {value === 1 && <TabContainer><Images data={note}/></TabContainer>}
        {value === 2 && <TabContainer><InnerNotes data={note}/></TabContainer>}
      </NoteBag >
    );
  }
}



const mapStateToProps = state => ({
  force: state, // force state from reducer
  note: state.courses.adminstudynote,
});



const AttendanceMapped = connect(
  mapStateToProps,
  {getStudyNote}
)(AdminStudyNote);

export default withStyles(styles)(AttendanceMapped);
