import React, {  useEffect } from "react";
import { connect } from 'react-redux';
import {  Grid, makeStyles,  } from "@material-ui/core";
import {Form, useForm } from "../../../components/formcontrols/useForm";
import  Controls  from "../../../components/formcontrols/Controls";
import { getPublishers, getAuthors } from '../../../actions/courses';
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


const AddReferences = props => {
  const { addOrEdit, recordForEdit } = props
  const classes = useStyles();
  const { id } = props;

  const initialFValues = {
    title: '',
    author: '',
    publisher: '',
    date_published: '',
    note_id: id,
  }

  const validate = (fieldValues = values) => {
    let temp = { ...errors }
    if ('title' in fieldValues)
        temp.title = fieldValues.title ? "" : "This field is required."
    if ('author' in fieldValues)
        temp.author = fieldValues.author ? "" : "This field is required."
    if ('publisher' in fieldValues)
        temp.publisher = fieldValues.publisher ? "" : "This field is required."
    if ('date_published' in fieldValues)
        temp.date_published = fieldValues.date_published ? "" : "This field is required."
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
        props.getPublishers(props.token);
        props.getAuthors(props.token);
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
                          name="title"
                          label="FULL NAME"
                          value={values.title}
                          onChange={handleInputChange}
                          error={errors.title}
                      />
                      <TextField
                          id="date"
                          label="DATE PUBLISHED"
                          type="date"
                          value={values.date_published}
                          name='date_published'
                          error={errors.date_published}
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
                      <Controls.Select
                          name="author"
                          label="author"
                          value={values.author}
                          onChange={handleInputChange}
                          options={props.adminauthors}
                          error={errors.author}
                      />
                      <Controls.Select
                          name="publisher"
                          label="publisher"
                          value={values.publisher}
                          onChange={handleInputChange}
                          options={props.adminpublishers}
                          error={errors.publisher}
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
    adminauthors: state.courses.adminauthors,
    adminpublishers: state.courses.adminpublishers,
    token: state.auth.token
})

export default connect(mapStateToProps, {getPublishers, getAuthors} ) (AddReferences);
