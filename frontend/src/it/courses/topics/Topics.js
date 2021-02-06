import React, { useEffect, useState } from "react"
import InformationTechnologyLayout from "../../layout/InformationTechnologyLayout";
import { getAdminTopics, addTopic, editTopic } from '../../../actions/courses';
import { connect } from 'react-redux';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CloseIcon from '@material-ui/icons/Close';
import { Search } from "@material-ui/icons";
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom';
import {
  Paper,
  makeStyles,
  TableBody,
  TableRow,
  TableCell,
  Toolbar,
  InputAdornment }
from '@material-ui/core';
import AddTopic from './AddTopic';
import {Link} from 'react-router-dom';
import  Controls  from "../../../components/formcontrols/Controls";
import  Popup  from "../../../components/formcontrols/Popup";
import SearchTopic from "./SearchTopic";
import TopicCard from "./TopicCard";



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







const options = {
  filterType: "checkbox"
};

const Topics = props => {
  const classes = useStyles();
  const [recordForEdit, setRecordForEdit] = useState(null)
  const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
  const [openPopup, setOpenPopup] = useState(false)
  const [listView, setListView] = useState('grid')
  const history = useHistory();
  const {id} =props.data;

  useEffect(() => {
    if(!props.fetched) {
        props.getAdminTopics(id);
    }
    console.log('mount it!');


  }, []);


  const addOrEdit = (topic, resetForm) => {
      if (topic.id > 0)
        props.editTopic(topic.id, topic)
      else
        props.addTopic(topic)
        console.log(topic)  //
      resetForm()
      setRecordForEdit(null)
      setOpenPopup(false)
  }


  const handleSearch = e => {
      let target = e.target;
      setFilterFn({
          fn: items => {
              if (target.value === "")
                  return items;
              else
                  return items.filter(x => x.name.toLowerCase().includes(target.value))
          }
      })
  }



  const openInPopup = item => {
      setRecordForEdit(item)
      setOpenPopup(true)
  }

  const handleSwitchView = (event, value) => {
    setListView(value)
  }

  const handleClick = id =>{
    history.push(`/itdashboard/topics/${id}`)
  }

  const {
      courseData
    } = props;

  return (
    <>
      <Paper className={classes.pageContent}>

      <Toolbar>
          <Controls.Button
              text="Add New"
              variant="outlined"
              startIcon={<AddIcon />}
              className={classes.newButton}
              onClick={() => { setOpenPopup(true); setRecordForEdit(null); }}
          />
      </Toolbar>
        <SearchTopic
            courseData={courseData}
            listView={listView}
            handleSwitchView={handleSwitchView}
          />
          <Grid
            container
            alignItems="flex-start"
            justify="flex-start"
            direction="row"
            spacing={3}
          >
            {
              courseData.map((topic) => {
                return (
                  <Grid item md={listView === 'list' ? 12 : 4} sm={listView === 'list' ? 12 : 6} xs={12} key={topic.id}>
                    <TopicCard
                      list={listView === 'list'}
                      full_name={topic.title}
                      description={topic.assessment_overview}
                      status={topic.id}
                      detailOpen={() => handleClick(topic.id)}
                      editItem={() => openInPopup(topic)}
                    />
                  </Grid>
                );
              })
            }
          </Grid>
      </Paper>
      <Popup
      title="Topic Form"
      openPopup={openPopup}
      setOpenPopup={setOpenPopup}
      >
        <AddTopic
            recordForEdit={recordForEdit}
            addOrEdit={addOrEdit}
            id={id}
        />
      </Popup>
    </>
  );
};

const mapStateToProps = state =>({
    courseData: state.courses.admintopics,
})

export default connect(
  mapStateToProps,
  {getAdminTopics, addTopic, editTopic} )
  (Topics);
