import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import {Form} from "../../components/formcontrols/useForm";
import { DataTable } from 'primereact/datatable';
import { connect } from 'react-redux';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';
import { Rating } from 'primereact/rating';
import { Toolbar } from 'primereact/toolbar';
import { InputTextarea } from 'primereact/inputtextarea';
import { RadioButton } from 'primereact/radiobutton';
import { InputNumber } from 'primereact/inputnumber';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { useHistory } from 'react-router-dom';
import './table.css';

import {
  Paper,
  makeStyles,
  TableBody,
  TableRow,
  TableCell,
  InputAdornment,
  Grid,
}
from '@material-ui/core';
import { MultiSelect } from 'primereact/multiselect';
import  Controls  from "../../components/formcontrols/Controls";
import {  getStudentAssignments } from '../../actions/gradings';
import { Badge } from 'primereact/badge';

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

const AssignmentRecords = (props) => {

    let emptyRecord = {
      score: '',
    };

    const classes = useStyles();
    const [products, setProducts] = useState(null);
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
    const {token, records, email} =props;
    const {id} =props.data
    const history = useHistory();

    useEffect(() => {
      if(!props.fetched) {
        props.getStudentAssignments(email, token);
      }
      console.log('mount it!');
    }, [newRecord]);


    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }

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
        if (record.name.trim()) {
            let _records = [...records];
            let _record = {...record};
            if (record.id) {
                setNewRecord(_record)
                props.getStudentAssignments(email, token);
                setProductDialog(true);
                toast.current.show({ severity: 'success', summary: 'Successful', detail: 'ASSIGNMENT RECORDS UPDATED', life: 3000 });
            }
            else {
                setNewRecord(_record)
                props.getStudentAssignments(email, token);
                toast.current.show({ severity: 'success', summary: 'Successful', detail: 'ASSIGNMENT RECORDS CREATED', life: 3000 });
            }
            setProductDialog(false);
            setRecord(emptyRecord);
        }
    }

    const editProduct = (record) => {
        setRecord({...record});
        setProductDialog(true);
    }

    const confirmDeleteProduct = (record) => {
        setRecord(record);
        setDeleteProductDialog(true);
    }

    const deleteProduct = () => {
        let _records = records.filter(val => val.id !== record.id);
        setRecord(_records);
        setDeleteProductDialog(false);
        setRecord(emptyRecord);
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Student Deleted', life: 3000 });
    }

    const findIndexById = (id) => {
        let index = -1;
        for (let i = 0; i < records.length; i++) {
            if (records[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    }

    const exportCSV = () => {
        dt.current.exportCSV();
    }

    const confirmDeleteSelected = () => {
        setDeleteProductsDialog(true);
    }

    const deleteSelectedProducts = () => {
        let _records = records.filter(val => !selectedProducts.includes(val));
        setDeleteProductsDialog(false);
        setSelectedProducts(null);
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Students Deleted', life: 3000 });
    }

    const onCategoryChange = (e) => {
        let _record = {...record};
        _record['category'] = e.value;
        setRecord(_record);
    }

    const onInputChange = (e, name) => {
        const val = (e.target && e.target.value) || '';
        let _record = {...record};
        _record[`${name}`] = val;
        setRecord(_record);
    }

    const onInputNumberChange = (e, name) => {
        const val = e.value || 0;
        let _record = {...record };
        _record[`${name}`] = val;

        setRecord(_record);
    }

    const onStatusChange = (e) => {
        let _record = {...record };
        _record['status'] = e.value;
        setRecord(_record);
    }


    const leftToolbarTemplate = () => {
        return (
            <React.Fragment>
                <Button label="ASSIGNMENT RECORDS" className="p-button-warning p-mr-2" />
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

    const imageBodyTemplate = (rowData) => {
        return <img src={`showcase/demo/images/product/${rowData.image}`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={rowData.image} className="product-image" />
    }

    const idBodyTemplate = (rowData) => {
      return (
          <Badge value={rowData.id} severity="info" />
      );
    }

    const nameBodyTemplate = (rowData) => {
      return (
          <Badge value={rowData.name} severity="info" />
      );
    }

    const subjectBodyTemplate = (rowData) => {
      return (
          <Badge value={rowData.subject} severity="info" />
      );
    }

    const totalmarksBodyTemplate = (rowData) => {
      return (
          <Badge value={rowData.totalmarks} severity="info" />
      );
    }

    const scoreBodyTemplate = (rowData) => {
      return (
          <Badge value={rowData.score} severity="info" />
      );
    }

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button
                  icon="pi pi-pencil"
                  className="p-button-rounded p-button-info p-mr-2"
                >
                </Button>
                <Button
                  icon="pi pi-sign-in"
                  className="p-button-rounded p-button-info"
                />
            </React.Fragment>
        );
    }

    const header = (
        <div className="table-header">
            <h1 className="p-m-0">MANAGE ASSIGNMENT RECORDS</h1>
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
                        currentPageReportTemplate="SHOWING {first} TO {last} OF {totalRecords} ENROLLMENTS"
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
                          field="name"
                          header="NAME"
                          sortable
                          filter

                        />
                        <Column
                          field="subject"
                          header="SUBJECT"
                          sortable
                          filter


                        />
                        <Column
                          field="totalmarks"
                          header="TOTAL MARKS"
                          sortable
                          filter


                        />
                        <Column
                          field="score"
                          header="SCORE"
                          sortable
                          filter


                        />
                        <Column body={actionBodyTemplate}/>
                    </DataTable>
                </div>
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
    token: state.auth.token,
    email: state.auth.email,
    records: state.gradings.studentassignments,
    loading: state.gradings.loading,
})

export default connect(
  mapStateToProps,
  {getStudentAssignments}
  )
  (StudentAssigmentRecords);