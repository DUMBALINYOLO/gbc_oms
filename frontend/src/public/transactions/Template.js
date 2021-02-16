import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import './styles.css';
import Button from '@material-ui/core/Button';
import { getDate } from '../../components/helpers/dateTimeHelper';
import {getTransactionStatusChoices, getTransactionTypeChoices} from '../../actions/choices';
import {getProducts} from '../../actions/products';
import {getCustomers} from '../../actions/customers';
import {getVehicles} from '../../actions/vehicles';
import { getLoadingPoints, addOneTierTransactionAdminView } from '../../actions/transactions';
import Lines from './Lines';
import  Controls  from "../../components/formcontrols/Controls";





const styles = {
  whitePaper: {
    background: '#6495ED',
    color: '#000',
    minWidth: 800,
    border: '1px solid #dedede'
  }
};



class Template extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        status: null,
        type: null,
        client: null,
        vehicle: null,
        loading_point: null,
        header: 'TRANSACTION',
        address: `Flexweigh 48A G.SILUNDIKA STREET
                  Between 3rd & 4th Avenues
                  BULWAYO
                  Phone: +263 965796
                      `,
        title: 'Transaction',
        date: getDate(),
        note: 'It is always a Pleasure Doing Bussiness with you!!!!!',
        lines: [{ index: Math.random(), product: '', weight: '' }], 
        total: 0,
      };
    this.onSubmit = this.onSubmit.bind(this);
    this.setTotal = this.setTotal.bind(this);
    this.handleChange= this.handleChange.bind(this);
    this.handleChangeTable = this.handleChangeTable.bind(this);
    this.handleWeightChange = this.handleWeightChange.bind(this);
    this.addNewRow = this.addNewRow.bind(this);
    this.deleteRow = this.deleteRow.bind(this);
    this.handleLinesChange = this.handleLinesChange.bind(this);
  }
    

  componentDidMount() {
    this.setTotal();
    this.props.getCustomers();
    this.props.getProducts();
    this.props.getVehicles();
    this.props.getLoadingPoints();
    this.props.getTransactionStatusChoices();
    this.props.getTransactionTypeChoices();

  };

  onSubmit = (e) => {
    e.preventDefault();
    const {
      status,
      type,
      client,
      vehicle,
      loading_point,
      lines,

    } = this.state;

    const transaction = {
      status,
      type,
      client,
      vehicle,
      loading_point,
      lines
    };

    this.props.addOneTierTransactionAdminView(transaction);
    console.log(transaction)
    this.setState({
      status: null,
      type: null,
      client: null,
      vehicle: null,
      loading_point: null,
      lines: []
    });
      
  };

  handleLinesChange = (e) => {
    if (["product", "weight"].includes(e.target.name)) {
        let lines = [...this.state.lines]
        lines[e.target.dataset.id][e.target.name] = e.target.value;

    } else {
        this.setState({ [e.target.name]: e.target.value })
    }
  }

  setTotal() {
    let t = 0;
    const { lines } = this.state;
    for (let i = 0; i < lines.length; i += 1) {
      t += (lines[i].weight);
    }
    this.setState({ total: t });
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleWeightChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
    setTimeout(() => {
      this.setTotal();
    });
  };


  handleChangeTable = (name, id) => event => {
    this.updateItem(id, { [name]: event.target.value });
  };






  addNewRow = (e) => {
    this.setState((prevState) => ({
        lines: [...prevState.lines, { index: Math.random(), product: "", weight: '' }],
    }));
  }

  deleteRow = (index) => {
      this.setState({
          lines: this.state.lines.filter((s, sindex) => index !== sindex),
      });
  }

  clickOnDelete(record) {
      this.setState({
          lines: this.state.lines.filter(r => r !== record)
      });
  }

  render() {
    const { classes } = this.props;
    const {
      status,
      type,
      client,
      vehicle,
      loading_point,
      lines,
      header,
      address,
      title,
      note,
      total
    } = this.state;

    const {
      vehicles,
      customers,
      loadingpoints,
      products,
      transactiontypechoices,
      transactionstatuschoices,

    } = this.props;


    return (
      <div className={classes.whitePaper}>
        <form onChange={this.handleLinesChange}>
          <div id="page-wrap">
            <textarea id="header" value={header} onChange={this.handleChange('header')} />
            <div id="identity">
              <textarea id="address" value={address} onChange={this.handleChange('address')} />
              <div id="logo">
                <img id="image" src="/images/print_logo.jpg" alt="logo" />
              </div>

            </div>

            <div style={{ clear: 'both' }} />

            <div id="customer">
              <textarea id="customer-title" onChange={this.handleChange('title')} value={title} />
              <table id="meta">
                <tbody>
                <tr>
                    <td className="meta-head">STATUS</td>
                    <td>
                    <Controls.DictSelect
                          name="status"
                          value={status}
                          onChange={this.handleChange('status')}
                          options={transactionstatuschoices}
                    />
                    </td>
                  </tr>
                  <tr>
                    <td className="meta-head">TYPE</td>
                    <td>
                    <Controls.DictSelect
                          name="type"
                          value={type}
                          onChange={this.handleChange('type')}
                          options={transactiontypechoices}
                    />
                    </td>
                  </tr>
                  <tr>
                    <td className="meta-head">CLIENT</td>
                    <td>
                    <Controls.Select
                          name="client"
                          value={client}
                          onChange={this.handleChange('client')}
                          options={customers}
                    />
                    </td>
                  </tr>
                  <tr>
                    <td className="meta-head">VEHICLE</td>
                    <td>
                    <Controls.Select
                          name="vehicle"
                          value={vehicle}
                          onChange={this.handleChange('vehicle')}
                          options={vehicles}
                    />
                    </td>
                  </tr>
                  <tr>
                    <td className="meta-head">LOADING POINT</td>
                    <td>
                    <Controls.Select
                          name="loading_point"
                          value={loading_point}
                          onChange={this.handleChange('loading_point')}
                          options={loadingpoints}
                    />
                    </td>
                  </tr>
                  <tr>
                    <td className="meta-head">TOTAL</td>
                    <td>
                      <div className="due">
                        
                        {total}KG
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>

            </div>

            <table id="items">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Weight</th>
                  <th>Weight Req</th>
                </tr>
              </thead>
              <tbody>
                <Lines 
                  products={products}
                  add={this.addNewRow} 
                  delete={this.clickOnDelete.bind(this)}
                  handleLinesChange={this.handleLinesChange}
                  lines={lines}
                />
                <tr>
                  <td colSpan="2" className="blank">&nbsp;</td>
                  <td colSpan="2" className="total-line">Subtotal</td>
                  <td className="total-value">
                    <div id="subtotal">
                      KG
                      {total}
                      .00
                    </div>
                  </td>
                </tr>
                <tr><td colSpan="4">
                    <button onClick={this.addNewRow}>+</button>
                </td></tr>


                <tr>
                  <td colSpan="2" className="blank">&nbsp;</td>
                  <td colSpan="2" className="total-line">Total</td>
                  <td className="total-value">
                    <div id="total">
                      KG
                      {total}
                      .00
                    </div>
                  </td>
                </tr>

                <tr>
                  <td colSpan="2" className="blank">&nbsp;</td>
                  <td colSpan="2" className="total-line">Amount Paid</td>
                </tr>

                <tr>
                  <td colSpan="2" className="blank-last">&nbsp;</td>
                  <td colSpan="2" className="total-line balance">Balance Due</td>
                  <td className="total-value balance">
                    <div className="due">
                      KG
                      {total}
                    </div>
                  </td>
                </tr>
              </tbody>
              
            </table>
            <Button variant="contained" onClick={this.onSubmit}>SUBMIT</Button>


            <div id="terms">
              <h5>Terms</h5>
              <textarea onChange={this.handleChange('note')} value={note} />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

Template.propTypes = {
  classes: PropTypes.object.isRequired,
};


const mapStateToProps = state =>({
  transactiontypechoices: state.transactionchoices.transactiontypechoices,
  transactionstatuschoices: state.transactionchoices.transactionstatuschoices,
  vehicles: state.vehicles.vehicles,
  loadingpoints: state.transactions.loadingpoints,
  customers: state.customers.customers,
  products: state.products.products,
})

export default compose(connect(
  mapStateToProps, {
    getCustomers, 
    getProducts, 
    getTransactionTypeChoices, 
    getVehicles, 
    getLoadingPoints, 
    addOneTierTransactionAdminView, 
    getTransactionStatusChoices, }),
    withStyles(styles)
)
    (Template);



