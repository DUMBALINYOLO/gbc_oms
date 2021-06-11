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
import TeacherLayout from "../layout/TeacherLayout";
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
import { getGeneralGradingTypeChoices } from '../../actions/choices';
import { getClasses } from '../../actions/classes';
import { getTeacherProfiles } from '../../actions/people';
import { getSubjects } from '../../actions/curriculums';
import { getAdminStudentExcercises, addGrade, editGrade } from '../../actions/gradings';

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

const Excercises = (props) => {

    let emptyRecord = {
      name: '',
      klass: '',
      total_marks: '',
      type: '',
      subject: '',
      recorded_by: '',
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
    const history = useHistory();

    useEffect(() => {
      if(!props.fetched) {
          props.getClasses();
          props.getTeacherProfiles();
          props.getSubjects();
          props.getGeneralGradingTypeChoices();
          props.getAdminStudentExcercises(token);
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
                props.editGrade(record.id, record, token);
                setNewRecord(_record)
                props.getAdminStudentExcercises(token);
                setProductDialog(true);
                toast.current.show({ severity: 'success', summary: 'Successful', detail: 'EXERCISE UPDATED', life: 3000 });
            }
            else {
                props.addGrade(_record, token)
                setNewRecord(_record)
                props.getAdminStudentExcercises(token);
                toast.current.show({ severity: 'success', summary: 'Successful', detail: 'EXERCISE CREATED', life: 3000 });
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
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Exercise Deleted', life: 3000 });
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
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Exercises Deleted', life: 3000 });
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

    const handleClick = id =>{
      history.push(`/teacherdashboard/excercises/${id}`)
    }

    const leftToolbarTemplate = () => {
        return (
            <React.Fragment>
                <Button label="CREATE EXERCISE" icon="pi pi-plus" className="p-button-success p-mr-2" onClick={openNew}/>
            </React.Fragment>
        )
    }

    const rightToolbarTemplate = () => {
        return (
            <React.Fragment>
                <Button label="CSV" icon="pi pi-upload" className="p-button-primary" onClick={exportCSV} />
                <Button label="PDF" icon="pi pi-file-pdf" className="p-button-warning" onClick={exportCSV} />
                <Button label="PRINT" icon="pi pi-print" className="p-button-secondary" onClick={() => window.print()} />
            </React.Fragment>
        )
    }

    const imageBodyTemplate = (rowData) => {
        return <img src={`showcase/demo/images/product/${rowData.image}`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={rowData.image} className="product-image" />
    }

    const priceBodyTemplate = (rowData) => {
        return formatCurrency(rowData.price);
    }

    const ratingBodyTemplate = (rowData) => {
        return <Rating value={rowData.rating} readOnly cancel={false} />;
    }

    const statusBodyTemplate = (rowData) => {
        return <span className={`product-badge status-${rowData.inventoryStatus.toLowerCase()}`}>{rowData.inventoryStatus}</span>;
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
                  className="p-button-rounded"
                  onClick={() => handleClick(rowData.id)}
                />
            </React.Fragment>
        );
    }

    const header = (
        <div className="table-header">
            <h1 className="p-m-0">MANAGE EXERCISES</h1>
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
      <TeacherLayout>
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
                        currentPageReportTemplate="SHOWING {first} TO {last} OF {totalRecords} EXERCISES"
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
                          filterPlaceholder="SEARCH BY NAME"
                        />
                        <Column
                          field="total_marks"
                          header="MARKS"
                          sortable
                          filter
                          filterPlaceholder="SEARCH BY MARKS"
                        />
                        <Column
                          field="type"
                          header="TYPE"
                          sortable
                          filter
                          filterPlaceholder="SEARCH BY TYPE"
                        />
                        <Column
                          field="klass"
                          header="CLASS"
                          sortable
                          filter
                          filterPlaceholder="SEARCH BY CLASS"
                        />
                        <Column body={actionBodyTemplate}/>
                    </DataTable>
                </div>

                <Dialog visible={productDialog} style={{ width: '500px' }} header="EXERCISE FORM" modal className="p-fluid" footer={productDialogFooter} onHide={hideDialog}>
                  <Form>
                    <Grid container>
                      <Grid item xs={6}>
                        <Controls.Input
                          name="name"
                          label="NAME"
                          value={record.name}
                          onChange={(e) => onInputChange(e, 'name')}
                        />
                        <Controls.Input
                          label="TOTAL MARKS"
                          name="total_marks"
                          value={record.total_marks}
                          onChange={(e) => onInputChange(e, 'total_marks')}
                        />
                        <Controls.DictSelect
                            name="type"
                            label="TYPE"
                            value={record.type}
                            onChange={(e) => onInputChange(e, 'type')}
                            options={props.generalgradingtypechoices}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <Controls.Select
                            name="subject"
                            label="SUBJECT"
                            value={record.subject}
                            onChange={(e) => onInputChange(e, 'subject')}
                            options={props.subjects}
                        />
                        <Controls.Select
                            name="klass"
                            label="CLASS"
                            value={record.klass}
                            onChange={(e) => onInputChange(e, 'klass')}
                            options={props.classes}
                        />
                        <Controls.UserSelect
                            name="recorded_by"
                            label="TEACHER"
                            value={record.recorded_by}
                            onChange={(e) => onInputChange(e, 'recorded_by')}
                            options={props.teacherprofiles}
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
                        {record && <span>Are you sure you want to delete the selected references?</span>}
                    </div>
                </Dialog>
            </div>
          </Paper>
        </TeacherLayout>
    );
}

const mapStateToProps = state =>({
    generalgradingtypechoices: state.feechoices.generalgradingtypechoices,
    classes: state.classes.classes,
    teacherprofiles: state.people.teacherprofiles,
    subjects: state.curriculums.subjects,
    records: state.gradings.adminstudentexcercises,
    token: state.auth.token,
    loading: state.gradings.loading,
})

export default connect(
  mapStateToProps,
  {getClasses, getGeneralGradingTypeChoices, getTeacherProfiles, getSubjects, getAdminStudentExcercises, addGrade, editGrade} )
  (Excercises);
