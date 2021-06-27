import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import classNames from 'classnames';
import Card from '@material-ui/core/Card';
import ReactGoogleSlides from "react-google-slides";
import styles from './cardStyles-jss'




class CourseCard extends React.Component {
  render() {
    const {
      classes,
      title,
      list,
      width,
      slide
    } = this.props;
    return (
      <Card className={classNames(classes.cardProduct, isWidthUp('sm', width) && list ? classes.cardList : '')}>
            <div className={classes.status}>
            {title}
            </div>
            <ReactGoogleSlides
                width='100%'
                height={480}
                slidesLink={slide}
                slideDuration={5000}
                position={1}
                showControls
                loop
            />
        </Card>
    

    );
  }
}


const CourseCardResponsive = withWidth()(CourseCard);
export default withStyles(styles)(CourseCardResponsive);
