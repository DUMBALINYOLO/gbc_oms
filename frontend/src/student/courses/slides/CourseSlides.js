import React, { useEffect,useState } from 'react';
import { connect } from 'react-redux';
import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import ReactAudioPlayer from 'react-audio-player';
import './slide.css';
import { getCourseSlides } from '../../../actions/courses';
import {
    Paper,
    makeStyles,
}from '@material-ui/core';
import flax from './icon.jpg'
import AddCourseSlide from './AddCourseSlide';
import audio1 from  './one.mp3';



const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    },
    searchInput: {
        width: '75%'
    },
    newButton: {
        position: 'absolute',
        right: '10px'
    }
  }))
  

const CourseSlides = (props) => {
    const classes = useStyles();

    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '600px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '480px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const {id, token} = props;
    const [displayBasic, setDisplayBasic] = useState(false);
    const [displayBasic2, setDisplayBasic2] = useState(false);
    const [displayModal, setDisplayModal] = useState(false);
    const [displayMaximizable, setDisplayMaximizable] = useState(false);
    const [displayPosition, setDisplayPosition] = useState(false);
    const [displayResponsive, setDisplayResponsive] = useState(false);
    const [position, setPosition] = useState('center');



    useEffect(() => {
        if(!props.fetched) {
            props.getCourseSlides(id, token);
        }
        console.log('mount it!');
      }, []);

      const dialogFuncMap = {
        'displayBasic': setDisplayBasic,
        'displayBasic2': setDisplayBasic2,
        'displayModal': setDisplayModal,
        'displayMaximizable': setDisplayMaximizable,
        'displayPosition': setDisplayPosition,
        'displayResponsive': setDisplayResponsive
    }

    const playAudio = (audio) => {
        new Audio(audio).play();
    }

    const onClick = (name, position) => {
        dialogFuncMap[`${name}`](true);

        if (position) {
            setPosition(position);
        }
    }

    const onHide = (name) => {
        dialogFuncMap[`${name}`](false);
    }

    const renderFooter = (name) => {
        return (
            <div>
                <Button label="No" icon="pi pi-times" onClick={() => onHide(name)} className="p-button-text" />
                <Button label="Yes" icon="pi pi-check" onClick={() => onHide(name)} autoFocus />
            </div>
        );
    }

    const slideTemplate = (slide) => {

        return (
            <div className="product-item">
                <div className="product-item-content">
                    <div className="p-mb-3">
                        <img src={flax}  alt={slide.title} className="product-image" />
                    </div>
                    <div>
                        <h4 className="p-mb-1">{slide.title}</h4>
                        <h6 className="p-mt-0 p-mb-3">{slide.id}</h6>
                    
                        <iframe
                            title={slide.id}
                            src={`https://view.officeapps.live.co=${slide.slide}`}
                            width="100%"
                            height="600px"
                            frameBorder="0"
                        >
                        </iframe>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <Paper className={classes.pageContent}>
            
            <Button 
                label="ADD NEW" 
                onClick={() => onClick('displayMaximizable')} 
            />
            <Dialog 
                header="ADD  NEW" 
                visible={displayMaximizable} 
                maximizable 
                modal 
                style={{ width: '50vw' }} 
                footer={renderFooter('displayMaximizable')} 
                onHide={() => onHide('displayMaximizable')}
            >
                <AddCourseSlide id ={id} />
                
            </Dialog>

            <div className="carousel-demo">
                <div className="card">
                    <Carousel 
                        value={props.courseslides} 
                        numVisible={3} 
                        numScroll={1} 
                        responsiveOptions={responsiveOptions} 
                        className="custom-carousel" 
                        circular
                        autoplayInterval={300000}
                        itemTemplate={slideTemplate} 
                        header={<h5>COURSE SLIDES</h5>} />
                </div>
            </div>
        </Paper>
        
    );
}

const mapStateToProps = state =>({
    courseslides: state.courses.courseslides,
    token: state.auth.token,
})

export default connect(
  mapStateToProps,
  {getCourseSlides} )
  (CourseSlides);
      