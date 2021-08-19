import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Slider from 'react-animated-slider';
import imgApi from '../../api/images/photos';
import './styles.css';
import Title from './Title';
import styles from './landingStyle-jss';
import lineside1 from '../../images/decoration/lineSide1.svg';
import lineside2 from '../../images/decoration/lineSide2.svg';
import nine from './5.jpg';
import ten from './6.jpg';
import leven from './7.jpg';

const content = [
  {
    title: 'The openness of the instructor, and manner at which each question is treated makes one want to ask more, because the response will be more than what was asked. Everyone in class is made to feel important and relevant. This is very encouraging.',
    image: nine,
    user: 'NDUDUZO',
  },
  {
    title: 'Thank you to management, this program has opened my eyes in many aspects of my role within.... I’m highly appreciative of the opportunity',
    image: ten,
    user: 'LUFUNO',
  },
  {
    title: 'Change management should be highlighted especially where potential traumatic events are taking place. And this is what Gerere opened my eyes to',
    image: nine,
    user: 'LERATO',
  },
  {
    title: 'Understanding conflict management, the effectiveness of good change management, conducting good meetings and better interactions with our teams. This has been time well spent with Gerere',
    image: nine,
    user: 'VRIES',
  },
  {
    title: 'I really enjoyed the Change Implementation and Advanced Communication sections of this course. At Gerere you are prepared to be flexible and attentive',
    image: nine,
    user: 'SANDRA',
  },
  {
    title: 'In the event there are managers that have not yet been on this programme, I think it would be really useful for excerpts of the training to be condensed and management to attend this training. Especially managers appointed from outside the company and new management corps. It would also be particularly useful if employees could be rotated based on their leadership style to areas that can benefit greatly from their preferred / specific leadership style.',
    image: nine,
    user: 'SANDILE',
  },
  {
    title: 'This is of good standard and valuable and a lot of staff can  benefit from it. Where possible a refresher course should be offered for those that wish to attend as the concepts covered are of great value',
    image: nine,
    user: 'SANDILE',
  },

];

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
                classes.parallaxLineSide1
              )
            }
          >
            <use xlinkHref={lineside1} />
          </svg>
        </Parallax>
        <Parallax
          offsetYMax={100}
          offsetYMin={-350}
          slowerScrollRate
          tag="figure"
        >
          <svg
            fill="#fff"
            className={
              classNames(
                classes.parallaxVertical,
                classes.parallaxLineSide2
              )
            }
          >
            <use xlinkHref={lineside2} />
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

class Testimonials extends React.Component {
  render() {
    const { classes, slideMode } = this.props;
    return (
      <div className={classes.testimonials}>
        {!slideMode && (<ParallaxDecoStyled />)}
        <div className={!slideMode ? classes.container : classes.fullSliderContent}>
          <Title title="WHAT OUR CUSTOMERS SAY" align="center" monocolor={slideMode && true} />
          <div className={classes.sliderWrap}>
            <Slider className="slider-wrapper">
              {content.map((item, index) => (
                <div
                  key={index.toString()}
                  className="slider-content"
                  style={{ background: `url('${item.image}') no-repeat center center` }}
                >
                  <Typography variant="h6" component="span" gutterBottom>{item.title}</Typography>
                  <IconButton aria-label="Play/pause" className={classes.playIcon}>
                    <PlayArrowIcon />
                  </IconButton>
                  <p className={classNames(classes.videoCaption, slideMode ? classes.mono : classes.color)}>
                    
                    <Typography component="span">{item.user}</Typography>
                  </p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

Testimonials.propTypes = {
  classes: PropTypes.object.isRequired,
  slideMode: PropTypes.bool,
};

Testimonials.defaultProps = {
  slideMode: false
};

export default withStyles(styles)(Testimonials);
