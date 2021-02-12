import React, {  useEffect } from "react";
import { connect } from 'react-redux';
import {  Grid, makeStyles,  } from "@material-ui/core";
import {Form, useForm } from "../../components/formcontrols/useForm";
import  Controls  from "../../components/formcontrols/Controls";
import { getScaleInputMethods, getSerialPortChoices } from '../../actions/scales';


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
    input_method: '',
    serial_port: '',
    network_socket_address: '',
    network_socket_port: '',
    process_sleep: '',

}


const AddScale = props => {
  const { addOrEdit, recordForEdit } = props



  const validate = (fieldValues = values) => {
    let temp = { ...errors }
    if ('name' in fieldValues)
        temp.name = fieldValues.name ? "" : "This field is required."
    if ('input_method' in fieldValues)
        temp.input_method = fieldValues.input_method? "" : "This field is required."

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
        props.getScaleInputMethods();
        props.getSerialPortChoices();

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
                      <Controls.DictSelect
                          name="input_method"
                          label="Input Method"
                          value={values.input_method}
                          onChange={handleInputChange}
                          options={props.scaleinputmethods}
                          error={errors.input_method}
                      />
                      <Controls.DictSelect
                          name="serial_port"
                          label="Serial PORT"
                          value={values.serial_port}
                          onChange={handleInputChange}
                          options={props.serialportschoices}

                      />
                      <Controls.Input
                          label="Process Sleep"
                          name="process_sleep"
                          value={values.process_sleep}
                          onChange={handleInputChange}
                      /> 
                                         
                  </Grid>
                  <Grid item xs={6}>
                      
                      <Controls.Input
                          label="Network Socket Address"
                          name="network_socket_address"
                          value={values.network_socket_address}
                          onChange={handleInputChange}
                      />
                      <Controls.Input
                          label="Network Socket Port"
                          name="network_socket_port"
                          value={values.network_socket_port}
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
  serialportschoices: state.scales.serialportschoices,
  scaleinputmethods: state.scales.scaleinputmethods,
})

export default connect(mapStateToProps, {getSerialPortChoices, getScaleInputMethods} ) (AddScale);


