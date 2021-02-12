import React, {  useEffect } from "react";
import { connect } from 'react-redux';
import InformationTechnologyLayout from "../layout/InformationTechnologyLayout";
import {Form, useForm } from "../../components/formcontrols/useForm";
import  Controls  from "../../components/formcontrols/Controls";
import {getFeeTargetsChoices, getFeeTypeChoices} from '../../actions/choices';
import { Grid } from "@material-ui/core";




const initialFValues = {

  name: '',
  type: '',
  targerts: '',
  amount: '',

}


const AddFee = props => {
  const { addOrEdit, recordForEdit } = props


  const validate = (fieldValues = values) => {
    let temp = { ...errors }
    if ('name' in fieldValues)
        temp.name = fieldValues.name ? "" : "This field is required."
    if ('amount' in fieldValues)
        temp.amount = fieldValues.amount ? "" : "This field is required."
    if ('type' in fieldValues)
        temp.type = fieldValues.type ? "" : "This field is required."
    if ('targets' in fieldValues)
        temp.targerts = fieldValues.targerts ? "" : "This field is required."
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
        props.getFeeTypeChoices();
        props.getFeeTargetsChoices();
    }
    if (recordForEdit != null)
            setValues({
                ...recordForEdit
            })
  }, [recordForEdit]);



  return (
    <InformationTechnologyLayout>
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
                      <Controls.DictSelect
                            name="type"
                            label="Is it Active?"
                            value={values.type}
                            onChange={handleInputChange}
                            options={props.feetypechoices}
                            error={errors.type}
                      />
             
                  </Grid>
                  <Grid item xs={6}>
                      <Controls.DictSelect
                          name="targets"
                          label="Targets"
                          value={values.targets}
                          onChange={handleInputChange}
                          options={props.feetargetschoices}
                          error={errors.status}
                      />
                      <Controls.Input
                          label="Amount"
                          name="amount"
                          value={values.amount}
                          onChange={handleInputChange}
                          error={errors.amount}
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
    </InformationTechnologyLayout>
  );
};

const mapStateToProps = state =>({
  feetypechoices: state.feechoices.feetypechoices,
  feetargetschoices: state.feechoices.feetargetschoices,
})

export default connect(
    mapStateToProps, 
    {getFeeTargetsChoices, getFeeTypeChoices}) 
    (AddFee);