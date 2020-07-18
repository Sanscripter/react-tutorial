import React from 'react';

export default props =>{

    return (
        <>
            <h3>Number is: {props.number} </h3>
            {
                props.number % 2 == 0 ?
                <span>Even</span> :
                <span>Odd</span>
            }
        </>
    );
}