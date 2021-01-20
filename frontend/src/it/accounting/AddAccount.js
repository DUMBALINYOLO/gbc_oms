import React, {  useEffect } from "react";
import { connect } from 'react-redux';
import {  Grid, makeStyles,  } from "@material-ui/core";
import {Form, useForm } from "../../components/formcontrols/useForm";
import  Controls  from "../../components/formcontrols/Controls";
import { getAccounts } from '../../actions/accounts';
import { getAccountBalanceSheetCategoriesChoices, getAccountStatusChoices, getAccountTypeChoices} from '../../actions/choices';


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
  balance: '',
  type: '',
  description: '',
  parent_account: '',
  balance_sheet_category: '',
  active: '',

}



const AddAccount = props => {
  const { addOrEdit, recordForEdit } = props
  const classes = useStyles();

  const validate = (fieldValues = values) => {
    let temp = { ...errors }
    if ('name' in fieldValues)
        temp.name = fieldValues.name ? "" : "This field is required."
    if ('type' in fieldValues)
        temp.type = fieldValues.type ? "" : "This field is required."
    if ('description' in fieldValues)
        temp.description = fieldValues.description ? "" : "This field is required."
    if ('balance_sheet_category' in fieldValues)
        temp.balance_sheet_category = fieldValues.balance_sheet_category ? "" : "This field is required."
    if ('active' in fieldValues)
        temp.active = fieldValues.active ? "" : "This field is required."
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
        props.getAccountStatusChoices();
        props.getAccounts();
        props.getAccountTypeChoices();
        props.getAccountBalanceSheetCategoriesChoices();
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
                          error={errors.name}
                      />
                      <Controls.Input
                          label="BALANCE"
                          name="balance"
                          value={values.balance}
                          onChange={handleInputChange}
                      />
                      <Controls.Input
                          label="DESCRIPTION"
                          name="description"
                          value={values.description}
                          onChange={handleInputChange}
                          error={errors.description}
                      />
                      <Controls.DictSelect
                          name="type"
                          label="TYPE"
                          value={values.type}
                          onChange={handleInputChange}
                          options={props.accounttypechoices}
                          error={errors.type}
                      />                
                  </Grid>
                  <Grid item xs={6}>
                      <Controls.DictSelect
                          name="balance_sheet_category"
                          label="BALANACE SHEET CATEGORY"
                          value={values.balance_sheet_category}
                          onChange={handleInputChange}
                          options={props.accountbalancesheetcategorieschoices}
                          error={errors.balance_sheet_category}
                      />
                      <Controls.Select
                          name="parent_account"
                          label="PARENT ACCOUNT"
                          value={values.parent_account}
                          onChange={handleInputChange}
                          options={props.accounts}
                          error={errors.parent_account}
                      />
                      <Controls.DictSelect
                          name="active"
                          label="STATUS"
                          value={values.active}
                          onChange={handleInputChange}
                          options={props.accountstatuschoices}
                          error={errors.active}
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
    accounts: state.accounts.accounts,
    accountstatuschoices: state.feechoices.accountstatuschoices,
    accounttypechoices: state.feechoices.accounttypechoices,
    accountbalancesheetcategorieschoices: state.feechoices.accountbalancesheetcategorieschoices,

})

export default connect(
    mapStateToProps, 
    {getAccountBalanceSheetCategoriesChoices, getAccounts, getAccountTypeChoices, getAccountStatusChoices} ) 
    (AddAccount);