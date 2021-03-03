import React, {useEffect} from "react";
import {  Grid, makeStyles,  } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import {Form, useForm } from "../../components/formcontrols/useForm";
import  Controls  from "../../components/formcontrols/Controls";
import styles from './profile-jss';


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
}));

const initialFValues = {
  title: '',
  gender: '',
  id_number: '',
  first_name: '',
  middle_name: '',
  last_name: '',
  phone_number: '',
  whatsapp_number: '',
}

const genderOptions = [
  {key: 'male', value: 'MALE'},
  {key: 'female', value:'FEMALE'}
]

const titleOptions = [
  {key: 'sir', value: 'SIR'},
  {key: 'miss', value:'MISS'},
  {key: 'mr', value:'MR'},
  {key: 'mrs', value:'MRS'},
  {key: 'doc', value:'Doctor'},
  {key: 'prof', value:'Proffesor'}
]

const ProfileForm = props => {
  const classes = useStyles();
  const { addOrEdit, recordForEdit } = props;

  const validate = (fieldValues = values) => {
    let temp = { ...errors }
    if ('first_name' in fieldValues)
        temp.first_name = fieldValues.first_name ? "" : "This field is required."
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

  useEffect(() => {
    if (recordForEdit != null)
            setValues({
                ...recordForEdit
            })
  }, [recordForEdit]);

  const handleSubmit = e => {
      e.preventDefault()
      addOrEdit(values, resetForm);
  }


  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <div>
            <Controls.DictSelect
              fullWidth
              onChange={handleInputChange}
              value={values.title}
              label="TITLE"
              name="title"
              options={titleOptions}
              variant="outlined"
            />
          </div>
          <div>
            <Controls.Input
              fullWidth
              onChange={handleInputChange}
              value={values.first_name}
              label="FIRST NAME"
              name="first_name"
              variant="outlined"
            />
          </div>

          <div>
            <Controls.Input
              fullWidth
              onChange={handleInputChange}
              value={values.middle_name}
              label="MIDDLE NAME"
              name="middle_name"
              variant="outlined"
            />
          </div>
          <div>
            <Controls.Input
              fullWidth
              onChange={handleInputChange}
              value={values.last_name}
              label="LAST NAME"
              name="last_name"
              variant="outlined"
            />

          </div>
        </Grid>
        <Grid item xs={6}>
          <div>
            <Controls.Input
              fullWidth
              onChange={handleInputChange}
              value={values.phone_number}
              label="PHONE NUMBER"
              name="phone_number"
              variant="outlined"
            />
          </div>
          <div>
            <Controls.Input
              fullWidth
              onChange={handleInputChange}
              value={values.id_number}
              label="NATIONAL IDENTITY NUMBER"
              name="id_number"
              variant="outlined"
            />
          </div>
          <div>
            <Controls.Input
              fullWidth
              onChange={handleInputChange}
              value={values.whatsapp_number}
              label="WHATSAPP NUMBER"
              name="whatsapp_number"
              variant="outlined"
            />
          </div>
          <div>
            <Controls.DictSelect
              fullWidth
              onChange={handleInputChange}
              value={values.gender}
              label="GENDER"
              name="gender"
              options={genderOptions}
              variant="outlined"
            />
          </div>
        </Grid>
      </Grid>
      <div className='buttonArea'>
        <Button variant="contained" color="secondary" type="submit">
          Submit
        </Button>
      </div>
    </Form>
  );
};


export default withStyles(styles)(ProfileForm);
