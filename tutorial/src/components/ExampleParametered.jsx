import React from 'react';

export default props => 
    <>
        <h3>{props.title || "A Title"}</h3>
        <p>{props.subtitle || "The Subtitle"}</p>
        <p>{40 + 2}</p>
        <p>{Array(50).fill('interesting')}</p>
        <p>{Object.keys(props).join(' ')}</p>
        <p>{Object.keys(props).map((key)=> `${props[key]} `)}</p>
    </>