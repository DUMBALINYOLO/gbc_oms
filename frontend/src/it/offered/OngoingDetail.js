import React from 'react';
import { Panel } from 'primereact/panel';
import {
    Paper,
  }from '@material-ui/core';




const Detail = (props) => { 
    const {
        id,
        name,
        start_date,
        end_date,
        price,
        description      

    } = props.data;

    
    return (
        <Paper>

           
            <div className="flexgrid-demo">
                    
                <h1 style={{textAlign: 'center'}}>DETAILS</h1>
                <div className="p-grid">
                    <div className="p-col">
                        <Panel header="ID">
                            <p>
                                {id}
                            </p>
                        </Panel>
                    </div>
                    <div className="p-col">
                        <Panel header="NAME">
                            <p>
                                {name}
                            </p>
                        </Panel>
                    </div>
                </div>

                <div className="p-grid">
                    <div className="p-col">
                        <Panel header="START DATE">
                            <p>
                                {start_date}
                            </p>
                        </Panel>
                    </div>
                    
                    <div className="p-col">
                        <Panel header="END DATE">
                            <p>
                                {end_date}
                            </p>
                        </Panel>
                    </div>
                    <div className="p-col">
                        <Panel header="PRICE">
                            <p>
                                {price}
                            </p>
                        </Panel>
                    </div>
                </div>
                <div className="p-grid">
                    <div className="p-col">
                        <Panel header="DESCRIPTION">
                            <p>
                                {description}
                            </p>
                        </Panel>
                    </div>
                    
                    
                </div>
            </div>
        </Paper>
    );
}


export default Detail;