import React from 'react';

import creators from '../data/creators';

export default props =>{
    
    function getCreators(){
        return creators.map(creator => 
            <li key={creator.id}>
                    <div>{creator.name},</div>
                    <div>{creator.likes} Likes</div>
            </li>
        );
    }
    return (
        <>
            <h3>Repeater Example</h3>
            <ul>
                { getCreators() }
            </ul>
        </>
    );
}