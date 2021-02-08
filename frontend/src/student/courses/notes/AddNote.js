import React, {  useEffect, useState } from "react";
import { connect } from 'react-redux';
import {  Grid, makeStyles,  } from "@material-ui/core";
import {Form, useForm } from "../../../components/formcontrols/useForm";
import  Controls  from "../../../components/formcontrols/Controls";
import {getStudyNotesApprovalStatusChoices, getStudynotesStatusChoices} from '../../../actions/choices';
import TextField from '@material-ui/core/TextField';


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




const AddNote = props => {
  const { addOrEdit, recordForEdit } = props;
  const classes = useStyles();
  const { id } = props;

  const initialFValues = {

    title: '',
    note: '',
    status: '',
    approval_status: '',
    subtopic_id: id,
  }

  const validate = (fieldValues = values) => {
    let temp = { ...errors }
    if ('title' in fieldValues)
        temp.title = fieldValues.title ? "" : "This field is required."
    if ('note' in fieldValues)
        temp.note = fieldValues.note? "" : "This field is required."
    if ('status' in fieldValues)
        temp.status = fieldValues.status? "" : "This field is required."
    if ('approval_status' in fieldValues)
        temp.approval_status = fieldValues.approval_status? "" : "This field is required."
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
    if (!props.fetched){
      props.getStudynotesStatusChoices();
      props.getStudyNotesApprovalStatusChoices();
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
                          name="title"
                          label="TITLE"
                          value={values.title}
                          onChange={handleInputChange}
                          error={errors.title}
                      />
                    <TextField
                          name="note"
                          label="NOTE"
                          rows={4}
                          fullWidth
                          id="standard-multiline-flexible"
                          value={values.note}
                          onChange={handleInputChange}
                          error={errors.note}
                      />

                  </Grid>
                  <Grid item xs={6}>
                    <Controls.DictSelect
                        name="status"
                        label="STATUS"
                        value={values.status}
                        onChange={handleInputChange}
                        options={props.studynotesstatuschoices}
                        error={errors.status}
                    />
                    <Controls.DictSelect
                        name="approval_status"
                        label="APPROVAL STATUS"
                        value={values.approval_status}
                        onChange={handleInputChange}
                        options={props.studynotesapprovalstatuschoices}
                        error={errors.approval_status}
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
    studynotesstatuschoices: state.feechoices.studynotesstatuschoices,
    studynotesapprovalstatuschoices: state.feechoices.studynotesapprovalstatuschoices

})

export default connect(
  mapStateToProps,
  {getStudyNotesApprovalStatusChoices, getStudynotesStatusChoices} )
  (AddNote);
