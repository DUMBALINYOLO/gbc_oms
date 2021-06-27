import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';






const AddSlide = props => {
  const { id } = props;
  const initialFValues = {
    title: '',
    slider: '',
    course_id: id,
  }

  const [record, setRecord] = useState(initialFValues);
  const { addOrEdit, recordForEdit } = props;
  const [submitted, setSubmitted] = useState(false);



  useEffect(() => {
    if (recordForEdit != null)
            setRecord({
                ...recordForEdit
            })
  }, [recordForEdit]);


  const onInputChange = (e, name) => {
    const val = (e.target && e.target.value) || '';
    let _record = {...record};
    _record[`${name}`] = val;
    setRecord(_record);
  }

  const handleSubmit = e => {
      e.preventDefault()
      addOrEdit(record);

  }



  return (
    <div className="p-fluid p-formgrid p-grid">
          <div className="p-field p-col-12 p-md-12">
              <label htmlFor="name">TITLE</label>
              <InputText id="title"
                value={record.title}
                onChange={(e) => onInputChange(e, 'title')}
                required
                autoFocus
                tooltip="Enter Title"
              />
              {submitted && !record.title && <small className="p-error">Title is required.</small>}
          </div>
          <div className="p-field p-col-12 p-md-12">
              <label htmlFor="name">SLIDE LINK</label>
              <InputText id="slide"
                value={record.slide}
                onChange={(e) => onInputChange(e, 'slide')}
                required
                autoFocus
                tooltip="Enter Slide Link"
              />
              {submitted && !record.slide && <small className="p-error">Title is required.</small>}
          </div>
          
            <div className="p-field p-col-2">
              <Button label='SUBMIT' onClick={handleSubmit}/>
            </div>
    </div>
        
  );
};



export default AddSlide;

