import React, {  useEffect } from "react";
import {  Grid, makeStyles,  } from "@material-ui/core";
import {Form, useForm } from "../../components/formcontrols/useForm";
import  Controls  from "../../components/formcontrols/Controls";




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
    score: '', 
}



const EditRecord = props => {
  const { addOrEdit, recordForEdit } = props

  const validate = (fieldValues = values) => {
    let temp = { ...errors }
    if ('score' in fieldValues)
        temp.score = fieldValues.score ? "" : "This field is required."
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
                            name="score"
                            label="STUDENT SCORE"
                            value={values.score}
                            onChange={handleInputChange}
                            error={errors.score}
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
  );
};



export default EditRecord;