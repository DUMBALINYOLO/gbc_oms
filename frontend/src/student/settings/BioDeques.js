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
import Person from '@material-ui/icons/Person';
import LocationCity from '@material-ui/icons/LocationCity';
import LocalLibrary from '@material-ui/icons/LocalLibrary';
import { withStyles } from '@material-ui/core/styles';
import settingList from '../../api/ui/settingList';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import dummy from '../../api/dummy/dummyContents';
import DetailSettings from './DetailSettings';
import styles from './settings-jss';
import StudentLayout from '../layout/StudentLayout';
import link from '../../api/ui/link';


class CourseDeques extends React.Component {
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
      <StudentLayout>
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
                    <h1>BIBLIOGRAPHY DASHBOARD</h1>
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
                    <input className={classes.input} placeholder="FIND BIOS" onChange={(event) => this.handleSearch(event)} />
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
                      to={link.authorz}
                    >
                      <span className={classes.text}>
                        AUTHOR
                        <Typography variant="caption" className={classes.info}>
                          <Person />
                        </Typography>
                      </span>
                    </Button>
                  </Grid>
                  <Grid item sm={4} xs={12}>
                    <Button
                      color="secondary"
                      className={classes.button}
                      component={Link}
                      to={link.publisherz}
                    >
                      <span className={classes.text}>
                        PUBLISHER
                        <Typography variant="caption" className={classes.info}>
                          <LocalLibrary />
                        </Typography>
                      </span>
                    </Button>
                  </Grid>
                  <Grid item sm={4} xs={12}>
                    <Button
                      color="secondary"
                      className={classes.button}
                      component={Link}
                      to={link.citiez}
                    >
                      <span className={classes.text}>
                        CITY
                        <Typography variant="caption" className={classes.info}>
                          <LocationCity />
                        </Typography>
                      </span>
                    </Button>
                  </Grid>
              </Grid>
            </section>
          </Paper>
        </div>
      </StudentLayout>

    );
  }
}

export default withStyles(styles)(CourseDeques);
