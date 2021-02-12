import React, {  useEffect } from "react";
import { connect } from 'react-redux';
import {  Grid, makeStyles,  } from "@material-ui/core";
import {Form, useForm } from "../../components/formcontrols/useForm";
import  Controls  from "../../components/formcontrols/Controls";
import { getHaulierStatusChoices } from '../../actions/choices';


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

  name: '',
  status: '',
  address_one: '',
  address_two: '',

}


const AddHaulier = props => {
  const { addOrEdit, recordForEdit } = props

  const { history } = props;
  const classes = useStyles();

  const validate = (fieldValues = values) => {
    let temp = { ...errors }
    if ('name' in fieldValues)
        temp.name = fieldValues.name ? "" : "This field is required."
    if ('status' in fieldValues)
        temp.status = fieldValues.status ? "" : "This field is required."
    if ('address_one' in fieldValues)
        temp.address_one = fieldValues.address_one ? "" : "This field is required."
    if ('address_two' in fieldValues)
        temp.address_two = fieldValues.address_two ? "" : "This field is required."
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
        props.getHaulierStatusChoices();
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
                          label="Name"
                          value={values.name}
                          onChange={handleInputChange}
                          error={errors.fullName}
                      />
                      <Controls.Input
                          label="Address One"
                          name="address_one"
                          value={values.address_one}
                          onChange={handleInputChange}
                          error={errors.address_one}
                      />                
                  </Grid>
                  <Grid item xs={6}>
                      <Controls.DictSelect
                          name="status"
                          label="Is it Active?"
                          value={values.status}
                          onChange={handleInputChange}
                          options={props.haulierstatuschoices}
                          error={errors.status}
                      />
                      <Controls.Input
                          label="Address Two"
                          name="address_two"
                          value={values.address_two}
                          onChange={handleInputChange}
                          error={errors.address_two}
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
  haulierstatuschoices: state.haulierstatuschoices.haulierstatuschoices
})

export default connect(mapStateToProps, {getHaulierStatusChoices} ) (AddHaulier);