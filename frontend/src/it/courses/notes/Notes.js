import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { DataTable } from 'primereact/datatable';
import { connect } from 'react-redux';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { useHistory } from 'react-router-dom';
import '../table.css';
import {
  Paper,
  makeStyles,
}
from '@material-ui/core';
import { Dropdown } from 'primereact/dropdown';
import { getStudyNotes, addStudyNote, editStudyNote } from '../../../actions/courses';
import {getStudyNotesApprovalStatusChoices, getStudynotesStatusChoices} from '../../../actions/choices';


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

const Notes = (props) => {

    let emptyRecord = {
      title: '',
      note: '',
      status: '',
      approval_status: '',
      subtopic_id: props.data.id,
    };

    const classes = useStyles();
    const [productDialog, setProductDialog] = useState(false);
    const [deleteProductDialog, setDeleteProductDialog] = useState(false);
    const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);
    const [record, setRecord] = useState(emptyRecord);
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [newRecord, setNewRecord] = useState({});
    const [globalFilter, setGlobalFilter] = useState(null);
    const toast = useRef(null);
    const dt = useRef(null);
    const {token, records, id} =props;
    const history = useHistory();

    useEffect(() => {
      if(!props.fetched) {
          props.getStudynotesStatusChoices();
          props.getStudyNotesApprovalStatusChoices();
          props.getStudyNotes(props.data.id, token);
      }
      console.log('mount it!');
    }, [newRecord]);



    const openNew = () => {
        setRecord(emptyRecord);
        setSubmitted(false);
        setProductDialog(true);
    }

    const hideDialog = () => {
        setSubmitted(false);
        setProductDialog(false);
    }

    const hideDeleteProductDialog = () => {
        setDeleteProductDialog(false);
    }

    const hideDeleteProductsDialog = () => {
        setDeleteProductsDialog(false);
    }

    const saveProduct = (e) => {
        setSubmitted(true);
        e.preventDefault();
        let _records = [...records];
        let _record = {...record};
        if (record.id) {
          props.editStudyNote(record.id, record, token);
          setNewRecord(_record)
          props.getStudyNotes(props.data.id, token);
          setProductDialog(true);
          toast.current.show({ severity: 'success', summary: 'Successful', detail: 'NOTES UPDATED', life: 3000 });
        }
        else {
            props.addStudyNote(_record, token)
            setNewRecord(_record)
            props.getStudyNotes(props.data.id, token);
            toast.current.show({ severity: 'success', summary: 'Successful', detail: 'NOTES CREATED', life: 3000 });
        }
        setProductDialog(false);
        setRecord(emptyRecord);
    }


    const editProduct = (record) => {
        setRecord({...record});
        setProductDialog(true);
    }



    const deleteProduct = () => {
        let _records = records.filter(val => val.id !== record.id);
        setRecord(_records);
        setDeleteProductDialog(false);
        setRecord(emptyRecord);
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'NOTES Deleted', life: 3000 });
    }

    

    const exportCSV = () => {
        dt.current.exportCSV();
    }

    

    const deleteSelectedProducts = () => {
        let _records = records.filter(val => !selectedProducts.includes(val));
        setDeleteProductsDialog(false);
        setSelectedProducts(null);
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Notes Deleted', life: 3000 });
    }



    const handleClick = id =>{
      history.push(`/itdashboard/notes/${id}`)
    }

    const onInputChange = (e, name) => {
        const val = (e.target && e.target.value) || '';
        let _record = {...record};
        _record[`${name}`] = val;
        setRecord(_record);
    }



    const leftToolbarTemplate = () => {
        return (
            <React.Fragment>
                <Button label="CREATE NOTES"  className="p-button-warning p-mr-2" onClick={openNew} />
            </React.Fragment>
        )
    }

    const rightToolbarTemplate = () => {
        return (
            <React.Fragment>
                <Button label="CSV" icon="pi pi-upload" className="p-button-primary" onClick={exportCSV} />
                <Button label="PDF" icon="pi pi-file-pdf" className="p-button-warning" onClick={exportCSV} />
                <Button label="PRINT" icon="pi pi-print" className="p-button-secondary" onClick={exportCSV} />
            </React.Fragment>
        )
    }

    

   

    

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button
                  icon="pi pi-pencil"
                  className="p-button-rounded p-button-warning p-mr-2"
                  onClick={() => editProduct(rowData)}
                >
                </Button>
                <Button
                  icon="pi pi-sign-in"
                  className="p-button-rounded p-button-warning"
                  onClick={() => handleClick(rowData.id)}
                />
            </React.Fragment>
        );
    }

    const header = (
        <div className="table-header">
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
            </span>
        </div>
    );
    const productDialogFooter = (
        <React.Fragment>
            <Button label="Cancel" icon="pi pi-times" className="p-button-text" onClick={hideDialog} />
            <Button label="Save" icon="pi pi-check" className="p-button-text" onClick={saveProduct} />
        </React.Fragment>
    );
    const deleteProductDialogFooter = (
        <React.Fragment>
            <Button label="No" icon="pi pi-times" className="p-button-text" onClick={hideDeleteProductDialog} />
            <Button label="Yes" icon="pi pi-check" className="p-button-text" onClick={deleteProduct} />
        </React.Fragment>
    );
    const deleteProductsDialogFooter = (
        <React.Fragment>
            <Button label="No" icon="pi pi-times" className="p-button-text" onClick={hideDeleteProductsDialog} />
            <Button label="Yes" icon="pi pi-check" className="p-button-text" onClick={deleteSelectedProducts} />
        </React.Fragment>
    );

    return (
      <>
        <Paper className={classes.pageContent}>
            <div className="datatable-crud-demo">
                <Toast ref={toast} />

                <div className="card">
                    <Toolbar className="p-mb-4" left={leftToolbarTemplate} right={rightToolbarTemplate}></Toolbar>

                    <DataTable
                        ref={dt}
                        value={props.records}
                        selection={selectedProducts}
                        onSelectionChange={(e) => setSelectedProducts(e.value)}
                        dataKey="id" paginator rows={10} rowsPerPageOptions={[5, 10, 25]}
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                        currentPageReportTemplate="SHOWING {first} TO {last} OF {totalRecords} NOTES"
                        globalFilter={globalFilter}
                        header={header}
                        virtualScroll
                        virtualRowHeight={5}
                      >

                        <Column
                          selectionMode="multiple"
                          headerStyle={{ width: '3rem' }}
                        />
                        <Column
                          field="id"
                          header="ID"
                          sortable
                          filter
                        />
                        <Column
                          field="title"
                          header="TITLE"
                          sortable
                          filter
                        />
                        <Column
                          field="status"
                          header="STATUS"
                          sortable
                          filter
                        />
                        <Column
                          field="approval_status"
                          header="APPROVAL STATUS"
                          sortable
                          filter
                        />
                        <Column body={actionBodyTemplate} header="ACTIONS"/>
                    </DataTable>
                </div>

                <Dialog visible={productDialog} style={{ width: '600px' }} header="NOTES FORM" modal className="p-fluid" footer={productDialogFooter} onHide={hideDialog}>
                    <div className="p-field p-col-12 p-md-12">
                        <label htmlFor="name">TITLE</label>
                        <InputText id="title"
                            value={record.title}
                            onChange={(e) => onInputChange(e, 'title')}
                            required
                            autoFocus
                            tooltip="Enter Title"
                        />
                        {submitted && !record.title && <small className="p-error">Title is required.</small>}
                    </div>
                    <div className="p-field p-col-12 p-md-12">
                        <Dropdown
                            value={record.status}
                            optionLabel="value"
                            optionValue="key"
                            options={props.studynotesstatuschoices}
                            onChange={(e) => onInputChange(e, 'status')}
                            filter
                            showClear
                            filterBy="value"
                            placeholder="Select Status"

                        />
                    </div>
                    <div className="p-field p-col-12 p-md-12">
                        <Dropdown
                            value={record.approval_status}
                            optionLabel="value"
                            optionValue="key"
                            options={props.studynotesapprovalstatuschoices}
                            onChange={(e) => onInputChange(e, 'approval_status')}
                            filter
                            showClear
                            filterBy="value"
                            placeholder="Select Approval Status"
                        />
                    </div>
                    <div className="p-field p-col-12">
                        <label htmlFor="note">NOTES</label>
                        <InputTextarea
                            id="note"
                            value={record.note}
                            onChange={(e) => onInputChange(e, 'note')}
                            required
                            autoFocus
                            className={classNames({ 'p-invalid': submitted && !record.note })}
                            rows={3}
                            cols={30}
                        />
                        {submitted && !record.note && <small className="p-error">Notes are required.</small>}
                    </div>
                </Dialog>
                <Dialog visible={deleteProductDialog} style={{ width: '450px' }} header="Confirm" modal footer={deleteProductDialogFooter} onHide={hideDeleteProductDialog}>
                    <div className="confirmation-content">
                        <i className="pi pi-exclamation-triangle p-mr-3" style={{ fontSize: '2rem'}} />
                        {record && <span>Are you sure you want to delete <b>{record.name}</b>?</span>}
                    </div>
                </Dialog>
                <Dialog visible={deleteProductsDialog} style={{ width: '450px' }} header="Confirm" modal footer={deleteProductsDialogFooter} onHide={hideDeleteProductsDialog}>
                    <div className="confirmation-content">
                        <i className="pi pi-exclamation-triangle p-mr-3" style={{ fontSize: '2rem'}} />
                        {record && <span>Are you sure you want to delete the selected references?</span>}
                    </div>
                </Dialog>
            </div>
          </Paper>
        </>
    );
}

const mapStateToProps = state =>({
    studynotesstatuschoices: state.feechoices.studynotesstatuschoices,
    studynotesapprovalstatuschoices: state.feechoices.studynotesapprovalstatuschoices,
    records: state.courses.adminstudynotes,
    token: state.auth.token,
    loading: state.courses.loading,
})

export default connect(
  mapStateToProps,
  {getStudyNotes, addStudyNote, editStudyNote, getStudyNotesApprovalStatusChoices, getStudynotesStatusChoices} )
  (Notes);
