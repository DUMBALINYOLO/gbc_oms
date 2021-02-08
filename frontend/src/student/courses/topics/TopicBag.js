import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { bindActionCreators } from 'redux';
import { toggleAction, playTransitionAction } from '../../../actions/uiactions';
import styles from './appStyles-jss';
import StudentLayout from '../../layout/StudentLayout';



class AttendanceBag extends React.Component {
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

    } = this.props;

    return (
      <>
      <StudentLayout>
        <div className={classes.appFrameLanding} id="mainContent">
          <div className={classes.blogWrap}>
            {children}
          </div>
        </div>
      </StudentLayout>
    </>
    );
  }
}

AttendanceBag.propTypes = {
  classes: PropTypes.object.isRequired,
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
)(AttendanceBag);

export default (withStyles(styles)(BlogMapped));
