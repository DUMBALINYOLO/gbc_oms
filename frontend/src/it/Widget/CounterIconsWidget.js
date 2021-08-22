import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import OndemandVideo from '@material-ui/icons/OndemandVideo';
import SupervisorAccount from '@material-ui/icons/SupervisorAccount';
import CollectionsBookmark from '@material-ui/icons/CollectionsBookmark';
import Edit from '@material-ui/icons/Edit';
import colorfull from '../../api/palette/colorfull';
import CounterWidget from '../Counter/CounterWidget';
import {getCounterStats} from '../../actions/reports';
import styles from './widget-jss';


class CounterIconWidget extends PureComponent {

  componentDidMount() {
    this.props.getCounterStats(this.props.token);
  }

  render() {
    const { classes } = this.props;
    const {statscounter} = this.props;
    console.log(statscounter)

    return (
      <div className={classes.rootCounterFull}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={6}>
            <CounterWidget
              color={colorfull[2]}
              start={0}
              end={statscounter.courses}
              duration={statscounter.courses}
              title="Courses"
            >
              <OndemandVideo className={classes.counterIcon} />
            </CounterWidget>
          </Grid>
          <Grid item xs={6} md={6}>
            <CounterWidget
              color={colorfull[2]}
              start={0}
              end={statscounter.students}
              duration={statscounter.students}
              title="STUDENTS"
            >
              <SupervisorAccount className={classes.counterIcon} />
            </CounterWidget>
          </Grid>
          <Grid item xs={6} md={6}>
            <CounterWidget
              color={colorfull[2]}
              start={0}
              end={statscounter.staffusers}
              duration={statscounter.staffusers}
              title="STAFF"
            >
              <SupervisorAccount className={classes.counterIcon} />
            </CounterWidget>
          </Grid>
          <Grid item xs={6} md={6}>
            <CounterWidget
              color={colorfull[3]}
              start={0}
              end={statscounter.topics}
              duration={statscounter.topics}
              title="Total Topics"
            >
              <CollectionsBookmark className={classes.counterIcon} />
            </CounterWidget>
          </Grid>
        </Grid>
      </div>
    );
  }
}




const mapStateToProps = state => ({
  statscounter: state.reports.statscounter,
  token: state.auth.token,

});

const BlogMapped = connect(
  mapStateToProps,
  {getCounterStats}
)(CounterIconWidget);

export default (withStyles(styles)(BlogMapped));
