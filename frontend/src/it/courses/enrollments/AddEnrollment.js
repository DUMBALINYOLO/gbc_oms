import React, {  useEffect, useState } from "react";
import { connect } from 'react-redux';
import {  Grid, makeStyles,  } from "@material-ui/core";
import {Form, useForm } from "../../../components/formcontrols/useForm";
import  Controls  from "../../../components/formcontrols/Controls";
import {getStudentProfiles} from '../../../actions/people';
import {getCourseEnrollmentStatusChoices} from '../../../actions/choices';


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
  // demoEditor: {
  //   border: "1px solid #eee",
  //   padding: "5px",
  //   borderRadius: "2px",
  //   height: "350px"
  // }
}));


const AddEnrollment = props => {
  const { addOrEdit, recordForEdit } = props;
  const classes = useStyles();
  const { id } = props;

  const initialFValues = {

    status: '',
    student: '',
    course: id,
  }

  const validate = (fieldValues = values) => {
    let temp = { ...errors }
    if ('status' in fieldValues)
        temp.status = fieldValues.status ? "" : "This field is required."
    if ('student' in fieldValues)
        temp.student = fieldValues.student ? "" : "This field is required."
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


  const handleSubmit = e => {
      e.preventDefault()
      if (validate()) {
          addOrEdit(values, resetForm);
      }
  }

  useEffect(() => {
    if(!props.fetched) {
        props.getStudentProfiles(token);
        props.getCourseEnrollmentStatusChoices(token);
    }
    if (recordForEdit != null)
            setValues({
                ...recordForEdit
            })
  }, [recordForEdit]);



  return (
        <Form onSubmit={handleSubmit}>
              <Grid container>
                  <Grid item xs={6}>
                    <Controls.UserSelect
                        name="student"
                        label="STUDENT"
                        value={values.student}
                        onChange={handleInputChange}
                        options={props.students}
                        error={errors.student}
                    />

                  </Grid>
                  <Grid item xs={6}>
                    <Controls.DictSelect
                        name="status"
                        label="STATUS"
                        value={values.status}
                        onChange={handleInputChange}
                        options={props.statuschoices}
                        error={errors.student}
                    />

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
  );
};

const mapStateToProps = state =>({
    statuschoices: state.feechoices.courseenrollmentstatuschoices,
    students: state.people.studentprofiles,

})

export default connect(
  mapStateToProps,
  {getStudentProfiles, getCourseEnrollmentStatusChoices} )
  (AddEnrollment);
