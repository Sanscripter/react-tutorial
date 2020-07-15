import './index.css'

import React from 'react';
import ReactDOM from 'react-dom';

import Example from './components/ExampleFunction.jsx'
import Parametered from './components//ExampleParametered.jsx'
import ExampleWithChildren from './components/ExampleWithChildren.jsx'

ReactDOM.render(
    <div>
        <ExampleWithChildren>
            <Example></Example> 
            <Parametered
                unusedSecret1="This is a secret"
                title="Consider this a title"
                subtitle="And this a subtitle"
                unusedSecret2="And This is a secret"
            />
            <ol>
                <li>Rabbits</li>
                <li>Foxes</li>
                <li>INCREDIBLE HORSES</li>
            </ol>
        </ExampleWithChildren>
        {/* <Parametered
            unusedSecret1="boring"
            title="Consider this a  NEW title"
            subtitle="And this a NEW subtitle"
            unusedSecret2="And This is also boring"
        /> */}
    </div>,
    document.getElementById('root')
);
