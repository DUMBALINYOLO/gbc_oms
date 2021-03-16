import React, { useEffect, useState } from "react"
import {  editAttendanceRecord } from '../../actions/attendances';
import { connect } from 'react-redux';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CloseIcon from '@material-ui/icons/Close';
import { Search } from "@material-ui/icons";
import AddIcon from '@material-ui/icons/Add';
import axios from 'axios';
import {
  Paper,
  makeStyles,
  TableBody,
  TableRow,
  TableCell,
  Toolbar,
  InputAdornment }
from '@material-ui/core';
import AddRecord from './AddRecord';
import  Controls  from "../../components/formcontrols/Controls";
import  Popup  from "../../components/formcontrols/Popup";
import  useTable  from "../../components/table/useTable";
import {studentattendancerecordsURL} from "../../constants"
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
  { id: 'attendance', label: 'DATE' },
  { id: 'student', label: 'STUDENT' },
  { id: 'status', label: 'ATTENDANCE STATUS' },
  { id: 'actions', label: 'Actions', disableSorting: true }
]

const options = {
  filterType: "checkbox"
};

const Records = props => {
    const classes = useStyles();
    const [recordForEdit, setRecordForEdit] = useState(null)
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
    const [openPopup, setOpenPopup] = useState(false)
    const [records, setRecords] = useState([])
    const [newrecord, setNewRecord] = useState({})
    const [query, setQuery] = useState('')
    const {token} = props;
    const {id} =props.data
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


  const addOrEdit = (fee, resetForm, token) => {
      if (fee.id > 0){
        props.editAttendanceRecord(fee.id, fee, token)
        setNewRecord(fee)
      }
      else{
        setNewRecord(fee)     
      }
      resetForm()
      setRecordForEdit(null)
      setOpenPopup(false)
  }

  const handleQuery = e => {
    let target = e.target;
    setQuery(target.value);
  }

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchData = async () => {
        const headers ={
              "Content-Type": "application/json",
              Authorization: `Token ${token}`,
              'Accept': 'application/json',
        };
        try {
            const res = await axios.get(`${studentattendancerecordsURL}?id=${id}`, headers);

            setRecords(res.data);
        }
        catch (err) {

        }
    }

        fetchData();
    }, [newrecord]);


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

  return (
    <>
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
                    label="Search Record"
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
                                <TableCell>{item.attendance}</TableCell>
                                <TableCell>{item.student}</TableCell>
                                <TableCell>{item.status}</TableCell>
                                <TableCell>
                                    <Controls.ActionButton
                                        color="primary"
                                        onClick={() => { openInPopup(item) }}>
                                        <EditOutlinedIcon fontSize="small" />
                                        EDIT
                                    </Controls.ActionButton>
                                    <Controls.ActionButton
                                        color="secondary">
                                        <CloseIcon fontSize="small" />
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
      title="Record Form"
      openPopup={openPopup}
      setOpenPopup={setOpenPopup}
      >
        <AddRecord
            recordForEdit={recordForEdit}
            addOrEdit={addOrEdit}
        />
      </Popup>
    </>
  );
};

const mapStateToProps = state =>({
    token: state.auth.token,
    loading: state.adminattendances.loading,
})

export default connect(
  mapStateToProps,
  {editAttendanceRecord} )
  (Records);

