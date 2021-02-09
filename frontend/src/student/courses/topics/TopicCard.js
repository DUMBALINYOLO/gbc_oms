import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import classNames from 'classnames';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import styles from './cardStyles-jss'
import topics from './topics.jpg';



class CourseCard extends React.Component {
  render() {
    const {
      classes,
      title,
      id,
      description,
      status,
      list,
      detailOpen,
      width,
      editItem,
    } = this.props;
    return (
      <Card className={classNames(classes.cardProduct, isWidthUp('sm', width) && list ? classes.cardList : '')}>
        <div className={classes.status}>
          {status}
        </div>
        <CardMedia
          className={classes.mediaProduct}
          image={topics}
          title={title}
        />
        <CardContent className={classes.floatingButtonWrap}>
          <Typography noWrap gutterBottom variant="h5" className={classes.title} component="h2">
            {title}
          </Typography>
          <Typography component="p" className={classes.desc}>
            {description}
          </Typography>
        </CardContent>
        <CardActions className={classes.price}>
          <div className={classes.rightAction}>
            <Button
              size="small"
              variant="outlined"
              color="secondary"
              onClick={detailOpen}
            >
              See More
            </Button>
          </div>
        </CardActions>
      </Card>
    );
  }
}


const CourseCardResponsive = withWidth()(CourseCard);
export default withStyles(styles)(CourseCardResponsive);
