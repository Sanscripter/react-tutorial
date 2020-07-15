import React from 'react';

export default props => 
    <React.Fragment>
        <h2>Children of the Div</h2>
        <div>
            {props.children}
        </div>
    </React.Fragment>