import React, { Fragment, useEffect, useState } from 'react';
import {
  Grid,
  Container,
  Button,

} from '@material-ui/core';
import AOS from "aos";
import 'aos/dist/aos.css';
import { useHistory } from 'react-router-dom';
import { Button as PrimeButtom } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';
import { Dialog } from 'primereact/dialog';
import CreateBlog from './CreateBlog';



function Blogs(props) {
  const history = useHistory();
  const {records} = props;
  const [seriesDialog, setSeriesDialog] = useState(false);


  useEffect(() =>{
    AOS.init({duration : 2000})

  }, []);

  const handleClick = id =>{
    history.push(`/itdashboard/newsletter/${id}`)
  }

  const openNew = () => {
    setSeriesDialog(true);
  }

  const hideDialog = () => {
      setSeriesDialog(false);
  }

  const leftToolbarTemplate = () => {
      return (
          <React.Fragment>
              <PrimeButtom 
                  label="ADD" 
                  className="p-button-warning" 
                  onClick={openNew}
              />
          </React.Fragment>
      )
  }



  return (
    <>
      <div className="py-5 bg-slick-carbon" data-aos="zoom-in-up">

        <Toolbar className="p-mb-4" left={leftToolbarTemplate}></Toolbar>
            <Dialog
                visible={seriesDialog}
                style={{ width: '800px' }}
                header="SERIES FORM"
                modal
                className="p-fluid"
                onHide={hideDialog}
                >
                <CreateBlog
                    getBlogs={props.getBlogs}
                    seriesDialog={setSeriesDialog}
                />

        </Dialog>


        <Container>
          <Grid container spacing={6}>
            {records.map((blog) => {
              return (
                <Grid item xs={12} md={6} lg={4} key={blog.id}>
                  <div className="card card-transparent mb-4">
                    <div className="card-img-wrapper">
                      <div className="card-badges card-badges-bottom">
                        <span className="mr-2 badge badge-success badge-pill">
                          {blog.category}
                        </span>
                        <span className="text-info badge badge-neutral-info badge-pill">
                          {blog.published_date}
                        </span>
                      </div>
                      <img
                        src={blog.image}
                        className="card-img-top rounded"
                        alt="..."
                        style={{height: 250}}
                      />
                    </div>
                    <div className="card-body text-white text-center">
                      <h5 className="card-title">{blog.author}</h5>
                      <p className="card-text text-white-50">
                        {blog.title}
                      </p>
                      <Button
                        size="small"
                        variant="contained"
                        color="primary"
                        className="mt-1"
                        onClick={() => handleClick(blog.id)}
                      >
                        READ MORE ........
                      </Button>
                    </div>
                  </div>
                </Grid>
              );
            })
          }
        </Grid>
        </Container>
      </div>
    </>
  );
}




export default Blogs;
