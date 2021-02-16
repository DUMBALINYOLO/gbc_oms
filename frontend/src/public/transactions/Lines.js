import React, { Component } from "react"
import  Controls  from "../../components/formcontrols/Controls";



class Lines extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         debit_account: null,

    //     }
                 
    //     this.onAccount = this.onAccount.bind(this);

    // }

    


    render(){

        return (
           this.props.lines.map((val, idx) => {
            let product = `product-${idx}`, weight = `weight-${idx}`
            return (
                <tr key={val.index}>
                    
                    <td>
                    <Controls.Select
                          name="product"
                          data-id={idx}
                          id={product}
                          options={this.props.products}
                    />
                        
                    </td>
                    <td>
                        <input
                          type="number"
                          name="weight"
                          data-id={idx}
                          id={weight}
                          className="form-control"
                        />
                    </td>
                    <td>
                        <button>REQUEST WEIGHT</button>
                    </td>   
                    <td>
                        {
                        idx===0?<button onClick={()=>this.props.add()} type="button">+</button>
                        : <button  onClick={(() => this.props.delete(val))} >X</button>
                        }
                    </td>
                </tr>
            )
        }))
    }
}




export default Lines;


