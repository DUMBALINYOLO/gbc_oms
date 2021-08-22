import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button } from 'primereact/button';
import { addBlog } from '../../actions/blogs';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';







const AddCourse = (props) => {

    const {token} =props;

    const [image, setImage] = useState();
    const [title, setTitle] = useState();
    const [author, setAuthor] = useState();
    const [content, setContent] = useState();
    const [published_date, setPublishedDate] = useState();



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
            title,
            author,
            content,
            published_date,
        }
        props.addBlog(uploadData, token)
        props.seriesDialog(false)
        props.getBlogs(token)
    }


    return (
        <div className="p-fluid p-formgrid p-grid">
            <div className="p-field p-col-12 p-md-12">
                <label htmlFor="righticon">TITLE</label>
                <span className="p-float-label p-input-icon-right">
                    <i className="pi pi-spin" />
                    <InputText
                        id="email"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                </span>
            </div>
            <div className="p-field p-col-12 p-md-12">
                <label htmlFor="righticon">AUTHOR</label>
                <span className="p-float-label p-input-icon-right">
                    <i className="pi pi-spin" />
                    <InputText
                        id="author"
                        onChange={(e) => setAuthor(e.target.value)}
                        value={author}
                    />
                </span>
            </div>
            <div className="p-field p-col-12 p-md-12">
                <label htmlFor="righticon">PUBLISHED DATE</label>
                <span className="p-float-label p-input-icon-right">
                    <i className="pi pi-spin" />
                    <InputText
                        id="email"
                        name="email"
                        label="Name"
                        type='date'
                        onChange={(e) => setPublishedDate(e.target.value)}
                        value={published_date}
                    />
                </span>
            </div>
            
            
            <div className="p-field p-col-12 p-md-12">
                    <label htmlFor="zip">CONTENT</label>
                    <InputTextarea
                        value={content}
                        onChange={(evt) => setContent(evt.target.value)}
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
  {addBlog} )
  (AddCourse);
