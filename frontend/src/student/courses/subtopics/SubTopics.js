import React, { useEffect, useState } from "react"
import { getAdminSubTopics} from '../../../actions/courses';
import { connect } from 'react-redux';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CloseIcon from '@material-ui/icons/Close';
import { Search } from "@material-ui/icons";
import AddIcon from '@material-ui/icons/Add';
import {
  Paper,
  makeStyles,
  TableBody,
  TableRow,
  TableCell,
  Toolbar,
  InputAdornment }
from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import  Controls  from "../../../components/formcontrols/Controls";
import  Popup  from "../../../components/formcontrols/Popup";
import  useTable  from "../../../components/table/useTable";



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


const headCells = [
  { id: 'id', label: 'ID' },
  { id: 'title', label: 'TITLE' },
  { id: 'actions', label: 'Actions', disableSorting: true }
]

const options = {
  filterType: "checkbox"
};

const SubTopics = props => {
  const history = useHistory();
  const classes = useStyles();
  const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
  const {id} =props.data;
  const [query, setQuery] = useState('')
  const {token} = props;

  useEffect(() => {
    if(!props.fetched) {
        props.getAdminSubTopics(id, token);
    }
    console.log('mount it!');
  }, []);

  const handleQuery = e => {
    let target = e.target;
    setQuery(target.value);
    props.getAdminSubTopics(query, token)
  }

  const {records} = props;

  const {
      TblContainer,
      TblHead,
      TblPagination,
      recordsAfterPagingAndSorting
  } = useTable(records, headCells, filterFn);

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

  const handleClick = id =>{
    history.push(`/studentdashboard/subtopics/${id}`)
  }

  return (
    <>
      <Paper className={classes.pageContent}>

      <Toolbar>
          <Controls.Input
              label="Search SubTopic"
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
      <TblContainer>
          <TblHead />
          <TableBody>
              {
                  recordsAfterPagingAndSorting().map(item =>
                      (<TableRow key={item.id}>
                          <TableCell>{item.id}</TableCell>
                          <TableCell>{item.title}</TableCell>
                          <TableCell>
                            <Controls.ActionButton
                                color="secondary"
                                onClick={() => { handleClick(item.id) }}
                              >
                                <BorderColorIcon fontSize="small" />
                                OPEN
                            </Controls.ActionButton>
                          </TableCell>
                      </TableRow>)
                  )
              }
          </TableBody>
      </TblContainer>
      <TblPagination />
      </Paper>
    </>
  );
};

const mapStateToProps = state =>({
    records: state.courses.adminsubtopics,
    token: state.auth.token,
})

export default connect(
  mapStateToProps,
  {getAdminSubTopics} )
  (SubTopics);
