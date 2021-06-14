import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import InformationTechnologyLayout from '../layout/InformationTechnologyLayout';
import AdminApprovedAdmissions from './AdminApprovedAdmissions';
import AdminMeetingAdmissions from './AdminMeetingAdmissions';
import AdminPendingAdmissions from './AdminPendingAdmissions';
import AdminRejectedAdmissions from './AdminRejectedAdmissions';
import Enrollments from './Enrollments';




function TabContainer(props) {
  const { children } = props;
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});

class ScrollIconTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <InformationTechnologyLayout>
        <div className={classes.root}>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={this.handleChange}
              variant="scrollable"
              scrollButtons="on"
              indicatorColor="primary"
              textColor="secondary"
            >
              <Tab label="ENROLLMENTS" />
              <Tab label="PENDING" />
              <Tab label="APPROVED" />
              <Tab label="MEETING" />
              <Tab label="REJECTED" />
            </Tabs>
          </AppBar>
          {value === 0 && <TabContainer><Enrollments/></TabContainer>}
          {value === 1 && <TabContainer><AdminPendingAdmissions/></TabContainer>}
          {value === 2 && <TabContainer><AdminApprovedAdmissions/></TabContainer>}
          {value === 3 && <TabContainer><AdminMeetingAdmissions/></TabContainer>}
          {value === 4 && <TabContainer><AdminRejectedAdmissions/></TabContainer>}
        </div>
      </InformationTechnologyLayout>
    );
  }
}

ScrollIconTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScrollIconTabs);
