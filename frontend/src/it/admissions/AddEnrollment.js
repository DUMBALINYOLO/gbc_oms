import React, {  useEffect } from "react";
import { connect } from 'react-redux';
import {  Grid, makeStyles,  } from "@material-ui/core";
import {Form, useForm } from "../../components/formcontrols/useForm";
import  Controls  from "../../components/formcontrols/Controls";
import { getStudentProfiles } from '../../actions/people';
import { getClasses } from  '../../actions/classes';


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
    status: '',
    enr_klass: '',
    stdnt: '',
}

const genderOptions = [
  {key: 'pending', value: 'PENDING'},
  {key: 'approved', value:'APPROVED'},
  {key: 'declined', value:'DECLINED'},
  {key: 'meeting', value:'REQUESTING A MEETING'},
]


const statusOptions = [
  {key: 'enroll', value: 'ENROLL'},
  {key: 'disenroll', value:'DISENROLLED'},
]


const Apply = props => {
  const { recordForEdit, addOrEdit } = props;

  const validate = (fieldValues = values) => {
    let temp = { ...errors }
    if ('enr_klass' in fieldValues)
        temp.enr_klass = fieldValues.enr_klass ? "" : "This field is required."
    if ('stdnt' in fieldValues)
        temp.stdnt = fieldValues.stdnt ? "" : "This field is required."
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
        props.getClasses(props.token);
        props.getStudentProfiles(props.token);
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
                            name="enr_klass"
                            label="CLASS"
                            value={values.enr_klass}
                            onChange={handleInputChange}
                            options={props.classes}
                            error={errors.enr_klass}
                    />
                    <Controls.UserSelect
                        name="stdnt"
                        label="STUDENT"
                        value={values.stdnt}
                        onChange={handleInputChange}
                        options={props.students}
                        error={errors.stdnt}
                    />
                  </Grid>
                  <Grid item xs={6}>
                      <Controls.DictSelect
                          name="status"
                          label="STATUS"
                          value={values.status}
                          onChange={handleInputChange}
                          options={statusOptions}
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
    classes: state.classes.classes,
    token: state.auth.token,
    students: state.people.studentprofiles,

})

export default connect(mapStateToProps, {getClasses, getStudentProfiles } ) (Apply);
