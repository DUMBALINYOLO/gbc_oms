import React, {  useEffect } from "react";
import { connect } from 'react-redux';
import {  Grid, makeStyles,  } from "@material-ui/core";
import {Form, useForm } from "../../components/formcontrols/useForm";
import  Controls  from "../../components/formcontrols/Controls";
import { getGeneralGradingTypeChoices } from '../../actions/choices';
import { getClasses } from '../../actions/classes';
import { getTeacherProfiles } from '../../actions/people';
import { getSubjects } from '../../actions/curriculums';


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
    klass: '',
    total_marks: '',
    type: '',
    subject: '',
    recorded_by: '',

}

const AddGrade = props => {
  const { addOrEdit, recordForEdit } = props
  const classes = useStyles();

  const validate = (fieldValues = values) => {
    let temp = { ...errors }
    if ('name' in fieldValues)
        temp.name = fieldValues.name ? "" : "This field is required."
    if ('klass' in fieldValues)
        temp.klass = fieldValues.klass ? "" : "This field is required."
    if ('type' in fieldValues)
        temp.type = fieldValues.type ? "" : "This field is required."
    if ('total_marks' in fieldValues)
        temp.total_marks = fieldValues.total_marks ? "" : "This field is required."
    if ('subject' in fieldValues)
        temp.subject = fieldValues.subject ? "" : "This field is required."
    if ('recorded_by' in fieldValues)
        temp.recorded_by = fieldValues.recorded_by ? "" : "This field is required."
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
        props.getClasses();
        props.getTeacherProfiles();
        props.getSubjects();
        props.getGeneralGradingTypeChoices();
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
                          error={errors.name}
                      />
                      <Controls.Input
                          label="TOTAL MARKS"
                          name="total_marks"
                          value={values.total_marks}
                          onChange={handleInputChange}
                          error={errors.total_marks}
                      />
                      <Controls.DictSelect
                          name="type"
                          label="TYPE"
                          value={values.type}
                          onChange={handleInputChange}
                          options={props.generalgradingtypechoices}
                          error={errors.type}
                      />
                  </Grid>
                  <Grid item xs={6}>
                      <Controls.Select
                          name="subject"
                          label="SUBJECT"
                          value={values.subject}
                          onChange={handleInputChange}
                          options={props.subjects}
                          error={errors.subject}
                      />
                      <Controls.Select
                          name="klass"
                          label="CLASS"
                          value={values.klass}
                          onChange={handleInputChange}
                          options={props.classes}
                          error={errors.klass}
                      />
                      <Controls.UserSelect
                          name="recorded_by"
                          label="TEACHER"
                          value={values.recorded_by}
                          onChange={handleInputChange}
                          options={props.teacherprofiles}
                          error={errors.recorded_by}
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
    generalgradingtypechoices: state.feechoices.generalgradingtypechoices,
    classes: state.classes.classes,
    teacherprofiles: state.people.teacherprofiles,
    subjects: state.curriculums.subjects,


})

export default connect(
    mapStateToProps,
    {getClasses, getGeneralGradingTypeChoices, getTeacherProfiles, getSubjects} )
    (AddGrade);
