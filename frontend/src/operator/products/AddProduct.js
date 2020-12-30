import React, { useState, useRef, useEffect } from "react";
import { connect } from 'react-redux';
import InformationTechnologyLayout from "../layout/InformationTechnologyLayout";
import { Typography, Grid, makeStyles, TextField } from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import {Form, useForm } from "../../components/formcontrols/useForm";
import  Controls  from "../../components/formcontrols/Controls";
import { addProduct } from '../../actions/products';
import { getProductStatusChoices } from '../../actions/choices';
import { getProductCategories } from '../../actions/productcategories';

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
    description: '',
    category: null,
    status: 'yes',

}



const AddProduct = props => {
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
    if ('description' in fieldValues)
        temp.description = fieldValues.description ? "" : "This field is required."
    if ('category' in fieldValues)
        temp.category = fieldValues.category ? "" : "This field is required."


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
          props.addProduct(values)
          resetForm()
          history.push("/productsitview")
      }
  }

  useEffect(() => {
    if(!props.fetched) {
        props.getProductStatusChoices();
        props.getProductCategories();
    }
    console.log('mount it!');
  }, []);

  return (
    <InformationTechnologyLayout>
      <Typography className={classes.mb3} variant="h5" component="h1">
        Add New Product
      </Typography>
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
                          name="description"
                          label="Description"
                          value={values.description}
                          onChange={handleInputChange}
                          error={errors.description}
                      />              
                  </Grid>
                  <Grid item xs={6}>
                      <Controls.DictSelect
                          name="status"
                          label="Active?"
                          value={values.status}
                          onChange={handleInputChange}
                          options={props.productstatuschoices}
                          error={errors.status}
                      />
                      <Controls.Select
                          name="category"
                          label="Category"
                          value={values.category}
                          onChange={handleInputChange}
                          options={props.productcategories}
                          error={errors.category}
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
    productstatuschoices: state.productstatuschoices.productstatuschoices,
    productcategories: state.productcategories.productcategories
})

export default connect(
  mapStateToProps, 
  {getProductStatusChoices, addProduct, getProductCategories} ) 
  (AddProduct);

  