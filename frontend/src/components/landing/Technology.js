import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import Title from './Title';
import {Link} from 'react-router-dom';
import styles from './landingStyle-jss';
import lineSide3 from '../../images/decoration/lineSide3.svg';
import lineSide4 from '../../images/decoration/lineSide4.svg';
import twelv from './1.jpg';
import thirt from './2.jpg';
import fort from './5.jpg';
import fift from './4.jpg';
import sixt from './7.jpg';
import two from './3.jpg'



function ParallaxDeco(props) {
  const { classes } = props;
  return (
    <div className={classes.parallaxWrap}>
      <ParallaxProvider>
        <Parallax
          offsetYMax={180}
          offsetYMin={-200}
          slowerScrollRate
          tag="figure"
        >
          <svg
            fill="#fff"
            className={
              classNames(
                classes.parallaxVertical,
                classes.parallaxLineSide3
              )
            }
          >
            <use xlinkHref={lineSide3} />
          </svg>
        </Parallax>
        <Parallax
          offsetYMax={100}
          offsetYMin={-200}
          slowerScrollRate
          tag="figure"
        >
          <svg
            fill="#fff"
            className={
              classNames(
                classes.parallaxVertical,
                classes.parallaxLineSide4
              )
            }
          >
            <use xlinkHref={lineSide4} />
          </svg>
        </Parallax>
      </ParallaxProvider>
    </div>
  );
}

ParallaxDeco.propTypes = {
  classes: PropTypes.object.isRequired,
};

const ParallaxDecoStyled = withStyles(styles)(ParallaxDeco);

class Technology extends React.Component {
  render() {
    const { classes, slideMode } = this.props;
    return (
      <div className={classes.tech}>
        {!slideMode && (<ParallaxDecoStyled />)}
        <div className={slideMode ? classes.fullWidth : classes.container}>
          <Title title='OUR SERVICES' desc="WE TRAIN YOUR EMPLOYEES ON-SITE AND OFF-SITE" align="center" monocolor={slideMode && true} />
          <Grid container className={classes.root} spacing={3}>
            <Grid item sm={4} xs={12}>
              <div className={classNames(classes.wool, slideMode && classes.slideMode)}>
                <figure>
                  <img src={twelv} alt="react" />
                </figure>
                <Typography variant="h5" className={classes.react}>FACILITATION</Typography>
              </div>
              <div className={classNames(classes.wool, slideMode && classes.slideMode)}>
                <figure>
                  <img src={thirt} alt="react router" />
                </figure>
                <Typography variant="h5" className={classes.router}>ASSESSMENTS</Typography>
              </div>
            </Grid>
            <Grid item sm={4} xs={12}>
              <div className={classes.centerTech}>
                <div className={classNames(classes.wool, slideMode && classes.slideMode)}>
                  <figure>
                    <img src={fort} alt="redux" />
                  </figure>
                  <Typography variant="h5" className={classes.redux}>MODERATIONS</Typography>
                </div>
                <div className={classNames(classes.wool, slideMode && classes.slideMode)}>
                  <figure>
                    <img src={fift} alt="webpack" />
                  </figure>
                  <Typography variant="h5" className={classes.webpack}>BUSINESS COACHING</Typography>
                </div>
              </div>
            </Grid>
            <Grid item sm={4} xs={12}>
              <div className={classNames(classes.wool, slideMode && classes.slideMode)}>
                <figure>
                  <img src={sixt} alt="mui" />
                </figure>
                <Typography variant="h5" className={classes.mui}>WE REGISTER</Typography>
              </div>
              <div className={classNames(classes.wool, slideMode && classes.slideMode)}>
                <figure>
                  <img src={two} alt="jss" />
                </figure>
                <Typography variant="h5" className={classes.jss}>SUSTAINABILITY</Typography>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

Technology.propTypes = {
  classes: PropTypes.object.isRequired,
  slideMode: PropTypes.bool,
};

Technology.defaultProps = {
  slideMode: false
};

export default withStyles(styles)(Technology);
