import React, {  useEffect } from "react";
import { connect } from 'react-redux';
import {  Grid, makeStyles,  } from "@material-ui/core";
import {Form, useForm } from "../../components/formcontrols/useForm";
import  Controls  from "../../components/formcontrols/Controls";
import { getCustomerStatusChoices } from '../../actions/choices';


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
    street_line1: '',
    street_line2: '',
    city: '',
    postcode: '',
    phone_number: '',
    fax_number: '',
    email: '',
    contact_person: '',
    notes: '',

}


const AddCustomer = props => {
  const { addOrEdit, recordForEdit } = props

  const { history } = props;
  const classes = useStyles();

  const validate = (fieldValues = values) => {
    let temp = { ...errors }
    if ('name' in fieldValues)
        temp.name = fieldValues.name ? "" : "This field is required."
    if ('status' in fieldValues)
        temp.status = fieldValues.status ? "" : "This field is required."
    if ('street_line1' in fieldValues)
        temp.street_line1 = fieldValues.street_line1 ? "" : "This field is required."
    if ('street_line2' in fieldValues)
        temp.street_line2 = fieldValues.street_line2 ? "" : "This field is required."
    if ('city' in fieldValues)
        temp.city = fieldValues.city ? "" : "This field is required."
    if ('postcode' in fieldValues)
        temp.postcode = fieldValues.postcode ? "" : "This field is required."
    if ('phone_number' in fieldValues)
        temp.phone_number = fieldValues.phone_number ? "" : "This field is required."
    if ('fax_number' in fieldValues)
        temp.fax_number = fieldValues.fax_number ? "" : "This field is required."
    if ('email' in fieldValues)
        temp.email = fieldValues.email ? "" : "This field is required."
    if ('contact_person' in fieldValues)
        temp.contact_person = fieldValues.contact_person ? "" : "This field is required."
    if ('notes' in fieldValues)
        temp.notes = fieldValues.notes ? "" : "This field is required."
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
        props.getCustomerStatusChoices();
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
                          error={errors.name}
                      />
                      <Controls.Input
                          label="Address One"
                          name="street_line1"
                          value={values.street_line1}
                          onChange={handleInputChange}
                          error={errors.street_line1}
                      />
                      <Controls.Input
                          label="Address Two"
                          name="street_line2"
                          value={values.street_line2}
                          onChange={handleInputChange}
                          error={errors.street_line2}
                      />
                      <Controls.Input
                          label="City"
                          name="city"
                          value={values.city}
                          onChange={handleInputChange}
                          error={errors.city}
                      />
                      <Controls.Input
                          label="Postcode"
                          name="postcode"
                          value={values.postcode}
                          onChange={handleInputChange}
                          error={errors.postcode}
                      />
                      <Controls.Input
                          label="Phone Number"
                          name="phone_number"
                          value={values.phone_number}
                          onChange={handleInputChange}
                          error={errors.phone_number}
                      />                     
                  </Grid>
                  <Grid item xs={6}>
                      <Controls.DictSelect
                          name="status"
                          label="Is it Active?"
                          value={values.status}
                          onChange={handleInputChange}
                          options={props.customerstatuschoices}
                          error={errors.status}
                      />
                      <Controls.Input
                          label="Fax Number"
                          name="fax_number"
                          value={values.fax_number}
                          onChange={handleInputChange}
                          error={errors.fax_number}
                      />
                      <Controls.Input
                          label="Email"
                          name="email"
                          value={values.email}
                          onChange={handleInputChange}
                          error={errors.email}
                      />
                      <Controls.Input
                          label="Contact Person"
                          name="contact_person"
                          value={values.contact_person}
                          onChange={handleInputChange}
                          error={errors.contact_person}
                      />
                      <Controls.Input
                          label="Notes"
                          name="notes"
                          value={values.notes}
                          onChange={handleInputChange}
                          error={errors.notes}
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
  customerstatuschoices: state.customerstatuschoices.customerstatuschoices
})

export default connect(mapStateToProps, {getCustomerStatusChoices} ) (AddCustomer);
