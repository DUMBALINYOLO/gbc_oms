import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { bindActionCreators } from 'redux';
import { toggleAction, playTransitionAction } from '../../actions/uiactions';
import styles from './appStyles-jss';
import Header from '../../components/landing/Header';
import Decoration from './Decoration';

class ProfileBag extends React.Component {
  state = {
    transform: 0,
    openGuide: false
  };

  componentDidMount = () => {
    // const { history } = this.props;
    // Scroll content to top
    window.addEventListener('scroll', this.handleScroll);
    // Execute all arguments when page changes
    // this.unlisten = history.listen(() => {
    //   window.scrollTo(0, 0);
    // });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const doc = document.documentElement;
    const scroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    this.setState({
      transform: scroll
    });
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
      mode,
      gradient,
      deco,
      layout,

    } = this.props;
  
    return (
      <>
      <Header /> 
        <div className={classes.appFrameLanding} id="mainContent">
          
          <Decoration
            mode={mode}
            gradient={gradient}
            decoration={deco}
            bgPosition="header"
            horizontalMenu={layout === 'top-navigation' || layout === 'mega-menu'}
          />

          <div className={classes.blogWrap}>
            {children}
          </div>
        </div>
    </>
    );
  }
}

ProfileBag.propTypes = {
  classes: PropTypes.object.isRequired,
  // children: PropTypes.node.isRequired,
  // mode: PropTypes.string.isRequired,
  // gradient: PropTypes.bool.isRequired,
  // deco: PropTypes.bool.isRequired,
  // layout: PropTypes.string.isRequired,
  // // history: PropTypes.object.isRequired,
  // changeMode: PropTypes.func.isRequired,
  // toggleDrawer: PropTypes.func.isRequired,
  // sidebarOpen: PropTypes.bool.isRequired,
  // loadTransition: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
  sidebarOpen: state.ui.sidebarOpen,
  pageLoaded: state.ui.pageLoaded,
  mode: state.ui.type,
  deco: state.ui.deco,
  gradient: state.ui.gradient,
  decoration: state.ui.decoration,
  layout: state.ui.layout,

});

const mapDispatchToProps = dispatch => ({
  toggleDrawer: () => dispatch(toggleAction),
  loadTransition: bindActionCreators(playTransitionAction, dispatch),
});

const BlogMapped = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileBag);

export default (withStyles(styles)(BlogMapped));
