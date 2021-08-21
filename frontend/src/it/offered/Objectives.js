import React, { useState, useRef } from 'react';
import classNames from 'classnames';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';

import {
  Paper,
  makeStyles,

}
from '@material-ui/core';

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


const Objectives = (props) => {


    let emptyRecord = {
        name: '',
        description: '',
        course_id: props.id,
      };

    const classes = useStyles();
    const [productDialog, setProductDialog] = useState(false);
    const [record, setRecord] = useState(emptyRecord);
    const [submitted, setSubmitted] = useState(false);
    const [globalFilter, setGlobalFilter] = useState(null);
    const toast = useRef(null);
    const dt = useRef(null);
    const {token} =props;




    const openNew = () => {
        setRecord(emptyRecord);
        setSubmitted(false);
        setProductDialog(true);
    }

    const hideDialog = () => {
        setSubmitted(false);
        setProductDialog(false);
    }

    
    const saveProduct = (e) => {
        setSubmitted(true);
        e.preventDefault(); 
        let _record = {...record};
        if (record.id) {
            console.log(_record)   
        }
        else {
            props.addObjective(_record, token)
            props.getObjectives(props.id, token);
            toast.current.show({ severity: 'success', summary: 'Successful', detail: 'OBJECTIVES CREATED', life: 3000 });
        }
        setProductDialog(false);
        setRecord(emptyRecord);

    }

    // const editProduct = (record) => {
    //     setRecord({...record});
    //     setProductDialog(true);
    // }

   
    
    
    const onInputChange = (e, name) => {
        const val = (e.target && e.target.value) || '';
        let _record = {...record};
        _record[`${name}`] = val;
        setRecord(_record);
    }

    

    

    const leftToolbarTemplate = () => {
        return (
            <React.Fragment>
                <Button label="CREATE OBJECTIVES" className="p-button-warning p-mr-2" onClick={openNew} />
            </React.Fragment>
        )
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



    return (
      <>
        <Paper className={classes.pageContent}>
            <div className="datatable-crud-demo">
                <Toast ref={toast} />

                <div className="card">
                    <Toolbar className="p-mb-4" left={leftToolbarTemplate}></Toolbar>

                    <DataTable
                        ref={dt}
                        value={props.records}
                        dataKey="id" paginator rows={10} rowsPerPageOptions={[5, 10, 25]}
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                        currentPageReportTemplate="SHOWING {first} TO {last} OF {totalRecords} OBJECTIVES"
                        globalFilter={globalFilter}
                        header={header}
                        virtualScroll
                        virtualRowHeight={5}
                      >

                        
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
                          field="description"
                          header="DESCRIPTION"
                          sortable
                          filter
            
                        />
                        
                    </DataTable>
                </div>

                <Dialog visible={productDialog} style={{ width: '500px' }} header="OBJECTIVE FORM" modal className="p-fluid" footer={productDialogFooter} onHide={hideDialog}>
                        <div className="p-field p-col-12 p-md-12">
                            <label htmlFor="name">NAME</label>
                            <InputText id="name"
                                value={record.name}
                                onChange={(e) => onInputChange(e, 'name')}
                                required
                                autoFocus
                                tooltip="Enter Name"
                            />
                            {submitted && !record.name && <small className="p-error">Title is required.</small>}
                        </div>
                        <div className="p-field p-col-12">
                          <label htmlFor="description">DESCRIPTION</label>
                          <InputTextarea
                              id="description"
                              value={record.description}
                              onChange={(e) => onInputChange(e, 'description')}
                              required
                              autoFocus
                              className={classNames({ 'p-invalid': submitted && !record.description })}
                              rows={3}
                              cols={30}
                            />
                          {submitted && !record.description && <small className="p-error">Description is required.</small>}
                      </div>
                </Dialog>

            </div>
          </Paper>
        </>
    );
}


export default Objectives;
