import React, {  useEffect } from "react";
import { connect } from 'react-redux';
import {  Grid, makeStyles,  } from "@material-ui/core";
import {Form, useForm } from "../../components/formcontrols/useForm";
import  Controls  from "../../components/formcontrols/Controls";
import { getAccounts } from '../../actions/accounts';
import { getAdminBursars } from '../../actions/people';
import { getAssetTypesChoices, getAssetsDepriciationMethodChoices} from '../../actions/choices';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

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
  category: '',
  description: '',
  initial_value: '',
  credit_account: '',
  depreciation_period: '',
  init_date: null,
  depreciation_method: '',
  salvage_value: '',
  created_by: '',
}



const AddAsset = props => {
  const { addOrEdit, recordForEdit } = props
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const validate = (fieldValues = values) => {
    let temp = { ...errors }
    if ('name' in fieldValues)
        temp.name = fieldValues.name ? "" : "This field is required."
    if ('category' in fieldValues)
        temp.category = fieldValues.category ? "" : "This field is required."
    if ('description' in fieldValues)
        temp.description = fieldValues.description ? "" : "This field is required."
    if ('initial_value' in fieldValues)
        temp.initial_value = fieldValues.initial_value ? "" : "This field is required."
    if ('credit_account' in fieldValues)
        temp.credit_account = fieldValues.credit_account ? "" : "This field is required."
    if ('depreciation_period:' in fieldValues)
        temp.depreciation_period = fieldValues.depreciation_period ? "" : "This field is required."
    if ('init_date' in fieldValues)
        temp.init_date = fieldValues.init_date ? "" : "This field is required."
    if ('depreciation_method' in fieldValues)
        temp.depreciation_method = fieldValues.depreciation_method ? "" : "This field is required."
    if ('salvage_value' in fieldValues)
        temp.salvage_value = fieldValues.salvage_value ? "" : "This field is required."
    if ('created_by' in fieldValues)
        temp.created_by = fieldValues.created_by ? "" : "This field is required."
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
        props.getAdminBursars();
        props.getAccounts();
        props.getAssetTypesChoices();
        props.getAssetsDepriciationMethodChoices();
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
                          label="INITIAL VALUE"
                          name="initial_value"
                          value={values.initial_value}
                          onChange={handleInputChange}
                          error={errors.initial_value}
                      />
                      <Controls.Input
                          label="DESCRIPTION"
                          name="description"
                          value={values.description}
                          onChange={handleInputChange}
                          error={errors.description}
                      />
                      <Controls.Input
                          label="DEPRECIATION PERIOD"
                          name="depreciation_period"
                          value={values.depreciation_period}
                          onChange={handleInputChange}
                          error={errors.depreciation_period}
                      />
                      <Controls.DictSelect
                          name="category"
                          label="CATEGORY"
                          value={values.category}
                          onChange={handleInputChange}
                          options={props.assettypechoices}
                          error={errors.category}
                      />
                      <Controls.DictSelect
                          name="depreciation_method"
                          label="DEPRECIATION METHOD"
                          value={values.depreciation_method}
                          onChange={handleInputChange}
                          options={props.assetsdepriciationmethodchoices}
                          error={errors.depreciation_method}
                      />                 
                  </Grid>
                  <Grid item xs={6}>
                      <Controls.Select
                          name="credit_account"
                          label="CREDIT ACCOUNT"
                          value={values.parent_account}
                          onChange={handleInputChange}
                          options={props.accounts}
                          error={errors.parent_account}
                      />
                      <Controls.Input
                          label="SALVAGE VALUE"
                          name="salvage_value"
                          value={values.salvage_value}
                          onChange={handleInputChange}
                          error={errors.salvage_value}
                      />
                      <Controls.Select
                          name="created_by"
                          label="CREDIT ACCOUNT"
                          value={values.created_by}
                          onChange={handleInputChange}
                          options={props.accounts}
                          error={errors.created_by}
                      />
                      <input  
                        name="init_date"
                        value={values.init_date}
                        type="date" 
                        className="form-control"  
                        onChange={handleInputChange} 
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
    assettypechoices: state.feechoices.assettypechoices,
    assetsdepriciationmethodchoices: state.feechoices.assetsdepriciationmethodchoices,
    staffusers: state.people.adminbursars,
    
})

export default connect(
    mapStateToProps, 
    {getAccounts, getAssetTypesChoices, getAssetsDepriciationMethodChoices, getAdminBursars} ) 
    (AddAsset);


