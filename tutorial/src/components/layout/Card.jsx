import './Card.css'
import React from 'react';

export default props =>
    <div className="Card">
        <h4 style={{textAllign:'center'}}>{props.title}</h4>
        <div className="Conhtent">
            {props.children}
        </div>
    </div>