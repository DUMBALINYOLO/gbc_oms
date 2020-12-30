import React, { useState, useRef, useEffect } from "react";
import JoditEditor from "jodit-react";
import { connect } from 'react-redux';

// import { EditorState, convertToRow } from "draft-js";
// import { Editor } from "react-draft-wysiwyg";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import InformationTechnologyLayout from "../layout/InformationTechnologyLayout";
import DumbalinyoloBreadCrumbs from "../navigations/DumbalinyoloBreadCrumbs";
import { Typography, Grid, makeStyles, TextField } from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import {Form, useForm } from "../../components/formcontrols/useForm";
import  Controls  from "../../components/formcontrols/Controls";
import { addCompanyBranch } from '../../actions/configurations';
import { getHeadOffices  } from '../../actions/headoffices';

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
    head_office: null, 
    name : '',
    mobile_number: '',
    phone_number: '',
    email: '', 
    city: '',
    area: '',

}



const AddBranch = props => {
  const editor = useRef(null);
  const [bodyPost, setBodyPost] = useState("");

  const { history } = props;
  const classes = useStyles();

  const validate = (fieldValues = values) => {
    let temp = { ...errors }
    if ('name' in fieldValues)
        temp.name = fieldValues.name ? "" : "This field is required."
    if ('head_office' in fieldValues)
        temp.head_office= fieldValues.head_office ? "" : "This field is required."
    if ('mobile_number' in fieldValues)
        temp.mobile_number = fieldValues.mobile_number ? "" : "This field is required."
    if ('phone_number' in fieldValues)
        temp.phone_number = fieldValues.phone_number ? "" : "This field is required."
    if ('email' in fieldValues)
        temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
    if ('city' in fieldValues)
        temp.city = fieldValues.city ? "" : "This field is required."
    if ('area' in fieldValues)
        temp.area = fieldValues.area ? "" : "This field is required."


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
          props.addCompanyBranch(values)
          resetForm()
          history.push("/companybranches")
      }
  }

  useEffect(() => {
    if(!props.fetched) {
        props.getHeadOffices();
    }
    console.log('mount it!');
  }, []);

  return (
    <InformationTechnologyLayout>
      <Typography className={classes.mb3} variant="h5" component="h1">
        Add Company Branch
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
                          name="mobile_number"
                          label="Mobile Number"
                          value={values.mobile_number}
                          onChange={handleInputChange}
                          error={errors.mobile_number}
                      />
                                     
                  </Grid>
                  <Grid item xs={6}>
                      <Controls.Select
                          name="head_office"
                          label="Head Office"
                          value={values.head_office}
                          onChange={handleInputChange}
                          options={props.headoffices}
                          error={errors.head_office}
                      />
                      <Controls.Input
                          name="area"
                          label="Area"
                          value={values.area}
                          onChange={handleInputChange}
                          error={errors.area}
                      />
                      <Controls.Input
                          name="phone_number"
                          label="Phone Number"
                          value={values.phone_number}
                          onChange={handleInputChange}
                          error={errors.phone_number}
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
    headoffices: state.headoffices.headoffices
})

export default connect(
  mapStateToProps, 
  {getHeadOffices, addCompanyBranch} ) 
  (AddBranch);

  