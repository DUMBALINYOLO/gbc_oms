import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import withWidth from '@material-ui/core/withWidth';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import Grid from '@material-ui/core/Grid';
import ShowcaseCard from '../cards/ShowcaseCard';
import Title from './Title';
import styles from './landingStyle-jss';
import petal3 from '../../images/decoration/petal3.svg';
import petal4 from '../../images/decoration/petal4.svg';
import thumb1 from '../../images/screen/thumb1.jpg';
import thumb3 from '../../images/screen/thumb3.jpg';
import thumb5 from '../../images/screen/thumb5.jpg';
import thumb2 from '../../images/screen/thumb2.jpg';
import thumb4 from '../../images/screen/thumb4.jpg';
import four from './1.jpg';
import six from './3.jpg';
import seven from './4.jpg';
import eight from './8.png';
import five from './7.jpg';
import fiv from './6.jpg';


function ParallaxDeco(props) {
  const { classes } = props;
  return (
    <div className={classes.parallaxWrap}>
      <ParallaxProvider>
        <div className={classes.bannerParallaxWrap}>
          <Parallax
            offsetYMax={70}
            offsetYMin={-200}
            slowerScrollRate
            tag="figure"
          >
            <svg
              fill="#fff"
              className={
                classNames(
                  classes.parallaxVertical,
                  classes.parallaxPetal1
                )
              }
            >
              <use xlinkHref={petal3} />
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
                  classes.parallaxPetal2
                )
              }
            >
              <use xlinkHref={petal4} />
            </svg>
          </Parallax>
        </div>
      </ParallaxProvider>
    </div>
  );
}

ParallaxDeco.propTypes = {
  classes: PropTypes.object.isRequired,
};

const ParallaxDecoStyled = withStyles(styles)(ParallaxDeco);

class Showcase extends React.Component {
  render() {
    const { classes, slideMode, width } = this.props;
    return (
      <section className={classes.showcase}>
        {!slideMode && <ParallaxDecoStyled />}
        <div className={classes.container}>
          <Grid container className={classes.root} spacing={5}>
            <Grid item sm={12} md={4} xs={12}>
              <Title 
                title="OUR PORTFOLIO" 
                align={width === 'lg' ? 'center' : 'center'} 
                monocolor={slideMode && true} 
              />
              <ShowcaseCard
                title="WE LEAD"
                desc="Our clients are our lifetime partners, we grow and reach unthinkable heights with them. We help our clients not only to level the play field but catapult them into trend-setters. We value relationships more than profits!"
                action="Try Us"
                image={four}
              />
              <ShowcaseCard
                title="WE PIONEER"
                desc="At Gerere Business College, our learners ‘overall best interest would always come first, and everything we do is guided by our values and professional ethics. We allocate professional tutors/lectures in all encounters, who are well experienced and passionate in imparting knowledge to learners at various learning ladders."
                action="Visit Us"
                image={five}
              />
            </Grid>
            <Grid item sm={6} md={4} xs={12}>
              <ShowcaseCard
                title="ACCOUNTABILITY"
                desc="We hold ourselves accountable to the highest standards, by meeting our learners’ needs precisely and completely. We cultivate a working environment that provides a humane, sustainable approach to earning a living, and living in our world, for our partners, employees and for our students."
                action="Get in touch"
                image={six}
              />
              <ShowcaseCard
                title="ENTREPRENEURSHIP"
                desc="We are a solution to small and medium businesses that cannot afford the offers from lager institutions, yet we surpass any imaginable value. Our products and services remain vivid in the minds of those we service."
                action="LETS GO"
                image={eight}
              />
            </Grid>
            <Grid item sm={6} md={4} xs={12}>
              <div className={classes.lastShowcase}>
                <ShowcaseCard
                  title="STANDARDS"
                  desc="We PIONEER we set TRENDS we LEAD! ... and so, do our clients!"
                  action="LETS GO"
                  image={fiv}
                />
              </div>
            </Grid>
          </Grid>
        </div>
      </section>
    );
  }
}


Showcase.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
  slideMode: PropTypes.bool
};

Showcase.defaultProps = {
  slideMode: false
};


export default withWidth()(withStyles(styles)(Showcase));
