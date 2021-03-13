import React, {  useEffect } from "react";
import { connect } from 'react-redux';
import {  Grid, makeStyles,  Paper} from "@material-ui/core";
import {Form, useForm } from ".././components/formcontrols/useForm";
import  Controls  from ".././components/formcontrols/Controls";
import TextField from '@material-ui/core/TextField';
import { Redirect } from "react-router-dom";
import {addStudent} from ".././actions/people";
import { Avatar, Button, Typography ,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import PublicLayout from '.././public/layout/InformationTechnologyLayout';
import link from '../api/ui/link';

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
      const paperStyle={padding :20,height:'70vh',width:380, margin:"20px auto"}
      const avatarStyle={backgroundColor:'#1bbd7e'}
      const btnstyle={margin:'8px 0'}
      const {email, password, username} = this.state;

    return(
      <PublicLayout>
        <form onSubmit={this.onSubmit}>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Student Registration</h2>
                </Grid>
                <TextField 
                  label="Email"
                  placeholder='Enter Email' 
                  fullWidth required
                  onChange={this.onChange}
                  value={email}
                  name = "email"
                />
                <TextField 
                  label="USERNAME"
                  placeholder='Enter Username' 
                  fullWidth required
                  name="username"
                  onChange={this.onChange}
                  value={username}
                />
                <TextField 
                  label='Password' 
                  placeholder='Enter password' 
                  type='password' 
                  fullWidth required
                  onChange={this.onChange}
                  value={password}
                  name = "password"
                />
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign Up</Button>
                <Typography > Do you have an account ?
                     <Link to={link.signup} >
                        Sign In 
                </Link>
                </Typography>
            </Paper>
        </form>
      </PublicLayout>
    )
  }
}

export default connect(
  null,
  {addStudent}
)(GerereRegister)

