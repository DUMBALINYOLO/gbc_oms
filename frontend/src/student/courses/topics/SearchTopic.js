import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import ViewList from '@material-ui/icons/ViewList';
import GridOn from '@material-ui/icons/GridOn';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import styles from './search-jss';

class SearchCourse extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl, } = this.state;
    const {
      classes,
      courseData,
      handleSwitchView,
      listView
    } = this.props;


    return (
      <div className={classes.root}>
        <AppBar position="static" color="inherit">
          <Toolbar>
            <Hidden mdDown>
              <div className={classes.toggleContainer}>
                <ToggleButtonGroup value={listView} exclusive onChange={handleSwitchView}>
                  <ToggleButton value="grid">
                    <GridOn />
                  </ToggleButton>
                  <ToggleButton value="list">
                    <ViewList />
                  </ToggleButton>
                </ToggleButtonGroup>
              </div>
            </Hidden>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}



export default withStyles(styles)(SearchCourse);
