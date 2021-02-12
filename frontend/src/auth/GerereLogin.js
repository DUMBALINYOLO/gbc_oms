import React, {  useEffect } from "react";
import { connect } from 'react-redux';
import {  Grid, makeStyles,  Paper} from "@material-ui/core";
import {Form, useForm } from ".././components/formcontrols/useForm";
import  Controls  from ".././components/formcontrols/Controls";
import TextField from '@material-ui/core/TextField';
import { Redirect } from "react-router-dom";
import {authLogin} from ".././actions/auth";
import PublicLayout from '.././public/layout/InformationTechnologyLayout';

class GerereLogin extends React.Component {
    state = {
    email: '',
    password: '',
    }
    
    onSubmit = e =>{
      e.preventDefault();
      this.props.onAuth(this.state.email, this.state.password);
      console.log(this.state.email, this.state.password)
    };

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  

  render() {
    const {email, password} = this.state;
    const { userRole } = this.props;
    let errorMessage = null;
    if (this.props.error) {
      errorMessage = <p>{this.props.error.message}</p>;
    }
    console.log(userRole)
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
        <PublicLayout>
          <Paper>
            <Form onSubmit={this.onSubmit}>
              <Grid container>
                  <Grid item xs={12}>
                      <Controls.Input
                          label="Email"
                          className="form-control"
                          name="email"
                          onChange={this.onChange}
                          value={email}
                      />                
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      onChange={this.onChange}
                      value={password}
                      label="Password"
                      name="password"
                      size="small"
                      type="password"
                      variant="outlined"
                    />                    
                    <div>
                      <Controls.Button
                          type="submit"
                          text="Submit" />
                    </div>
                  </Grid>
              </Grid>
            </Form>
          </Paper>
        </PublicLayout>
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
    onAuth: (email, password) =>
      dispatch(authLogin(email, password))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GerereLogin)