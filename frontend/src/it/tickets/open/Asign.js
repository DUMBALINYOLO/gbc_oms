import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Button } from 'primereact/button';
import { 
    assignTicket
} from '../../../actions/tickets/opentickets';
import {getStaffUsers} from '../../../actions/people';
import { Dropdown } from 'primereact/dropdown';




const Buy = (props) => {
    let order = {
        assigned_to: '',
    }

    const {token} =props;
    const [record, setRecord]  = useState(order)


    useEffect(() => {
        if(!props.fetched) {
            props.getStaffUsers(token)
    
        }
        console.log('mount it!');
      }, []);

    const saveItem = (e) => {
        e.preventDefault();
        let _record = {...record};
        if (record.id) {
            return;
        }
        else {
            props.assignTicket(props.id, _record, token)
            console.log(token)
        }
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
            <label htmlFor="righticon">ASIGN TO</label>
            <span className="p-float-label p-input-icon-right">
                <Dropdown
                    value={record.assigned_to}
                    optionLabel="username"
                    optionValue="id"
                    options={props.staffusers}
                    onChange={(e) => onInputChange(e, 'assigned_to')}
                    filter
                    showClear
                    filterBy="username"
                    placeholder="ASIGN TO"
                />
               
            </span>
            </div>
          <div className="p-field p-col-12 p-md-6">
            <Button label='SUBMIT' onClick={saveItem}/>
          </div>
        </div>
    );
}

const mapStateToProps = state =>({
    token: state.auth.token,
    email: state.auth.email,
    staffusers: state.people.staffusers,
})

export default connect(
  mapStateToProps,
  {getStaffUsers, assignTicket} )
  (Buy);

