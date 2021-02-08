import React, {  useEffect } from "react";
import { connect } from 'react-redux';
import {  Grid, makeStyles,  } from "@material-ui/core";
import {Form, useForm } from "../../components/formcontrols/useForm";
import  Controls  from "../../components/formcontrols/Controls";
import { getClasses, getStudyModeChoices} from '../../actions/classes';
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
  // demoEditor: {
  //   border: "1px solid #eee",
  //   padding: "5px",
  //   borderRadius: "2px",
  //   height: "350px"
  // }
}));

const initialFValues = {

  subject: '',
  klass: '',
  subject_teacher: '',
  status: '',

}



const AddSubject = props => {
  const { addOrEdit, recordForEdit } = props
  const classes = useStyles();

  const validate = (fieldValues = values) => {
    let temp = { ...errors }
    if ('subject' in fieldValues)
        temp.subject = fieldValues.subject ? "" : "This field is required."
    if ('klass' in fieldValues)
        temp.klass = fieldValues.klass ? "" : "This field is required."
    if ('subject_teacher' in fieldValues)
        temp.subject_teacher = fieldValues.subject_teacher ? "" : "This field is required."
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

  const {token} = props;


  const handleSubmit = e => {
      e.preventDefault()
      if (validate()) {
          addOrEdit(values, resetForm);
      }
  }

  useEffect(() => {
    if(!props.fetched) {
        props.getClasses(token);
        props.getSubjects(token);
        props.getStudyModeChoices(token);
        props.getTeacherProfiles(token);
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
                    <Controls.Select
                        name="klass"
                        label="CLASS"
                        value={values.klass}
                        onChange={handleInputChange}
                        options={props.classes}
                        error={errors.klass}
                    />
                    <Controls.Select
                        name="subject"
                        label="SUBJECT"
                        value={values.subject}
                        onChange={handleInputChange}
                        options={props.subjects}
                        error={errors.subject}
                    />
                  </Grid>
                  <Grid item xs={6}>
                      <Controls.UserSelect
                          name="subject_teacher"
                          label="SUBJECT TEACHER"
                          value={values.subject_teacher}
                          onChange={handleInputChange}
                          options={props.teachers}
                          error={errors.subject_teacher}
                      />
                      <Controls.DictSelect
                          name="status"
                          label="STATUS"
                          value={values.status}
                          onChange={handleInputChange}
                          options={props.studymodechoices}
                          error={errors.status}
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
    studymodechoices: state.classes.studymodechoices,
    classes: state.classes.classes,
    teachers: state.people.teacherprofiles,
    subjects: state.curriculums.subjects,
    token: state.auth.token,


})

export default connect(
  mapStateToProps,
  {getClasses, getTeacherProfiles, getStudyModeChoices, getSubjects} ) 
  (AddSubject);
