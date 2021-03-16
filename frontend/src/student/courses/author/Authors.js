import React, { useEffect, useState } from "react"
import { getAuthors } from '../../../actions/courses';
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
import  Controls  from "../../../components/formcontrols/Controls";
import  Popup  from "../../../components/formcontrols/Popup";
import  useTable  from "../../../components/table/useTable";
import StudentLayout from '../../layout/StudentLayout';



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
  { id: 'name', label: 'NAME' },
  { id: 'author_number', label: 'NUMBER' },
]


const options = {
  filterType: "checkbox"
};

const Authors = props => {
  const { history } = props;
  const classes = useStyles();
  const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
  const [newstudent, setNewStudent] = useState({})
  const [query, setQuery] = useState('')
  const {token} = props;

  useEffect(() => {
    if(!props.fetched) {
        props.getAuthors(token);
    }
    console.log('mount it!');


  }, [newstudent]);

  const {records} = props;

  const handleQuery = e => {
    let target = e.target;
    setQuery(target.value);
  }

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


  return (
    <StudentLayout>
      <Paper className={classes.pageContent}>

      <Toolbar>
          <Controls.Input
              label="Search Author"
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
                          <TableCell>{item.name}</TableCell>
                          <TableCell>{item.author_number}</TableCell>
                      </TableRow>)
                  )
              }
          </TableBody>
      </TblContainer>
      <TblPagination />
      </Paper>
    </StudentLayout>
  );
};

const mapStateToProps = state =>({
    records: state.courses.adminauthors,
    token: state.auth.token,
})

export default connect(
  mapStateToProps,
  { getAuthors } )
  (Authors);

