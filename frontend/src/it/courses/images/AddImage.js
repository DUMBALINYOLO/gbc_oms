import React, {  useEffect, useState } from "react";
import { connect } from 'react-redux';
import {  Grid, makeStyles,  } from "@material-ui/core";
import {Form, useForm } from "../../../components/formcontrols/useForm";
import  Controls  from "../../../components/formcontrols/Controls";


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




const AddImage = props => {
  const { addOrEdit, recordForEdit } = props;
  const classes = useStyles();
  const { id } = props;
  const [file, setFile] = useState(null);

  const selectFile = event => {
    setFile({
      file: event.target.files[0]
    })
  }


  const initialFValues = {

    title: '',
    file: '',
    note_id: id,
  }

  const validate = (fieldValues = values) => {
    let temp = { ...errors }
    if ('title' in fieldValues)
        temp.title = fieldValues.title ? "" : "This field is required."
    if ('file' in fieldValues)
        temp.file = fieldValues.file? "" : "This field is required."
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
                          label="TITLE"
                          value={values.title}
                          onChange={handleInputChange}
                          error={errors.title}
                      />
                  </Grid>
                  <Grid item xs={6}>
                      <input
                          label="FILE"
                          name="file"
                          type="file"
                          accept="image/png, image/jpeg"
                          value={values.file}
                          onChange={handleInputChange}
                          error={errors.file}
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


export default AddImage;
