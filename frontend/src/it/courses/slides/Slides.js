import React, { useEffect, useState } from "react"
import { connect } from 'react-redux';
import { Search } from "@material-ui/icons";
import Grid from '@material-ui/core/Grid';
import {
  Paper,
  makeStyles,
  Toolbar,
  InputAdornment }
from '@material-ui/core';
import AddSlide from './AddSlide';
import  Controls  from "../../../components/formcontrols/Controls";
import  Popup  from "../../../components/formcontrols/Popup";
import { getCourseSlides, addCourseSlide } from '../../../actions/courses';
import SlideCard from './SlideCard';



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
  },
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}))




const CourseSlides = props => {
  const classes = useStyles();
  const [recordForEdit, setRecordForEdit] = useState(null)
  const [openPopup, setOpenPopup] = useState(false)
  const [listView, setListView] = useState('grid')
  const [query, setQuery] = useState('')
  const [newtopic, setNewTopic] = useState({})
  const {id, token} = props;


  useEffect(() => {
    if(!props.fetched) {
        props.getCourseSlides(id, token);
    }
    console.log('mount it!');
  }, [newtopic]);


  const addOrEdit = (topic) => {
      if (topic.id > 0){
        console.log(token)
        setNewTopic(topic)
      }else{
        props.addCourseSlide(topic, token)
        setNewTopic(topic)
        props.getCourseSlides(id, token);
      }
      setRecordForEdit(null)
      setOpenPopup(false)
  }


  
  const handleQuery = e => {
    let target = e.target;
    setQuery(target.value);
    props.getAdminTopics(query, token)

  }

  const openInPopup = item => {
      setRecordForEdit(item)
      setOpenPopup(true)
  }

  

  return (
    <>
      <Paper className={classes.pageContent}>
        <Toolbar>
            <Controls.Input
                label="Search Slide"
                value={query}
                className={classes.searchInput}
                InputProps={{
                    startAdornment: (<InputAdornment position="start">
                        <Search />
                    </InputAdornment>)
                }}
            />
            <Controls.Button
                text="Add New"
                variant="outlined"
                className={classes.newButton}
                onClick={() => { setOpenPopup(true); setRecordForEdit(null); }}
            />
        </Toolbar>
            <Grid
              container
              alignItems="flex-start"
              justify="flex-start"
              direction="row"
              spacing={3}
            >
              {
                props.courseslides.map((slide) => {
                  return (
                    <Grid item md={listView === 'list' ? 12 : 12} sm={listView === 'list' ? 12 : 6} xs={12} key={slide.id}>
                        <SlideCard
                          list={listView === 'list'}
                          title={slide.title}
                          slide={slide.slide}
   
                        />
                    </Grid>
                  );
                })
              }
            </Grid>
      </Paper>
      <Popup
      title="Slide Form"
      openPopup={openPopup}
      setOpenPopup={setOpenPopup}
      >
        <AddSlide
            recordForEdit={recordForEdit}
            addOrEdit={addOrEdit}
            id={id}
        />
      </Popup>
    </>
  );
};

const mapStateToProps = state =>({
  courseslides: state.courses.courseslides,
  token: state.auth.token,
})

export default connect(
mapStateToProps,
{getCourseSlides, addCourseSlide} )
(CourseSlides);


