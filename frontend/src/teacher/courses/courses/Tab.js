import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import TeacherLayout from "../../layout/TeacherLayout";
import TeacherOngoingCourses from './TeacherOngoingCourses';
import TeacherUpcomingCourses from './TeacherUpcomingCourses';
import TeacherFinishedCourses from './TeacherFinishedCourses';
import TeacherInactiveCourses from './TeacherInactiveCourses';

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
      <TeacherLayout>
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
              <Tab label="INACTIVE COURSES" />
              <Tab label="UPCOMING COURSES" />
              <Tab label="ONGOING COURSES" />
              <Tab label="FINISHED COURSES" />
            </Tabs>
          </AppBar>
          {value === 0 && <TabContainer><TeacherInactiveCourses/></TabContainer>}
          {value === 1 && <TabContainer><TeacherUpcomingCourses/></TabContainer>}
          {value === 2 && <TabContainer><TeacherOngoingCourses/></TabContainer>}
          {value === 3 && <TabContainer><TeacherFinishedCourses/></TabContainer>}
        </div>
      </TeacherLayout>
    );
  }
}

ScrollIconTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScrollIconTabs);
