import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Grid,
  Container,
  IconButton,
  Box,
  Typography,
  Tabs,
  Tab,
  Tooltip,
} from '@material-ui/core';



import hero9 from './icon.jpg';
import { withStyles } from '@material-ui/core/styles';
import Corporate from '../../containers/Templates/Corporate';
import { Redirect } from "react-router-dom";
import {authLogin} from "../../actions/auth";
import { connect } from 'react-redux';
import GerereLogin from './Login';

const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    height: '6px',
    '& > div': {
      maxWidth: 40,
      height: '4px',
      borderRadius: '25px',
      width: '100%',
      backgroundColor: '#000'
    }
  }
})(props => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />);

const StyledTab = withStyles(theme => ({
  root: {
    textTransform: 'none',
    color: theme.palette.primary[900],
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    '&:focus': {
      opacity: 1
    }
  }
}))(props => <Tab disableRipple {...props} />);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      {...other}>
      {value === index && <Box p={0}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

class Login extends React.Component {

  state = {
    value: 1
  }
  

  handleChange = (event, newValue) => {
    this.setState({value: newValue})
  };




  render(){
    const {token, userRole, authLogin} = this.props;
    const {value} = this.state;


    if (!token) {

      return (
        <Corporate>
            <div className="app-wrapper bg-royal min-vh-100">
              <div className="app-main min-vh-100">
                <div className="app-content p-0">
                  <div className="app-inner-content-layout--main">
                    <div className="flex-grow-1 w-100 d-flex align-items-center">
                      <div className="bg-composed-wrapper--content">
                        <Grid container spacing={0} className="min-vh-100">
                          <Grid
                            item
                            xs={12}
                            md={4}
                            lg={5}
                            className="d-flex align-items-center">
                            <div className="hero-wrapper w-100 bg-composed-wrapper min-vh-100">
                              <div className="flex-grow-1 w-100 d-flex align-items-center">
                                <div
                                  className="bg-composed-wrapper--image"
                                  style={{ backgroundImage: 'url(' + hero9 + ')' }}
                                />
                                <div className="bg-composed-wrapper--bg bg-premium-dark opacity-5" />
                                <div className="bg-composed-wrapper--content p-5">
                                  <div className="d-flex align-items-center">
                                    <span className="px-4 h-auto py-1 badge badge-second badge-pill">
                                      Register page
                                    </span>
                                    <Tooltip
                                      arrow
                                      title="Create your own register or login pages using the included elements."
                                      placement="right">
                                      <span className="text-white-50 pl-3">
                                        <FontAwesomeIcon
                                          icon={['far', 'question-circle']}
                                        />
                                      </span>
                                    </Tooltip>
                                  </div>
                                  <div className="text-white mt-3">
                                    <h1 className="display-4 my-3 font-weight-bold">
                                      Por que você deve criar uma conta?
                                    </h1>
                                    <p className="font-size-md mb-0 text-white-50">
                                      Uma hora livre, quando nosso poder de escolha é ilimitado e nada impede.
                                    </p>
                                    <div className="divider border-2 my-5 border-light opacity-2 rounded w-25" />
                                  </div>
                                </div>
                              </div>
                          
                            </div>
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            md={8}
                            lg={7}
                            className="d-flex align-items-center">
                            <Container maxWidth="sm">
                              <div className="pt-5 pb-4">
                                <StyledTabs
                                  value={value}
                                  indicatorColor="primary"
                                  textColor="primary"
                                  onChange={this.handleChange}>
                                  <StyledTab label="REGISTER ACCOUNT" />
                                  <StyledTab label="LOGIN" />
                                  <StyledTab label="FORGOT PASSWORD" />
                                </StyledTabs>
                              </div>
                              <TabPanel value={value} index={0}>
                                <h3 className="display-4 mb-2 font-weight-bold">
                                  REGISTER
                                </h3>
                                
                                  <GerereLogin
                                    authLogin={authLogin}
                                  />
                              </TabPanel>
                              <TabPanel value={value} index={1}>
                                <h3 className="display-4 mb-2 font-weight-bold">
                                  LOGIN
                                </h3>
                            
                                  <GerereLogin
                                    authLogin={authLogin}
                                  />

                              </TabPanel>

                              <TabPanel value={value} index={2}>
                                <h3 className="display-4 mb-2 font-weight-bold">
                                  RESET PASSWORD
                                </h3>   
                                  <GerereLogin
                                    authLogin={authLogin}
                                  />


                              </TabPanel>
                            </Container>
                          </Grid>
                        </Grid>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

        </Corporate>
      );
      

    }
    if (userRole === 'principal'){
      return <Redirect to="/itdashboard" />;
    }
    else if(userRole === 'bursar'){
        return <Redirect to="/bursardashboard" />;
    }
    else if(userRole === 'teacher'){
        return <Redirect to="/teacherdashboard" />;
    }
    else if(userRole === 'student'){
          return <Redirect to="/studentdashboard" />;
    }
    return (
      <Corporate>
          <div className="app-wrapper bg-royal min-vh-100">
            <div className="app-main min-vh-100">
              <div className="app-content p-0">
                <div className="app-inner-content-layout--main">
                  <div className="flex-grow-1 w-100 d-flex align-items-center">
                    <div className="bg-composed-wrapper--content">
                      <Grid container spacing={0} className="min-vh-100">
                        <Grid
                          item
                          xs={12}
                          md={4}
                          lg={5}
                          className="d-flex align-items-center">
                          <div className="hero-wrapper w-100 bg-composed-wrapper min-vh-100">
                            <div className="flex-grow-1 w-100 d-flex align-items-center">
                              <div
                                className="bg-composed-wrapper--image"
                                style={{ backgroundImage: 'url(' + hero9 + ')' }}
                              />
                              <div className="bg-composed-wrapper--bg bg-premium-dark opacity-5" />
                              <div className="bg-composed-wrapper--content p-5">
                                <div className="d-flex align-items-center">
                                  <span className="px-4 h-auto py-1 badge badge-second badge-pill">
                                    Register page
                                  </span>
                                  <Tooltip
                                    arrow
                                    title="Create your own register or login pages using the included elements."
                                    placement="right">
                                    <span className="text-white-50 pl-3">
                                      <FontAwesomeIcon
                                        icon={['far', 'question-circle']}
                                      />
                                    </span>
                                  </Tooltip>
                                </div>
                                <div className="text-white mt-3">
                                  <h1 className="display-4 my-3 font-weight-bold">
                                    Por que você deve criar uma conta?
                                  </h1>
                                  <p className="font-size-md mb-0 text-white-50">
                                    Uma hora livre, quando nosso poder de escolha é ilimitado e nada impede.
                                  </p>
                                  <div className="divider border-2 my-5 border-light opacity-2 rounded w-25" />
                                </div>
                              </div>
                            </div>
                        
                          </div>
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          md={8}
                          lg={7}
                          className="d-flex align-items-center">
                          <Container maxWidth="sm">
                            <div className="pt-5 pb-4">
                              <StyledTabs
                                value={value}
                                indicatorColor="primary"
                                textColor="primary"
                                onChange={this.handleChange}>
                                <StyledTab label="REGISTER ACCOUNT" />
                                <StyledTab label="LOGIN" />
                                <StyledTab label="FORGOT PASSWORD" />
                              </StyledTabs>
                            </div>
                            <TabPanel value={value} index={0}>
                              <h3 className="display-4 mb-2 font-weight-bold">
                                REGISTER AS STUDENT
                              </h3>
                              
                              <GerereLogin
                                authLogin={authLogin}
                              />
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                              <h3 className="display-4 mb-2 font-weight-bold">
                                LOGIN
                              </h3>
                          
                              <GerereLogin
                                authLogin={authLogin}
                              />

                            </TabPanel>

                            <TabPanel value={value} index={2}>
                              <h3 className="display-4 mb-2 font-weight-bold">
                                RESET PASSWORD
                              </h3>
                              
                              <GerereLogin
                                authLogin={authLogin}
                              />

                            </TabPanel>
                          </Container>
                        </Grid>
                      </Grid>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

      </Corporate>
    );

  }
};



const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    userRole: state.auth.userRole,
    token: state.auth.token,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    authLogin: (email, password) =>
      dispatch(authLogin(email, password))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
