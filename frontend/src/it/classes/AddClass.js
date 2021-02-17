import React, {  useEffect } from "react";
import { connect } from 'react-redux';
import {  Grid, makeStyles,  } from "@material-ui/core";
import {Form, useForm } from "../../components/formcontrols/useForm";
import  Controls  from "../../components/formcontrols/Controls";
import { getStudentsClassStatusChoices } from '../../actions/choices';
import { getStreams } from '../../actions/classes';
import {  getTeacherProfiles } from '../../actions/people';



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

const initialFValues = {

    name: '',
    stream: '',
    max_population: '',
    class_teacher: '',
    year: '',
    status: '',

}



const AddClass = props => {
  const { addOrEdit, recordForEdit } = props
  const classes = useStyles();

  const validate = (fieldValues = values) => {
    let temp = { ...errors }
    if ('name' in fieldValues)
        temp.name = fieldValues.name ? "" : "This field is required."
    if ('stream' in fieldValues)
        temp.stream = fieldValues.stream ? "" : "This field is required."
    if ('max_population' in fieldValues)
        temp.max_population = fieldValues.max_population ? "" : "This field is required."
    if ('class_teacher' in fieldValues)
        temp.class_teacher = fieldValues.class_teacher ? "" : "This field is required."
    if ('year' in fieldValues)
        temp.year = fieldValues.year ? "" : "This field is required."
    if ('status' in fieldValues)
        temp.status = fieldValues.status ? "" : "This field is required."
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
        props.getStudentsClassStatusChoices(props.token);
        props.getStreams(props.token);
        props.getTeacherProfiles(props.token);
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
                      <Controls.Input
                          name="name"
                          label="NAME"
                          value={values.name}
                          onChange={handleInputChange}
                          error={errors.fullName}
                      />
                      <Controls.Input
                          label="POPULATION LIMIT"
                          name="max_population"
                          value={values.max_population}
                          onChange={handleInputChange}
                          error={errors.max_population}
                      />
                      <Controls.DictSelect
                          name="status"
                          label="STATUS"
                          value={values.status}
                          onChange={handleInputChange}
                          options={props.studentclassstatuschoices}
                          error={errors.status}
                      />
                  </Grid>
                  <Grid item xs={6}>
                      <Controls.GradeSelect
                          name="stream"
                          label="GRADE"
                          value={values.stream}
                          onChange={handleInputChange}
                          options={props.streams}
                          error={errors.stream}
                      />
                      <Controls.UserSelect
                          name="class_teacher"
                          label="CLASS TEACHER"
                          value={values.class_teacher}
                          onChange={handleInputChange}
                          options={props.adminteachers}
                          error={errors.class_teacher}
                      />
                      <Controls.Input
                          label="YEAR"
                          name="year"
                          value={values.year}
                          onChange={handleInputChange}
                          error={errors.year}
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
    streams: state.classes.streams,
    studentclassstatuschoices: state.classes.studentclassstatuschoices,
    adminteachers: state.people.teacherprofiles,
    token: state.auth.token

})

export default connect(
    mapStateToProps,
    { getTeacherProfiles, getStreams, getStudentsClassStatusChoices } )
    (AddClass);
