import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import InformationTechnologyLayout from "../layout/InformationTechnologyLayout";
import { getFees, addFee, editFee } from '../../actions/fees';
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
    InputAdornment
}
    from '@material-ui/core';
import Controls from "../../components/formcontrols/Controls";
import Popup from "../../components/formcontrols/Popup";
import useTable from "../../components/table/useTable";
import AddFee from './AddFee';


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
    { id: 'name', label: 'Name' },
    { id: 'type', label: 'Type' },
    { id: 'targets', label: 'Targets' },
    { id: 'amount', label: 'Amount' },
    { id: 'actions', label: 'Actions', disableSorting: true }
]





const options = {
    filterType: "checkbox"
};

const Fees = props => {
    const classes = useStyles();
    const [recordForEdit, setRecordForEdit] = useState(null)
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
    const [openPopup, setOpenPopup] = useState(false)

    useEffect(() => {
        if (!props.fetched) {
            props.getFees();
        }
        console.log('mount it!');


    }, []);


    const addOrEdit = (fee, resetForm) => {
        if (fee.id > 0)
            props.editFee(fee)
        else
            props.addFee(fee)
        //   
        resetForm()
        setRecordForEdit(null)
        setOpenPopup(false)
        console.log(fee)
    }



    const { records } = props;

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
                if (target.value == "")
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
            <InformationTechnologyLayout>
                <Paper className={classes.pageContent}>

                    <Toolbar>
                        <Controls.Input
                            label="Search Fee"
                            className={classes.searchInput}
                            InputProps={{
                                startAdornment: (<InputAdornment position="start">
                                    <Search />
                                </InputAdornment>)
                            }}
                            onChange={handleSearch}
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
                                    <TableCell>{item.type}</TableCell>
                                    <TableCell>{item.targets}</TableCell>
                                    <TableCell>{item.amount}</TableCell>
                                    <TableCell>
                                        <Controls.ActionButton
                                            color="primary"
                                            onClick={() => { openInPopup(item) }}>
                                            <EditOutlinedIcon fontSize="small" />
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
                </Paper>

            </InformationTechnologyLayout>
            <Popup
                title="Fee Form"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
                <AddFee
                    recordForEdit={recordForEdit}
                    addOrEdit={addOrEdit}
                />
            </Popup>
        </>
    );
};

const mapStateToProps = state => ({
    feetypechoices: state.feechoices.feetypechoices,
    feetargetschoices: state.feechoices.feetargetschoices,
    records: state.fees.fees,
})

export default connect(
    mapStateToProps,
    { getFees, addFee, editFee })
    (Fees);
