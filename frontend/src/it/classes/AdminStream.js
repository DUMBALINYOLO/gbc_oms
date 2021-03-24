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
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/luna-blue/theme.css';
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
// import { InputTextarea } from 'primereact/inputtextarea';
import { MultiSelect } from 'primereact/multiselect';
import  Controls  from "../../components/formcontrols/Controls";
import { getStreams, addStream, editStream } from '../../actions/classes';;


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



const AdminStream = (props) => {

    let emptyStream = {
      grade: '',
    };

    const classes = useStyles();
    const [products, setProducts] = useState(null);
    const [productDialog, setProductDialog] = useState(false);
    const [deleteProductDialog, setDeleteProductDialog] = useState(false);
    const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);
    const [record, setRecord] = useState(emptyStream);
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
        props.getStreams(token);
      }
      console.log('mount it!');
    }, [newRecord]);


    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }

    const openNew = () => {
        setRecord(emptyStream);
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
              props.editStream(record.id, record, token);
              setNewRecord(_record)
              props.getStreams(token);
              setProductDialog(true);
              toast.current.show({ severity: 'success', summary: 'Successful', detail: 'STREAM UPDATED', life: 3000 });
          }
          else {
              props.addStream(_record, token)
              setNewRecord(_record)
              props.getStreams(token);
              toast.current.show({ severity: 'success', summary: 'Successful', detail: 'STREAM CREATED', life: 3000 });
          }
          setProductDialog(false);
          setRecord(emptyStream);
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
        setRecord(emptyStream);
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Stream Deleted', life: 3000 });
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
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Streams Deleted', life: 3000 });
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
                <Button label="CREATE STREAM" icon="pi pi-plus" className="p-button-success p-mr-2" onClick={openNew} />
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
                />
            </React.Fragment>
        );
    }

    const header = (
        <div className="table-header">
            <h1 className="p-m-0">MANAGE STREAM</h1>
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
                        currentPageReportTemplate="SHOWING {first} TO {last} OF {totalRecords} STREAMS"
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
                          field="grade"
                          header="GRADE"
                          sortable
                          filter
                          filterPlaceholder="SEARCH BY GRADE"
                        />
                        <Column body={actionBodyTemplate}/>
                    </DataTable>
                </div>

                <Dialog visible={productDialog} style={{ width: '500px' }} header="STREAM FORM" modal className="p-fluid" footer={productDialogFooter} onHide={hideDialog}>
                  <Form>
                    <Grid container>
                      <Grid item xs={12}>
                        <Controls.Input
                            name="grade"
                            label="GRADE"
                            value={record.grade}
                            onChange={(e) => onInputChange(e, 'grade')}
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
                        {record && <span>Are you sure you want to delete the selected streams?</span>}
                    </div>
                </Dialog>
            </div>
          </Paper>
        </InformationTechnologyLayout>
    );
}

const mapStateToProps = state =>({
    records: state.classes.streams,
    token: state.auth.token,
    loading: state.classes.loading,
})

export default connect(
  mapStateToProps,
  {getStreams, addStream, editStream } )
  (AdminStream);
