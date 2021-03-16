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
import Cover from '../../components/SocialMedia/Cover';
import bgCover from '../../images/petal_bg.svg';
import styles from '../../components/SocialMedia/jss/cover-jss';
import { getEnquiry } from '../../actions/messaging';
import About from './About';
import InquiryBag from './InquiryBag';
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

class Inquiry extends React.Component {
  state = {
    value: 0
  };

  componentDidMount() {
    if (this.props.token !== undefined && this.props.token !== null) {
      this.props.getEnquiry(this.props.match.params.id, this.props.token);
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.token !== this.props.token) {
      if (newProps.token !== undefined && newProps.token !== null) {
        this.props.getEnquiry( this.props.match.params.id, newProps.token);
      }
    }
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };


  render() {
    const {  classes } = this.props;
    const { value } = this.state;
    const {messaging} = this.props;


    return (
      <InquiryBag>

        <Helmet>
          <title>{messaging.name}</title>
          <meta name="description" content={messaging.name} />
          <meta property="og:title" content={messaging.name} />
          <meta property="og:description" content={messaging.name} />
          <meta property="twitter:title" content={messaging.name} />
          <meta property="twitter:description" content={messaging.name} />
        </Helmet>
        <Cover
          coverImg={bgCover}
          name={messaging.name}
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
        {value === 0 && <TabContainer><About data={messaging}/></TabContainer>}
      </InquiryBag >
    );
  }
}

const mapStateToProps = state => ({
  force: state, // force state from reducer
  messaging: state.messaging.enquiry,
  
  token: state.auth.token,
});

const AttendanceMapped = connect(
  mapStateToProps,
  {getEnquiry}
)(Inquiry);

export default withStyles(styles)(AttendanceMapped);
