import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PricingCard from '../cards/PricingCard';
import Title from './Title';
import styles from './landingStyle-jss';

class Pricing extends React.Component {
  render() {
    const { classes, slideMode } = this.props;
    return (
      <div className={classes.pricing}>
        <div className={slideMode ? classes.fullWidth : classes.container}>
          <Title title="WE SPECIALIZE IN" desc="Learning and development including:" align="center" monocolor={slideMode && true} />
          <Grid container className={classes.root} spacing={5}>
            <Grid item md={4} xs={12}>
              <PricingCard
                title="TRAIN"
                price="Train"
                tier="lean"
                feature={[]}
              />
            </Grid>
            <Grid item md={4} xs={12}>
              <PricingCard
                title="DEVELOPMENT"
                price="Develop"
                tier="cf"
                feature={[]}
              />
            </Grid>
            <Grid item md={4} xs={12}>
              <PricingCard
                title="NQF (level 1 - 8)"
                price="SETAs"
                tier="cf"
                feature={[]}
              />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

Pricing.propTypes = {
  classes: PropTypes.object.isRequired,
  slideMode: PropTypes.bool,
};

Pricing.defaultProps = {
  slideMode: false
};

export default withStyles(styles)(Pricing);