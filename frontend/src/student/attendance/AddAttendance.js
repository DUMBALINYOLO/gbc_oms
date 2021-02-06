import React, {  useEffect } from "react";
import { connect } from 'react-redux';
import {  Grid, makeStyles,  } from "@material-ui/core";
import {Form, useForm } from "../../components/formcontrols/useForm";
import  Controls  from "../../components/formcontrols/Controls";
import { getTeacherProfiles } from '../../actions/people';
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
  // demoEditor: {
  //   border: "1px solid #eee",
  //   padding: "5px",
  //   borderRadius: "2px",
  //   height: "350px"
  // }
}));

const initialFValues = {
    klass: '',
    recorded_by: '',
}



const MarkRegister = props => {
  const { addOrEdit, recordForEdit } = props

  const validate = (fieldValues = values) => {
    let temp = { ...errors }
    if ('klass' in fieldValues)
        temp.klass = fieldValues.klass ? "" : "This field is required."
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
        props.getTeacherProfiles();
        props.getClasses();
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
                  </Grid>
                  <Grid item xs={6}>
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
    classes: state.classes.classes,
    teacherprofiles: state.people.teacherprofiles,

})

export default connect(mapStateToProps, {getClasses, getTeacherProfiles} ) (MarkRegister);
