import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
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
import {Form} from "../../components/formcontrols/useForm";
import './table.css';
import InformationTechnologyLayout from "../layout/InformationTechnologyLayout";
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
import { Badge } from 'primereact/badge';
import { MultiSelect } from 'primereact/multiselect';
import  Controls  from "../../components/formcontrols/Controls";
import { getAttendanceStatusChoices } from '../../actions/choices';
import {  editAttendanceRecord, getAdminAttendanceRecords } from '../../actions/attendances';


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



const Records = (props) => {

    let emptyRecord = {
      status: '',
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
    const {token, records} =props;
    const {id} =props.data;

    const history = useHistory();
    console.log(props.data)

    useEffect(() => {
      if(!props.fetched) {
        props.getAttendanceStatusChoices();
        props.getAdminAttendanceRecords(id, token);
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
                props.editAttendanceRecord(record.id, record, token);
                setNewRecord(_record)
                props.getAdminAttendanceRecords(id, token);
                setProductDialog(true);
                toast.current.show({ severity: 'success', summary: 'Successful', detail: 'RECORD UPDATED', life: 3000 });
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
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Record Deleted', life: 3000 });
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
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Records Deleted', life: 3000 });
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

    const attendanceBodyTemplate = (rowData) => {
      return (
          <Badge value={rowData.attendance} severity="info" />
      );
    }

    const studentBodyTemplate = (rowData) => {
      return (
          <Badge value={rowData.student} severity="info" />
      );
    }

    const statusBodyTemplate = (rowData) => {
      return (
          <Badge value={rowData.recorded_by} severity="warning" />
      );
    }

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button
                  icon="pi pi-pencil"
                  className="p-button-rounded p-button-info p-mr-2"
                  onClick={() => editProduct(rowData)}
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
            <h1 className="p-m-0">MANAGE RECORD</h1>
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
                    <Toolbar className="p-mb-4" right={rightToolbarTemplate}></Toolbar>

                    <DataTable
                        ref={dt}
                        value={props.records}
                        selection={selectedProducts}
                        onSelectionChange={(e) => setSelectedProducts(e.value)}
                        dataKey="id" paginator rows={10} rowsPerPageOptions={[5, 10, 25]}
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                        currentPageReportTemplate="SHOWING {first} TO {last} OF {totalRecords} RECORDS"
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
                          filterPlaceholder="SEARCH BY ID"
                          body={idBodyTemplate}
                        />
                        <Column
                          field="attendance"
                          header="ATTENDANCE"
                          sortable
                          filter
                          filterPlaceholder="SEARCH BY ATTENDANCE"
                          body={attendanceBodyTemplate}
                        />
                        <Column
                          field="student"
                          header="STUDENT"
                          sortable
                          filter
                          filterPlaceholder="SEARCH BY STUDENT"
                          body={studentBodyTemplate}
                        />
                        <Column
                          field="status"
                          header="STATUS"
                          sortable
                          filter
                          filterPlaceholder="SEARCH BY STATUS"
                          body={statusBodyTemplate}
                        />
                        <Column body={actionBodyTemplate}/>
                    </DataTable>
                </div>

                <Dialog visible={productDialog} style={{ width: '500px' }} header="RECORD FORM" modal className="p-fluid" footer={productDialogFooter} onHide={hideDialog}>
                  <Form>
                    <Grid container>
                      <Grid item xs={12}>
                        <Controls.DictSelect
                            name="status"
                            label="ATTENDANCE STATUS"
                            value={record.status}
                            onChange={(e) => onInputChange(e, 'status')}
                            options={props.attendancestatuschoices}
                        />
                      </Grid>
                    </Grid>
                  </Form>
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
                        {record && <span>Are you sure you want to delete the selected records?</span>}
                    </div>
                </Dialog>
            </div>
          </Paper>
        </>
    );
}

const mapStateToProps = state =>({
    token: state.auth.token,
    loading: state.adminattendances.loading,
    records: state.adminattendances.attendandancerecords,
    attendancestatuschoices: state.feechoices.attendancestatuschoices,
})

export default connect(
  mapStateToProps,
  {editAttendanceRecord, getAdminAttendanceRecords, getAttendanceStatusChoices} )
  (Records);
