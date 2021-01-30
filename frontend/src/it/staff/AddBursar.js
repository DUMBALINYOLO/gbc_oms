import React from "react";
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
  // demoEditor: {
  //   border: "1px solid #eee",
  //   padding: "5px",
  //   borderRadius: "2px",
  //   height: "350px"
  // }
}));

const initialFValues = {

  email: '',
  username: '',
  password: '',


}



const AddBursar = props => {
  const { addOrEdit } = props
  const classes = useStyles();

  const validate = (fieldValues = values) => {
    let temp = { ...errors }
    if ('email' in fieldValues)
        temp.email = fieldValues.email ? "" : "This field is required."
    if ('username' in fieldValues)
        temp.username = fieldValues.username ? "" : "This field is required."
    if ('password' in fieldValues)
        temp.password = fieldValues.password ? "" : "This field is required."
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




  return (
        <Form onSubmit={handleSubmit}>
              <Grid container>
                  <Grid item xs={6}>
                      <Controls.Input
                          name="email"
                          label="EMAIL"
                          value={values.email}
                          onChange={handleInputChange}
                          error={errors.email}
                      />
                      <Controls.Input
                          label="USERNAME"
                          name="username"
                          value={values.username}
                          onChange={handleInputChange}
                          error={errors.username}
                      />                
                  </Grid>
                  <Grid item xs={6}>
                    <Controls.Input
                        label="PASSWORD"
                        name="password"
                        value={values.password}
                        onChange={handleInputChange}
                        error={errors.password}
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

export default AddBursar;

