import React from 'react';
import { PropTypes } from 'prop-types';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import brand from '../../api/dummy/brand';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles';
import settingList from '../../api/ui/settingList';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import dummy from '../../api/dummy/dummyContents';
import DetailSettings from './DetailSettings';
import styles from './settings-jss';
import EmojiPeople from '@material-ui/icons/EmojiPeople';
import Wc from '@material-ui/icons/Wc';
import Streetview from '@material-ui/icons/Streetview';
import RecordVoiceOver from '@material-ui/icons/RecordVoiceOver';
import School from '@material-ui/icons/School';
import InformationTechnologyLayout from '../layout/InformationTechnologyLayout';
import link from '../../api/ui/link';


class UserDeques extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      openScaleConfig: false,
      checked: ['switch', 'check2'],
      keyword: '',
      settingTitle: 'Settings'
    };
  }

  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked,
    });
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleScaleConfigClickOpen = (title) => {
    let {openScaleConfig, settingTitle } = this.state;
    this.setState({ openScaleConfig: true, settingTitle: title });
  };

  handleScaleConfigClose = () => {
    let {openScaleConfig } = this.state;
    this.setState({ openScaleConfig: false });
  };

  handleSearch = event => {
    this.setState({ keyword: event.target.value.toLowerCase() });
  }

  render() {
    const title = brand.name;
    const description = brand.desc;
    const { classes } = this.props;
    const { keyword, openScaleConfig, settingTitle } = this.state;
    return (
      <InformationTechnologyLayout>
        <div>
          <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
          </Helmet>
          <Paper className={classes.paperStyled} elevation={0}>
            <Grid container spacing={2}>
              <Grid item sm={4} xs={12}>
                <div className={classes.profile}>

                  <div className={classes.profileText}>
                    <h1>STAFF USER DASHBOARD</h1>
                  </div>
                </div>
              </Grid>
              <Grid item sm={8} xs={12}>
                <div className={classes.quickAccess}>

                </div>
              </Grid>
            </Grid>
          </Paper>
          <Paper className={classes.root} elevation={4}>
            <AppBar position="static" color="inherit" className={classes.searchSettings}>
              <Toolbar>
                <div className={classes.flex}>
                  <div className={classes.wrapper}>
                    <div className={classes.search}>
                      <SearchIcon />
                    </div>
                    <input className={classes.input} placeholder="FIND USERS" onChange={(event) => this.handleSearch(event)} />
                  </div>
                </div>
              </Toolbar>
            </AppBar>
            <section className={classes.settingList}>
              <Grid container spacing={2}>
                  <Grid item sm={4} xs={12}>
                    <Button
                      color="secondary"
                      className={classes.button}
                      component={Link}
                      to={link.admins}
                    >
                      <span className={classes.text}>
                        ADMINISTRATION
                        <Typography variant="caption" className={classes.info}>
                          <School/>
                        </Typography>
                      </span>
                    </Button>
                  </Grid>
                  <Grid item sm={4} xs={12}>
                    <Button
                      color="secondary"
                      className={classes.button}
                      component={Link}
                      to={link.bursars}
                    >
                      <span className={classes.text}>
                        BURSAR
                        <Typography variant="caption" className={classes.info}>
                          <Streetview/>
                        </Typography>
                      </span>
                    </Button>
                  </Grid>
                  <Grid item sm={4} xs={12}>
                    <Button
                      color="secondary"
                      className={classes.button}
                      component={Link}
                      to={link.teachers}
                    >
                      <span className={classes.text}>
                        TEACHERS
                        <Typography variant="caption" className={classes.info}>
                          <RecordVoiceOver/>
                        </Typography>
                      </span>
                    </Button>
                  </Grid>
                  <Grid item sm={4} xs={12}>
                    <Button
                      color="secondary"
                      className={classes.button}
                      component={Link}
                      to={link.parents}
                    >
                      <span className={classes.text}>
                        PARENTS
                        <Typography variant="caption" className={classes.info}>
                          <Wc/>
                        </Typography>
                      </span>
                    </Button>
                  </Grid>
                  <Grid item sm={4} xs={12}>
                    <Button
                      color="secondary"
                      className={classes.button}
                      component={Link}
                      to={link.students}
                    >
                      <span className={classes.text}>
                        STUDENTS
                        <Typography variant="caption" className={classes.info}>
                          <EmojiPeople/>
                        </Typography>
                      </span>
                    </Button>
                  </Grid>
              </Grid>
            </section>
          </Paper>
        </div>
      </InformationTechnologyLayout>

    );
  }
}



export default withStyles(styles)(UserDeques);
