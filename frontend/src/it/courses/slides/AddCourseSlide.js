import React, { useState } from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { Button } from 'primereact/button';
import { addCourseSlide } from '../../../actions/courses';



const AddCourseSlide = (props) => {

    const {token, id} =props;
    const [slide, setSlide] = useState();
    const [title, setTitle] = useState();

    const saveSlide = (e) => {
        e.preventDefault();
        const uploadData = new FormData();
        uploadData.append('course_id', id);
        uploadData.append('title', title);
        uploadData.append('slide', slide,slide.name);
        props. addCourseSlide(uploadData, token)
    }


    return (
        <div className="p-fluid p-formgrid p-grid">
          <div className="p-field p-col-12 p-md-6">
            <label htmlFor="name">TITLE</label>
            <InputText
              id="title"
              value={record.title}
              onChange={(evt) => setTitle(evt.target.value)}
              required
              autoFocus
              tooltip="Enter Name"
            />
            {submitted && !record.name && <small className="p-error">Name is required.</small>}
          </div>
          <div className="p-field p-col-12 p-md-12">
            <input
              accept="file/*"
              type="file"
              name='slide'
              onChange={(evt) => setSlide(evt.target.files[0])}

            />
          </div>
          <Button label='SUBMIT' onClick={saveSlide}/>
        </div>
    );
}

const mapStateToProps = state =>({
    token: state.auth.token,
})

export default connect(
  mapStateToProps,
  {addSeriesImage} )
  (AddImage);
