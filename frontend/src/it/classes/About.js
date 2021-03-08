import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import LinearProgress from '@material-ui/core/LinearProgress';
import Fingerprint from '@material-ui/icons/Fingerprint';
import School from '@material-ui/icons/School';
import LocationOn from '@material-ui/icons/LocationOn';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';
import Check from '@material-ui/icons/Check';
import PapperBlock from '../../components/PapperBlock/PapperBlock';
import styles from '../../components/Profile/profile-jss';

class About extends React.Component {
    render() {
      const { classes, data } = this.props;
      return (
        <Grid
          container
          alignItems="flex-start"
          justify="flex-start"
          direction="row"
          spacing={3}
        >
          <Grid item md={7} xs={12}>
            <div>
              <h1>Soon....</h1>
            </div>
          </Grid>

          <Grid item md={5} xs={12}>
            {/* Profile Progress */}
            <div className={classes.progressRoot}>
              <Paper className={classes.styledPaper} elevation={4}>
                <Typography className={classes.title} variant="h5" component="h3">
                </Typography>
                <Grid container justify="center">
                  <Chip
                    avatar={(
                      <Avatar>
                        <Check />
                      </Avatar>
                    )}
                    label="PROGRESS IS  A PROCCESS"
                    className={classes.chip}
                    color="primary"
                  />
                </Grid>
                <LinearProgress variant="determinate" className={classes.progress} value={60} />
              </Paper>
            </div>
            {/* ----------------------------------------------------------------------*/}
            {/* About Me */}
            <PapperBlock title='NAME' icon="ios-contact-outline" whiteBg noMargin desc={data.name}>
              <Divider className={classes.divider} />
              <List dense className={classes.profileList}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <School />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="STREAM" secondary={data.stream} />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <Fingerprint />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="ID" secondary={data.id} />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <LocationOn />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="STATUS" secondary={data.status} />
                </ListItem>
              </List>
            </PapperBlock>
            <Divider className={classes.divider} />
          </Grid>
        </Grid>
      );
    }
  }


  export default withStyles(styles)(About);
