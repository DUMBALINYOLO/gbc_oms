import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PapperBlock  from '../../components/PapperBlock/PapperBlock';
import TextField from '@material-ui/core/TextField';
import styles from './helpSupport-jss';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
// validation functions

const email = value => (
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email'
    : undefined
);


class ContactForm extends Component {
  render() {
    const {
      classes,
    } = this.props;
    return (
      <PapperBlock title="Ask a question" whiteBg icon="ios-call-outline" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed urna in justo euismod condimentum.">
        <Grid>
          <FormControl className={classes.formControl}>
            <TextField
              fullWidth
              id="standard-name"
              label="Who are You?"
              className={classes.textField}
              required
              margin="normal"
            />
          </FormControl>
          <FormControl className={classes.formControl}>
            <TextField
              fullWidth
              id="standard-email"
              label="You'r email?"
              className={classes.textField}
              value={email}
              required
              margin="normal"
            />
          </FormControl>
        </Grid>
        <Grid item lg={6} xs={12}>
          <FormControl className={classes.formControl}>
            <TextField
              fullWidth
              id="standard-multiline-flexible"
              label="Messages"
              multiline
              rows="4"
              className={classes.textField}
              margin="normal"
            />
          </FormControl>
          <div className={classes.btnArea}>
            <Button variant="contained" size="large" className={classes.button} color="secondary">Send</Button>
          </div>
        </Grid>
          
      </PapperBlock>
    );
  }
}

ContactForm.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
};




export default withStyles(styles)(ContactForm);
