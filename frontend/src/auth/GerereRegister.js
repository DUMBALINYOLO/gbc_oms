import React, {  useEffect } from "react";
import { connect } from 'react-redux';
import {  Grid, makeStyles,  Paper} from "@material-ui/core";
import {Form, useForm } from ".././components/formcontrols/useForm";
import  Controls  from ".././components/formcontrols/Controls";
import TextField from '@material-ui/core/TextField';
import { Redirect } from "react-router-dom";
import {addStudent} from ".././actions/people";
import PublicLayout from '.././public/layout/InformationTechnologyLayout';

class GerereRegister extends React.Component {
    state = {
      email: '',
      username:'',
      password: '',
    }

    onSubmit = e =>{
      e.preventDefault();
      const {email,username, password} = this.state;
      const transaction = {email, username, password}
      this.props.addStudent(transaction);
      this.setState({
        email: '',
        username:'',
        password: '',
      })
    };

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });


  render() {
    const {email, password, username} = this.state;
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
                      <Controls.Input
                          label="USERNAME"
                          className="form-control"
                          name="username"
                          onChange={this.onChange}
                          value={username}
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



export default connect(
  null,
  {addStudent}
)(GerereRegister)
