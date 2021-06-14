import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import brand from '../../api/dummy/brand';
import { Helmet } from 'react-helmet';
import { withStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import SliderWidget from "../Widget/SliderWidget";
import PerformanceChartWidget from "../Widget/PerformanceChartWidget";
import CounterIconsWidget from "../Widget/CounterIconsWidget";
import DateWidget from '../Widget/DateWidget';
import TaskWidget from '../Widget/TaskWidget';
import WeatherWidget from '../Widget/WeatherWidget';
import ContactWidget from '../Widget/ContactWidget';
import TimelineWidget from '../Widget/TimelineWidget';
import CalculatorWidget from '../Widget/CalculatorWidget';
import CounterChartWidget from '../Widget/CounterChartWidget';
import CounterCryptoWidget from '../Widget/CounterCryptoWidget';
import ManagementLayout from '../layout/ManagementLayout'
import { Divider as PrimeDivider} from 'primereact/divider';
import Customers from './Customers';
import Products from './Products';


import styles from './dashboard-jss';


class ManagementHome extends PureComponent {
  render() {
    const title = brand.name + ' - Flexweigh Dashboard';
    const description = brand.desc;
    const { classes } = this.props;
    return (
      <ManagementLayout>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={description} />
        </Helmet>
        <Grid container className={classes.root}>
          <CounterChartWidget />
        </Grid>
        <PrimeDivider/>
          <Grid container className={classes.root}>
            <CounterCryptoWidget/>
          </Grid>
          <PrimeDivider/>

        <Grid container spacing={3} className={classes.root}>
          <Grid item md={12} xs={12}>
            <Customers />
          </Grid>
          <Grid item md={12} xs={12}>
            <Products />
          </Grid>
          <Grid item md={6} xs={6}>

          </Grid>


        </Grid>
        <Divider className={classes.divider} />
        <Divider className={classes.divider} />

      </ManagementLayout>
    );
  }
}


ManagementHome.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ManagementHome);
