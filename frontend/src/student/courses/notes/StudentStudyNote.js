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

class StudentStudyNote extends React.Component {
  state = {
    value: 0
  };

  componentDidMount() {
    if (this.props.token !== undefined && this.props.token !== null) {
      this.props.getStudyNote(this.props.match.params.id, this.props.token);
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.token !== this.props.token) {
      if (newProps.token !== undefined && newProps.token !== null) {
        this.props.getStudyNote( this.props.match.params.id, newProps.token);
      }
    }
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
        {value === 0 && <TabContainer><About data={note}/></TabContainer>}
      </NoteBag >
    );
  }
}



const mapStateToProps = state => ({
  force: state, // force state from reducer
  note: state.courses.adminstudynote,
  token: state.auth.token,
});



const AttendanceMapped = connect(
  mapStateToProps,
  {getStudyNote}
)(StudentStudyNote);

export default withStyles(styles)(AttendanceMapped);