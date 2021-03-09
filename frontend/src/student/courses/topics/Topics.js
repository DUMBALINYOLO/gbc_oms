import React, { useEffect, useState } from "react"
import { getAdminTopics } from '../../../actions/courses';
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
  const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
  const [listView, setListView] = useState('grid')
  const history = useHistory();
  const [query, setQuery] = useState('')
  const {id} =props.data;
  const {token} = props;

  useEffect(() => {
    if(!props.fetched) {
        props.getAdminTopics(id,query, token);
    }
    console.log('mount it!');


  }, []);

  const handleQuery = e => {
    let target = e.target;
    setQuery(target.value);
    props.getAdminTopics(query, token)
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

  const handleSwitchView = (event, value) => {
    setListView(value)
  }

  const handleClick = id =>{
    history.push(`/studentdashboard/topics/${id}`)
  }

  const {
      courseData
    } = props;

  return (
    <>
      <Paper className={classes.pageContent}>
        <Toolbar>
          <Controls.Input
              label="Search Topic"
              value={query}
              className={classes.searchInput}
              InputProps={{
                  startAdornment: (<InputAdornment position="start">
                      <Search />
                  </InputAdornment>)
              }}
              onChange={handleQuery}
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
                    />
                  </Grid>
                );
              })
            }
          </Grid>
      </Paper>
    </>
  );
};

const mapStateToProps = state =>({
    courseData: state.courses.admintopics,
    token: state.auth.token,
})

export default connect(
  mapStateToProps,
  {getAdminTopics} )
  (Topics);
