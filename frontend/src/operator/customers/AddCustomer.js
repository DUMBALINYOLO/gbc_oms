import React, { useState, useRef, useEffect } from "react";
import { connect } from 'react-redux';
import InformationTechnologyLayout from "../layout/InformationTechnologyLayout";
import DumbalinyoloBreadCrumbs from "../navigations/DumbalinyoloBreadCrumbs";
import { Typography, Grid, makeStyles, TextField } from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import {Form, useForm } from "../../components/formcontrols/useForm";
import  Controls  from "../../components/formcontrols/Controls";
import { addCustomer } from '../../actions/customers';
import { getCustomerStatusChoices } from '../../actions/choices';
import DumbalinyoloNavBadge from "../navigations/DumbalinyoloNavBadge";

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
    status: 'yes',
    street_line1: '', 
    street_line2: '', 
    city : '', 
    postcode: '',   
    phone_number: '', 
    fax_number: '',  
    email: '',  
    contact_person: '', 
    notes: '',  

}



const AddCustomer = props => {
  const editor = useRef(null);
  const [bodyPost, setBodyPost] = useState("");

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
    if ('email' in fieldValues)
        temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
    if ('city' in fieldValues)
        temp.city = fieldValues.city ? "" : "This field is required."
    if ('postcode' in fieldValues)
        temp.postcode = fieldValues.postcode ? "" : "This field is required."
    if ('contact_person' in fieldValues)
        temp.contact_person = fieldValues.contact_person ? "" : "This field is required."

    setErrors({
        ...temp
    })

    if (fieldValues == values)
        return Object.values(temp).every(x => x == "")
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
      if (validate()){
          props.addCustomer(values)
          resetForm()
          history.push("/customersitview")
      }
  }

  useEffect(() => {
    if(!props.fetched) {
        props.getCustomerStatusChoices();
    }
    console.log('mount it!');
  }, []);

  return (
    <InformationTechnologyLayout>
      <Typography className={classes.mb3} variant="h5" component="h1">
        Add New Customer
      </Typography>
      <DumbalinyoloBreadCrumbs path={history} />
      <Paper>
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
                          name="email"
                          label="Email"
                          value={values.email}
                          onChange={handleInputChange}
                          error={errors.email}
                      />
                      <Controls.Input
                          name="city"
                          label="City"
                          value={values.city}
                          onChange={handleInputChange}
                          error={errors.city}
                      />
                      <Controls.Input
                          name="postcode"
                          label="PostCode"
                          value={values.postcode}
                          onChange={handleInputChange}
                          error={errors.postcode}
                      />
                      <Controls.Input
                          name="contact_person"
                          label="Contact Person"
                          value={values.contact_person}
                          onChange={handleInputChange}
                          error={errors.contact_person}
                      />
                      <Controls.Input
                          label="Address One"
                          name="street_line1"
                          value={values.street_line1}
                          onChange={handleInputChange}
                          error={errors.street_line1}
                      />                
                  </Grid>
                  <Grid item xs={6}>
                      <Controls.DictSelect
                          name="status"
                          label="Active?"
                          value={values.status}
                          onChange={handleInputChange}
                          options={props.customerstatuschoices}
                          error={errors.status}
                      />
                      <Controls.Input
                          name="phone_number"
                          label="Phone Number"
                          value={values.phone_number}
                          onChange={handleInputChange}
                          error={errors.phone_number}
                      />
                      <Controls.Input
                          name="fax_number"
                          label="Fax Number"
                          value={values.fax_number}
                          onChange={handleInputChange}
                          error={errors.fax_number}
                      />
                      <Controls.Input
                          name="notes"
                          label="Notes"
                          value={values.notes}
                          onChange={handleInputChange}
                          error={errors.notes}
                      />
                      <Controls.Input
                          label="Address Two"
                          name="street_line2"
                          value={values.street_line2}
                          onChange={handleInputChange}
                          error={errors.street_line2}
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
        </Paper>
    </InformationTechnologyLayout>
  );
};

const mapStateToProps = state =>({
  customerstatuschoices: state.customerstatuschoices.customerstatuschoices
})

export default connect(
  mapStateToProps, 
  {getCustomerStatusChoices, addCustomer} ) 
  (AddCustomer);

  