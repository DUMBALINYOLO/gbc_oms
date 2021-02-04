import React, {  useEffect } from "react";
import { connect } from 'react-redux';
import {  Grid, makeStyles,  } from "@material-ui/core";
import {Form, useForm } from "../../../components/formcontrols/useForm";
import  Controls  from "../../../components/formcontrols/Controls";
import { getFeeTargetsChoices, getFeeTypeChoices} from '../../../actions/choices';


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
  targets: '',
  type: '',
  amount: '',

}



const AddCourse = props => {
  const { addOrEdit, recordForEdit } = props
  const classes = useStyles();

  const validate = (fieldValues = values) => {
    let temp = { ...errors }
    if ('name' in fieldValues)
        temp.name = fieldValues.name ? "" : "This field is required."
    if ('targets' in fieldValues)
        temp.targets = fieldValues.targets ? "" : "This field is required."
    if ('type' in fieldValues)
        temp.type = fieldValues.type ? "" : "This field is required."
    if ('amount' in fieldValues)
        temp.amount = fieldValues.amount ? "" : "This field is required."
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
        props.getFeeTargetsChoices();
        props.getFeeTypeChoices();
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
                          label="NAME"
                          value={values.name}
                          onChange={handleInputChange}
                          error={errors.fullName}
                      />
                      <Controls.Input
                          label="AMOUNT"
                          name="amount"
                          value={values.amount}
                          onChange={handleInputChange}
                          error={errors.amount}
                      />
                  </Grid>
                  <Grid item xs={6}>
                      <Controls.DictSelect
                          name="type"
                          label="TYPE"
                          value={values.type}
                          onChange={handleInputChange}
                          options={props.feetypechoices}
                          error={errors.type}
                      />
                      <Controls.DictSelect
                          name="targets"
                          label="TARGETS"
                          value={values.targets}
                          onChange={handleInputChange}
                          options={props.feetargetschoices}
                          error={errors.targets}
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
    feetypechoices: state.feechoices.feetypechoices,
    feetargetschoices: state.feechoices.feetargetschoices

})

export default connect(mapStateToProps, {getFeeTypeChoices, getFeeTargetsChoices} ) (AddCourse);
