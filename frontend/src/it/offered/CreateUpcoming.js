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


    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file)
          fileReader.onload = () => {
            resolve(fileReader.result);
          }
          fileReader.onerror = (error) => {
            reject(error);
          }
        })
      }


      const handleFileRead = async (event) => {
        const file = event.target.files[0]
        const base64 = await convertBase64(file)
        setImage(base64)
        console.log(base64)
      }



   

    const saveImage = (e) => {
        e.preventDefault();
        const uploadData = {
            image,
            name,
            description,
            start_date,
            end_date,
            price,
        }
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
              onChange={(evt) => handleFileRead(evt)}
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
