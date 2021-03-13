import React, { useEffect, useState } from "react"
import InformationTechnologyLayout from "../layout/InformationTechnologyLayout";
import { getClasses, addClass, editClass } from '../../actions/classes';
import { connect } from 'react-redux';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CloseIcon from '@material-ui/icons/Close';
import { Search } from "@material-ui/icons";
import AddIcon from '@material-ui/icons/Add';
import { useHistory } from 'react-router-dom';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import {
  Paper,
  makeStyles,
  TableBody,
  TableRow,
  TableCell,
  Toolbar,
  InputAdornment }
from '@material-ui/core';
import AddClass from './AddClass';
import  Controls  from "../../components/formcontrols/Controls";
import  Popup  from "../../components/formcontrols/Popup";
import  useTable  from "../../components/table/useTable";
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';



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
  { id: 'max_population', label: 'REQUIRED POPULATION' },
  { id: 'status', label: 'STATUS' },
  { id: 'year', label: 'YEAR' },
  { id: 'actions', label: 'Actions', disableSorting: true }
]


const options = {
  filterType: "checkbox"
};


const AdminClass = props => {
  const classes = useStyles();
  const [recordForEdit, setRecordForEdit] = useState(null)
  const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
  const [openPopup, setOpenPopup] = useState(false)
  const history = useHistory();
  const [newclass, setNewClass] = useState({})
  const [query, setQuery] = useState('')
  const {token} = props;
  const [progress, setProgress] = React.useState(0);
  const [buffer, setBuffer] = React.useState(10);
  const progressRef = React.useRef(() => {});

  useEffect(() => {
    progressRef.current = () => {
      if (progress > 100) {
        setProgress(0);
        setBuffer(10);
      } else {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 10;
        setProgress(progress + diff);
        setBuffer(progress + diff + diff2);
      }
    };
  });

  useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current();
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);
  

  useEffect(() => {
    if(!props.fetched) {
        props.getClasses(query, token);
    }
    console.log('mount it!');
  }, [newclass]);


  const addOrEdit = (classi, resetForm, token) => {
      if (classi.id > 0){
        props.editClass(classi.id, classi, token)
        setNewClass(classi)
      }else{
        props.addClass(classi, token)
        setNewClass(classi)
        props.getClasses(query, token);
      }
      resetForm()
      setRecordForEdit(null)
      setOpenPopup(false)
  }

  const handleQuery = e => {
    let target = e.target;
    setQuery(target.value);
    props.getClasses(query,token)
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

  const openInPopup = item => {
      setRecordForEdit(item)
      setOpenPopup(true)
  }
  const handleClick = id =>{
    history.push(`/itdashboard/classes/${id}`)
  }

  return (
    <InformationTechnologyLayout>
      <Paper className={classes.pageContent}>
      {props.loading ? (
          <div className={classes.rootaa}>
            <CircularProgress variant="determinate" value={progress} />
            <CircularProgress variant="determinate" value={progress} />
            <CircularProgress variant="determinate" value={progress} />
            <CircularProgress variant="determinate" value={progress}/>
            <CircularProgress variant="determinate" value={progress} />
            <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
            <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
            <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
            <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
            <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
            <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
            <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
            <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
            <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
          </div>
        ) : (
          <>

            <Toolbar>
                <Controls.Input
                    label="Search Class"
                    value={query}
                    className={classes.searchInput}
                    InputProps={{
                        startAdornment: (<InputAdornment position="start">
                            <Search />
                        </InputAdornment>)
                    }}
                    onChange={handleQuery}
                />
                <Controls.Button
                    text="Add New"
                    variant="outlined"
                    startIcon={<AddIcon />}
                    className={classes.newButton}
                    onClick={() => { setOpenPopup(true); setRecordForEdit(null); }}
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
                                <TableCell>{item.max_population}</TableCell>
                                <TableCell>{item.status}</TableCell>
                                <TableCell>{item.year}</TableCell>
                                <TableCell>
                                  <Controls.ActionButton
                                      color="primary"
                                      onClick={() => { openInPopup(item) }}>
                                      <EditOutlinedIcon fontSize="small" />
                                      EDIT
                                  </Controls.ActionButton>
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
          </>
        )}
      </Paper>
      <Popup
      title="Class Form"
      openPopup={openPopup}
      setOpenPopup={setOpenPopup}
      >
        <AddClass
            recordForEdit={recordForEdit}
            addOrEdit={addOrEdit}
        />
      </Popup>
    </InformationTechnologyLayout>
  );
};

const mapStateToProps = state =>({
    records: state.classes.classes,
    token: state.auth.token,
    loading: state.classes.loading,
})

export default connect(
  mapStateToProps,
  {getClasses, addClass, editClass } )
  (AdminClass);
