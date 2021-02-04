import React from 'react';
import { fade } from '@material-ui/core/styles/colorManipulator';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import Slider from 'react-animated-slider';
import './slider.css';
import one from './images/1.jpg';
import two from './images/2.jpg';
import three from './images/3.jpg';
import four from './images/4.jpg';
import five from './images/5.jpg';

const styles = theme => ({
  tag: {
    background: fade(theme.palette.primary.light, 0.8),
    color: theme.palette.primary.dark,
    position: 'absolute',
    right: 10,
    top: 10,
    padding: theme.spacing(1),
    borderRadius: theme.rounded.big,
    fontSize: 11,
    fontWeight: theme.typography.fontWeightMedium,
    boxShadow: theme.shadows[3]
  },
  title: {
    color: theme.palette.common.white
  }
});

const content = [
  {
    title: 'Vulputate Mollis Ultricies',
    description:
    'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.',
    button: 'Watch Video',
    image: one,
    label: 'Uploaded to',
    tag: 'Just Uploaded',
    to: 'Lorem Video',
    userProfile: two,
    type: 'video',
  },
  {
    title: 'Tortor Dapibus Fermentum',
    description:
    'Cras mattis consectetur purus sit amet fermentum.',
    button: 'See Post',
    image: two,
    label: 'Posted to',
    tag: 'Newest Post',
    to: 'Ipsum Media',
    userProfile: two,
    type: 'article'
  },
  {
    title: 'Phasellus volutpat',
    description:
    'Lorem ipsum dolor sit amet',
    button: 'Read Article',
    image: three,
    label: 'Posted to',
    tag: 'Latest Article',
    to: 'Dolor Sit News',
    userProfile: three,
    type: 'article'
  }
];

function SliderWidget(props) {
  const { classes } = props;
  return (
    <div>
      <Slider className="slider-wrapper short">
        {content.map((item, index) => (
          <div
            key={index.toString()}
            className="slider-content"
            style={{ background: `url('${item.image}') no-repeat center center` }}
          >
            <span className={classes.tag}>{item.tag}</span>
            <div className="inner">
              <Typography variant="subtitle1" component="h3" className={classNames(classes.title)} gutterBottom>{item.title}</Typography>
              <Button variant="contained" color="primary">
                {item.type === 'video' && <Icon>play_arrow</Icon>}
                {item.button}
              </Button>
            </div>
            <section>
              <img src={item.userProfile} alt={item.user} />
              <span>
                {item.label}
                &nbsp;
                <strong>
                  {item.to}
                </strong>
              </span>
            </section>
          </div>
        ))}
      </Slider>
    </div>
  );
}

SliderWidget.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SliderWidget);
