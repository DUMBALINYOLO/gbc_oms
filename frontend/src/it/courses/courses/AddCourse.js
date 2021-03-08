import React, {  useEffect } from "react";
import { connect } from 'react-redux';
import {  Grid, makeStyles,  } from "@material-ui/core";
import {Form, useForm } from "../../../components/formcontrols/useForm";
import  Controls  from "../../../components/formcontrols/Controls";
import { getCourseStatus } from '../../../actions/courses';
import TextField from '@material-ui/core/TextField';



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
  full_name: '',
  short_name: '',
  status: '',
  start_date: '',
  end_date: '',
  description: '',

}



const AddCourse = props => {
  const { addOrEdit, recordForEdit } = props
  const classes = useStyles();

  const validate = (fieldValues = values) => {
    let temp = { ...errors }
    if ('full_name' in fieldValues)
        temp.full_name = fieldValues.full_name ? "" : "This field is required."
    if ('status' in fieldValues)
        temp.status = fieldValues.status ? "" : "This field is required."
    if ('short_name' in fieldValues)
        temp.short_name = fieldValues.short_name ? "" : "This field is required."
    if ('start_date' in fieldValues)
        temp.start_date = fieldValues.start_date ? "" : "This field is required."
    if ('end_date' in fieldValues)
        temp.end_date = fieldValues.end_date ? "" : "This field is required."
    if ('description' in fieldValues)
        temp.description = fieldValues.description ? "" : "This field is required."
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
        props.getCourseStatus();
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
                          name="full_name"
                          label="FULL NAME"
                          value={values.full_name}
                          onChange={handleInputChange}
                          error={errors.full_name}
                      />
                      <Controls.Input
                          label="SHORT NAME"
                          name="short_name"
                          value={values.short_name}
                          onChange={handleInputChange}
                          error={errors.short_name}
                      />
                      <TextField
                          id="ldate"
                          label="START DATE"
                          type="date"
                          value={values.start_date}
                          name='start_date'
                          error={errors.start_date}
                          defaultValue="2021-01-01"
                          format="yy-mm-dd"
                          onChange={handleInputChange}
                          className={classes.textField}
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                  </Grid>
                  <Grid item xs={6}>
                      <Controls.DictSelect
                          name="status"
                          label="STATUS"
                          value={values.status}
                          onChange={handleInputChange}
                          options={props.coursestatuschoices}
                          error={errors.status}
                      />
                      <Controls.Input
                          label="DESCRIPTION"
                          name="description"
                          value={values.description}
                          onChange={handleInputChange}
                          error={errors.description}
                      />
                      <TextField
                          id="date"
                          label="END DATE"
                          type="date"
                          value={values.end_date}
                          name='end_date'
                          error={errors.end_date}
                          defaultValue="2021-01-01"
                          format="yy-mm-dd"
                          onChange={handleInputChange}
                          className={classes.textField}
                          InputLabelProps={{
                            shrink: true,
                          }}
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
    coursestatuschoices: state.courses.coursestatuschoices,

})

export default connect(mapStateToProps, {getCourseStatus} ) (AddCourse);
