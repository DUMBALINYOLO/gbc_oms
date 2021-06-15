import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Divider } from 'primereact/divider';






const AddNote = props => {
  const { id } = props;
  const initialFValues = {
    title: '',
    content: '',
    note_id: id,
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
          <Divider />

          <div className="p-field p-col-12">
            <span className="p-float-label p-input-icon-right">
                <i className="pi pi-spin pi-spinner" />
                <InputTextarea
                    id="content"
                    value={record.content}
                    onChange={(e) => onInputChange(e, 'content')}
                    required
                    autoFocus
                    className={classNames({ 'p-invalid': submitted && !record.content })}
                    rows={15}
                    cols={30}
                  />
                {submitted && !record.content && <small className="p-error">Address is required.</small>}
                <label htmlFor="righticon">CONTENT</label>
              </span>
          </div>
          <div className="p-field p-col-2">
            <Button label='SUBMIT' onClick={handleSubmit}/>
          </div>
    </div>

  );
};



export default AddNote;
