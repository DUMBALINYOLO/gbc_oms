import React from 'react';
import classNames from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import  GuideSlider  from '../../components/GuideSlider';
import { toggleAction, openAction, playTransitionAction } from '../../actions/uiactions';
import LeftSidebarLayout from './LeftSidebarLayout';
import {  Redirect } from 'react-router-dom'
import RightSidebarLayout from './RightSidebarLayout';
import LeftSidebarBigLayout from './LeftSidebarBigLayout';
import DropMenuLayout from './DropMenuLayout';
import MegaMenuLayout from './MegaMenuLayout';
import styles from './appStyles-jss';
import Login from '../../auth/GerereLogin';

class StudentLayout extends React.Component {
  // Initial header style
  state = {
    openGuide: false,
    appHeight: 0
  };

  componentDidMount = () => {
    const {  loadTransition } = this.props;

    // Adjust min height
    this.setState({ appHeight: window.innerHeight + 112 });

    // Set expanded sidebar menu

    // Play page transition
    loadTransition(true);

    // Execute all arguments when page changes

  }

  handleOpenGuide = () => {
    this.setState({ openGuide: true });
  };

  handleCloseGuide = () => {
    this.setState({ openGuide: false });
  };

  render() {
    const {
      classes,
      children,
      toggleDrawer,
      sidebarOpen,
      loadTransition,
      pageLoaded,
      mode,
      history,
      gradient,
      deco,
      bgPosition,
      layout,
      changeMode
    } = this.props;
    const { openGuide, appHeight } = this.state;
    const titleException = ['/app', '/app/crm-dashboard', '/app/crypto-dashboard'];

    if (!this.props.token){
      return (
        <Login />
      );
    }
    if(this.props.token !== null){
      if (this.props.userRole !== 'student'){
        if (this.props.userRole === 'principal'){
          return <Redirect to="/itdashboard" />
        }else if(this.props.userRole ==='teacher')
          return <Redirect to="/teacherdashboard" />
        }
    }
    return (
      <div
        style={{ minHeight: appHeight }}
        className={
          classNames(
            classes.appFrameInner,
            layout === 'top-navigation' || layout === 'mega-menu' ? classes.topNav : classes.sideNav,
            mode === 'dark' ? 'dark-mode' : 'light-mode'
          )
        }
      >
        <GuideSlider openGuide={openGuide} closeGuide={this.handleCloseGuide} />
            <LeftSidebarLayout
              history={history}
              toggleDrawer={toggleDrawer}
              loadTransition={loadTransition}
              changeMode={changeMode}
              sidebarOpen={sidebarOpen}
              pageLoaded={pageLoaded}
              mode={mode}
              gradient={gradient}
              deco={deco}
              bgPosition={bgPosition}
              titleException={titleException}
              handleOpenGuide={this.handleOpenGuide}
            >
              { children }
            </LeftSidebarLayout>
      </div>
    );
  }
}




const mapStateToProps = state => ({

  sidebarOpen: state.ui.sidebarOpen,
  pageLoaded: state.ui.pageLoaded,
  mode: state.ui.mode,
  gradient: state.ui.gradient,
  deco: state.ui.deco,
  layout: state.ui.layout,
  bgPosition: state.ui.bgPosition,
  token: state.auth.token,
  userRole: state.auth.userRole,

});

const mapDispatchToProps = dispatch => ({
  toggleDrawer: () => dispatch(toggleAction),
  initialOpen: bindActionCreators(openAction, dispatch),
  loadTransition: bindActionCreators(playTransitionAction, dispatch),
});

const DashboardMaped = connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentLayout);

export default (withStyles(styles)(DashboardMaped));
