import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import classNames from 'classnames';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import styles from './cardStyle-jss'




class AdvertCard extends React.Component {
  render() {
    const {
      classes,
      thumbnail,
      full_name,
      description,
      status,
      list,
      detailOpen,
      width,
    } = this.props;
    return (
      <Card className={classNames(classes.cardProduct, 'bg-royal', 'card-box-hover-rise', isWidthUp('sm', width) && list ? classes.cardList : '')}>
        <div className={classes.status}>
          {status}
        </div>
        <CardMedia
          className={classes.mediaProduct}

          image={thumbnail}
          title={full_name}
        />
        <CardContent className={classes.floatingButtonWrap}>
          <h8 style={{textAlign: 'center'}}>
            {full_name}
          </h8>   
          
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
              VISIT PAGE
            </Button>
          </div>
        </CardActions>
      </Card>
    );
  }
}


const AdvertCardResponsive = withWidth()(AdvertCard);
export default withStyles(styles)(AdvertCardResponsive);
