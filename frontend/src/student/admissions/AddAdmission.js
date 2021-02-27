import React, {  useEffect } from "react";
import { connect } from 'react-redux';
import {  Grid, makeStyles, Paper, } from "@material-ui/core";
import {Form, useForm } from "../../components/formcontrols/useForm";
import  Controls  from "../../components/formcontrols/Controls";
import { getClasses} from '../../actions/classes';
import {addAdmission} from '../../actions/admissions';
import StudentLayout from '../layout/StudentLayout';



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  my3: {
    margin: "1.3rem 0"
  },
  mb3: {
    margin: "1.3rem 0"
  },
  mb0: {
    marginBottom: 0
  },
  mRight: {
    marginRight: ".85rem"
  },
  p1: {
    padding: ".85rem"
  }
}));





const AddAdmission = props => {
  const classes = useStyles();
  const {token, email} =props;

  const initialFValues = {
    student: email,
    klass: '',
  }

  const validate = (fieldValues = values) => {
    let temp = { ...errors }
    if ('klass' in fieldValues)
        temp.klass = fieldValues.klass ? "" : "This field is required."
    setErrors({
        ...temp
    })

    if (fieldValues === values)
        return Object.values(temp).every(x => x === "")
  }

  const {
      values,
      setValues,
      errors,
      setErrors,
      handleInputChange,
      resetForm
  } = useForm(initialFValues, true, validate);

  const addOrEdit = (admission, resetForm, token) => {
      props.addAdmission(admission, token)
      resetForm()
  }


  const handleSubmit = e => {
      e.preventDefault()
      if (validate()) {
          addOrEdit(values, resetForm);
      }
  }

  useEffect(() => {
    if(!props.fetched) {
        props.getClasses(token);
    }
  }, []);



  return (
      <StudentLayout>
        <Paper>
          <Form onSubmit={handleSubmit}>
                <Grid container>
                    <Grid item xs={12}>
                      <Controls.Select
                          name="klass"
                          label="CLASS"
                          value={values.klass}
                          onChange={handleInputChange}
                          options={props.klasses}
                          error={errors.klass}
                      />
                    </Grid>
                    <Grid item xs={6}>
                        <div>
                            <Controls.Button
                                type="submit"
                                text="Submit" />
                            <Controls.Button
                                text="Reset"
                                color="default"
                                onClick={resetForm} />
                        </div>
                    </Grid>
                </Grid>
            </Form>
        </Paper>
      </StudentLayout>
  );
};

const mapStateToProps = state =>({
    klasses: state.classes.classes,
    token: state.auth.token,
    email: state.auth.email

})

export default connect(
  mapStateToProps,
  {getClasses, addAdmission} )
  (AddAdmission);
