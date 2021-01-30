import React from 'react';
import classNames from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import  GuideSlider  from '../../components/GuideSlider';
import { toggleAction, openAction, playTransitionAction } from '../../actions/uiactions';
import LeftSidebarLayout from './LeftSidebarLayout';
import RightSidebarLayout from './RightSidebarLayout';
import LeftSidebarBigLayout from './LeftSidebarBigLayout';
import DropMenuLayout from './DropMenuLayout';
import MegaMenuLayout from './MegaMenuLayout';
import styles from './appStyles-jss';

class TeacherLayout extends React.Component {
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
    // const parts = history.location.pathname.split('/');
    // const place = parts[parts.length - 1].replace('-', ' ');
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
        { /* Left Sidebar Layout */
          layout === 'left-sidebar' && (
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
          )
        }
        { /* Left Big-Sidebar Layout */
          layout === 'big-sidebar' && (
            <LeftSidebarBigLayout
              history={history}
              toggleDrawer={toggleDrawer}
              loadTransition={loadTransition}
              changeMode={changeMode}
              sidebarOpen={sidebarOpen}
              pageLoaded={pageLoaded}
              gradient={gradient}
              deco={deco}
              bgPosition={bgPosition}
              mode={mode}
              titleException={titleException}
              handleOpenGuide={this.handleOpenGuide}
            >
              { children }
            </LeftSidebarBigLayout>
          )
        }
        { /* Right Sidebar Layout */
          layout === 'right-sidebar' && (
            <RightSidebarLayout
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
            </RightSidebarLayout>
          )
        }
        { /* Top Bar with Dropdown Menu */
          layout === 'top-navigation' && (
            <DropMenuLayout
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
            </DropMenuLayout>
          )
        }
        { /* Top Bar with Mega Menu */
          layout === 'mega-menu' && (
            <MegaMenuLayout
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
            </MegaMenuLayout>
          )
        }
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

});

const mapDispatchToProps = dispatch => ({
  toggleDrawer: () => dispatch(toggleAction),
  initialOpen: bindActionCreators(openAction, dispatch),
  loadTransition: bindActionCreators(playTransitionAction, dispatch),
});

const DashboardMaped = connect(
  mapStateToProps,
  mapDispatchToProps
)(TeacherLayout);

export default (withStyles(styles)(DashboardMaped));
