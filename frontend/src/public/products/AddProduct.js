import React, {  useEffect } from "react";
import { connect } from 'react-redux';
import {  Grid, makeStyles,  } from "@material-ui/core";
import {Form, useForm } from "../../components/formcontrols/useForm";
import  Controls  from "../../components/formcontrols/Controls";
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
    status: '',
    description: '',
    category: '',

}


const AddProduct = props => {
  const { addOrEdit, recordForEdit } = props



  const validate = (fieldValues = values) => {
    let temp = { ...errors }
    if ('name' in fieldValues)
        temp.name = fieldValues.name ? "" : "This field is required."
    if ('status' in fieldValues)
        temp.status = fieldValues.status ? "" : "This field is required."
    if ('category' in fieldValues)
        temp.category = fieldValues.category ? "" : "This field is required."
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
        props.getProductCategories();
        props.getProductStatusChoices();

    }
    if (recordForEdit != null)
            setValues({
                ...recordForEdit
            })
  }, [recordForEdit]);



  return (
        <Form onSubmit={handleSubmit}>
              <Grid container  >
                  <Grid item xs={6} style={{justifyContent: 'space-between'}}>
                      <Controls.Input
                          name="name"
                          label="Name"
                          value={values.name}
                          onChange={handleInputChange}
                          error={errors.name}
                      />
                      <Controls.Select
                          name="category"
                          label="Category"
                          value={values.category}
                          onChange={handleInputChange}
                          options={props.productcategories}
                          error={errors.category}
                      />
                                         
                  </Grid>
                  <Grid item xs={6}>
                      <Controls.DictSelect
                          name="status"
                          label="Is it Active?"
                          value={values.status}
                          onChange={handleInputChange}
                          options={props.productstatuschoices}
                          error={errors.status}
                      />
                      <Controls.Input
                          label="Description"
                          name="description"
                          value={values.description}
                          onChange={handleInputChange}
                          error={errors.description}
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
  productcategories: state.productcategories.productcategories,
  productstatuschoices: state.productstatuschoices.productstatuschoices,
})

export default connect(mapStateToProps, {getProductCategories, getProductStatusChoices} ) (AddProduct);


