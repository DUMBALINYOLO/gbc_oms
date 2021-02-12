import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Title from './Title';
import styles from './landingStyle-jss';

let counter = 0;
function createFeatureData(icon, title, desc) {
  counter += 1;
  return {
    id: counter,
    icon,
    title,
    desc
  };
}

class Feature extends React.Component {
  state = {
    featureList: [
      createFeatureData('ion-ios-infinite-outline', 'Our Vision', 'To be an African fountain of learning that perpetually excavate the subconscious minds of leaders, through mindful engagement, by infusing authenticity of youthful leadership passion.'),
      createFeatureData('ion-ios-flower-outline', 'Our Mission', 'To recreate global, ethical leaders and challenge them to lead with noticeable skills, agility, and competitiveness. To deploy the best facilitators, recent technology, and future-focused tools to empower and inspire our learner leaders. To challenge present and future leaders to lead consciously by escorting them in a journey of self-discovery in conscious and subconscious space.o prepare a fertile mind through mindful engagements preparing individuals for tough conversations. To seek endorsement, then unfreeze and re-freeze the agility appreciation to leaders at all levels. To acknowledge the individual uniqueness by enhancing their positive attributes.'),
      createFeatureData('ion-ios-ionic-outline', 'Our Values (GRIT)', '• Greatness – we do not settle for known heights! • Robustness – our quality is beyond any situation! • Integrity – we stick to our promises! • Trendsetting – we Lead, we originate and we innovate!')
    ]
  }

  render() {
    const { classes, slideMode } = this.props;
    const { featureList } = this.state;
    return (
      <div className={classNames(classes.feature, slideMode ? classes.mono : classes.color)}>
        <div className={!slideMode ? classes.container : ''}>
          <Title title="VISION, MISSION AND VALUES" align="center" monocolor={slideMode && true} />
          <Grid container className={classes.root} spacing={5}>
            { featureList.map(item => (
              <Grid key={item.id.toString()} item xs={12} md={4}>
                <Typography component="h4" variant="h6">
                  <span className={classes.icon}>
                    <i className={item.icon} />
                  </span>
                  {item.title}
                </Typography>
                <Typography className={slideMode ? classes.colorWhite : ''}>
                  {item.desc}
                </Typography>
              </Grid>
            )) }
          </Grid>
        </div>
      </div>
    );
  }
}

Feature.propTypes = {
  classes: PropTypes.object.isRequired,
  slideMode: PropTypes.bool
};

Feature.defaultProps = {
  slideMode: false
};

export default withStyles(styles)(Feature);
