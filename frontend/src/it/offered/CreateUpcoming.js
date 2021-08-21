import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button } from 'primereact/button';
import { addUpcomingOfferedCourse } from '../../actions/adverts';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';







const AddCourse = (props) => {

    const {token} =props;

    const [image, setImage] = useState();
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [start_date, setStartDate] = useState();
    const [end_date, setEndDate] = useState();
    const [price, setPrice] = useState();



   

    const saveImage = (e) => {
        e.preventDefault();
        const uploadData = new FormData();
        uploadData.append('image', image, image.name);
        uploadData.append('description', description);
        uploadData.append('start_date', start_date);
        uploadData.append('end_date', end_date);
        uploadData.append('price', price);
        props.addUpcomingOfferedCourse(uploadData, token)
        props.seriesDialog(false)
        props.getCourses(token)
    }


    return (
        <div className="p-fluid p-formgrid p-grid">
            <div className="p-field p-col-12 p-md-12">
                <label htmlFor="righticon">NAME</label>
                <span className="p-float-label p-input-icon-right">
                    <i className="pi pi-spin" />
                    <InputText
                        id="email"
                        name="email"
                        label="Name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </span>
            </div>
            <div className="p-field p-col-12 p-md-12">
                <label htmlFor="righticon">START DATE</label>
                <span className="p-float-label p-input-icon-right">
                    <i className="pi pi-spin" />
                    <InputText
                        id="email"
                        name="email"
                        label="Name"
                        type='date'
                        onChange={(e) => setStartDate(e.target.value)}
                        value={start_date}
                    />
                </span>
            </div>
            <div className="p-field p-col-12 p-md-12">
                <label htmlFor="righticon">END DATE</label>
                <span className="p-float-label p-input-icon-right">
                    <i className="pi pi-spin" />
                    <InputText
                        id="email"
                        name="email"
                        label="Name"
                        type='date'
                        onChange={(e) => setEndDate(e.target.value)}
                        value={end_date}
                    />
                </span>
            </div>
            <div className="p-field p-col-12 p-md-12">
                <label htmlFor="righticon">PRICE</label>
                <span className="p-float-label p-input-icon-right">
                    <i className="pi pi-spin" />
                    <InputText
                        id="email"
                        name="email"
                        label="Name"
                        type='number'
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}
                    />
                </span>
            </div>
            <div className="p-field p-col-12 p-md-12">
                    <label htmlFor="zip">DESCRIPTION</label>
                    <InputTextarea
                        value={description}
                        onChange={(evt) => setDescription(evt.target.value)}
                        rows={5}
                        cols={30}
                        autoResize
                    />
            </div>
            
          <div className="p-field p-col-12 p-md-12">
            <input
              accept="image/*"
              type="file"
              name='cover'
              onChange={(evt) => setImage(evt.target.files[0])}
            />
          </div>
          <div className="p-field p-col-12 p-md-6">
            <Button label='SUBMIT' onClick={saveImage}/>
          </div>
          
        </div>
    );
}

const mapStateToProps = state =>({
    token: state.auth.token,
})

export default connect(
  mapStateToProps,
  {addUpcomingOfferedCourse} )
  (AddCourse);
