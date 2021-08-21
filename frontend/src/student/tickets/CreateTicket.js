import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import {
    addCustomerOpenTicket
} from '../../actions/tickets/customertickets';
import {InputText} from 'primereact/inputtext';



const categoryOptions = [
  {key: 'enquiry', value: 'ENQUIRY'},
  {key: 'complaint', value: 'COMPLAINT'},
  {key: 'refund', value: 'REFUND'},
  {key: 'application', value: 'APPLICATION'},
  {key: 'payment', value: 'PAYMENT'},
  {key: 'order', value: 'ORDER'},
]

const Ticket = (props) => {
    let ticket = {
      subject: '',
      category: '',
    }

    const {token} =props;
    const [record, setRecord]  = useState(ticket)

    const saveTicket = (e) => {
        e.preventDefault();
        let _record = {...record};
        if (record.id) {
            return;
        }
        else {
            props.addCustomerOpenTicket(_record, token)
        }
        props.getTickets(token)
        props.ticketDialog(false)
    }
    const onInputChange = (e, name) => {
        const val = (e.target && e.target.value) || '';
        let _record = {...record};
        _record[`${name}`] = val;
        setRecord(_record);
    }


    return (
        <div className="p-fluid p-formgrid p-grid">
            <div className="p-field p-col-12 p-md-12">
            <label htmlFor="righticon">SUBJECT</label>
            <span className="p-float-label p-input-icon-right">
                <i className="pi pi-spin pi-spinner" />
                <InputText
                    id="subject"
                    value={record.subject}
                    onChange={(e) => onInputChange(e, 'subject')}
                />
            </span>
          </div>
          <div className="p-field p-col-12 p-md-12">
              <Dropdown
                  value={record.category}
                  optionLabel="value"
                  optionValue="key"
                  options={categoryOptions}
                  onChange={(e) => onInputChange(e, 'category')}
                  filter
                  showClear
                  filterBy="value"
                  placeholder="Select Category"
              />

          </div>
          <div className="p-field p-col-12 p-md-6">
            <Button label='SUBMIT' onClick={saveTicket}/>
          </div>

        </div>
    );
}

const mapStateToProps = state =>({
    token: state.auth.token,
})

export default connect(
  mapStateToProps,
  {addCustomerOpenTicket} )
  (Ticket);
