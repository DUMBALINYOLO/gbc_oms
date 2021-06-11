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
import { Dropdown } from 'primereact/dropdown';
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
import { getStudentsClassStatusChoices } from '../../actions/choices';
import { getStreams, getClasses, addClass, editClass } from '../../actions/classes';
import {  getTeacherProfiles } from '../../actions/people';


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



const AdminClass = (props) => {

    let emptyClass = {
      name: '',
      stream: '',
      max_population: '',
      class_teacher: '',
      year: '',
      status: '',
    };

    const classes = useStyles();
    const [products, setProducts] = useState(null);
    const [productDialog, setProductDialog] = useState(false);
    const [deleteProductDialog, setDeleteProductDialog] = useState(false);
    const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);
    const [record, setRecord] = useState(emptyClass);
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [newRecord, setNewRecord] = useState({});
    const [globalFilter, setGlobalFilter] = useState(null);
    const toast = useRef(null);
    const dt = useRef(null);
    const {token, records} =props;
    const history = useHistory();

    useEffect(() => {
      if(!props.fetched) {
        props.getStudentsClassStatusChoices(props.token);
        props.getStreams(props.token);
        props.getTeacherProfiles(props.token);
        props.getClasses(token);
      }
      console.log('mount it!');
    }, [newRecord]);


    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }

    const openNew = () => {
        setRecord(emptyClass);
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
                props.editClass(record.id, record, token);
                setNewRecord(_record)
                props.getClasses(token);
                setProductDialog(true);
                toast.current.show({ severity: 'success', summary: 'Successful', detail: 'CLASS UPDATED', life: 3000 });
            }
            else {
                props.addClass(_record, token)
                setNewRecord(_record)
                props.getClasses(token);
                toast.current.show({ severity: 'success', summary: 'Successful', detail: 'CLASS CREATED', life: 3000 });
            }
            setProductDialog(false);
            setRecord(emptyClass);
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
        setRecord(emptyClass);
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Class Deleted', life: 3000 });
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

    const handleClick = id =>{
      history.push(`/itdashboard/classes/${id}`)
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
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Classes Deleted', life: 3000 });
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
                <Button label="CREATE CLASS" className="p-button-info p-mr-2" onClick={openNew} />
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

    const maxBodyTemplate = (rowData) => {
      return (
          <Badge value={rowData.max_population} severity="info" />
      );
    }

    const statusBodyTemplate = (rowData) => {
      return (
          <Badge value={rowData.status} severity="danger" />
      );
    }

    const yearBodyTemplate = (rowData) => {
      return (
          <Badge value={rowData.year} severity="info" />
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
                  onClick={() => handleClick(rowData.id)} />
            </React.Fragment>
        );
    }

    const header = (
        <div className="table-header">
            <h1 className="p-m-0">MANAGE CLASS</h1>
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
      <InformationTechnologyLayout>
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
                        currentPageReportTemplate="SHOWING {first} TO {last} OF {totalRecords} CLASSES"
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

                        />
                        <Column
                          field="name"
                          header="NAME"
                          sortable
                          filter


                        />
                        <Column
                          field="max_population"
                          header="CLASS POPULATION"
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
                          field="year"
                          header="YEAR"
                          sortable
                          filter

                        />
                        <Column body={actionBodyTemplate}/>
                    </DataTable>
                </div>

                <Dialog visible={productDialog} style={{ width: '800px' }} header="CLASS FORM" modal className="p-fluid" footer={productDialogFooter} onHide={hideDialog}>
                  <div className="p-fluid p-formgrid p-grid">
                      <div className="p-field p-col-12 p-md-6">
                        <label htmlFor="name">NAME</label>
                        <InputText
                          id="name"
                          value={record.name}
                          onChange={(e) => onInputChange(e, 'name')}
                          required
                          autoFocus
                          tooltip="Enter Name"
                        />
                        {submitted && !record.name && <small className="p-error">Name is required.</small>}
                      </div>
                      <div className="p-field p-col-12 p-md-6">
                        <label htmlFor="max_population">MAX POPULATION</label>
                        <InputText
                          id="max_population"
                          value={record.max_population}
                          onChange={(e) => onInputChange(e, 'max_population')}
                          required
                          autoFocus
                          tooltip="Enter Max Population"
                          type="number"
                        />
                        {submitted && !record.name && <small className="p-error">Name is required.</small>}
                      </div>

                      <div className="p-field p-col-12 p-md-6">

                        <Dropdown
                            value={record.status}
                            optionLabel="value"
                            optionValue="key"
                            options={props.studentclassstatuschoices}
                            onChange={(e) => onInputChange(e, 'status')}
                            filter
                            showClear
                            filterBy="name"
                            placeholder="Select Status"

                          />
                      </div>

                      <div className="p-field p-col-12 p-md-6">

                        <Dropdown
                            value={record.stream}
                            optionLabel="grade"
                            optionValue="id"
                            options={props.streams}
                            onChange={(e) => onInputChange(e, 'stream')}
                            filter
                            showClear
                            filterBy="name"
                            placeholder="Select GRADE"

                          />
                      </div>

                      <div className="p-field p-col-12 p-md-6">

                        <Dropdown
                            value={record.class_teacher}
                            optionLabel="name"
                            optionValue="id"
                            options={props.adminteachers}
                            onChange={(e) => onInputChange(e, 'class_teache')}
                            filter
                            showClear
                            filterBy="name"
                            placeholder="Select Teacher"

                          />
                      </div>
                      <div className="p-field p-col-12 p-md-6">
                        <InputText
                          id="year"
                          value={record.year}
                          onChange={(e) => onInputChange(e, 'year')}
                          required
                          autoFocus
                          tooltip="Enter Year"
                        />
                        {submitted && !record.year && <small className="p-error">Name is required.</small>}
                      </div>
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
                        {record && <span>Are you sure you want to delete the selected classes?</span>}
                    </div>
                </Dialog>
            </div>
          </Paper>
        </InformationTechnologyLayout>
    );
}

const mapStateToProps = state =>({
    records: state.classes.classes,
    token: state.auth.token,
    loading: state.classes.loading,
    streams: state.classes.streams,
    studentclassstatuschoices: state.classes.studentclassstatuschoices,
    adminteachers: state.people.teacherprofiles,
})
export default connect(
  mapStateToProps,
  {getClasses, addClass, editClass, getTeacherProfiles, getStreams, getStudentsClassStatusChoices } )
  (AdminClass);
