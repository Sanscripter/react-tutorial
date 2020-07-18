import React from 'react';

import './index.css';
import './App.css';

import Example from './components/ExampleFunction.jsx';
import Parametered from './components/ExampleParametered.jsx';
import ExampleWithChildren from './components/ExampleWithChildren.jsx';
import ExampleRepeater from './components/ExampleRepeater.jsx';
import ExampleConditional from './components/ExampleConditional';

import Card from './components/layout/Card.jsx';

export default () =>
    <div className="App">
        <Card
                title="A Card Like no other!"
            >
                <ol>
                    <li>Rabbits</li>
                    <li>Foxes</li>
                    <li>INCREDIBLE HORSES</li>
                </ol>
            </Card>
            <Card
                title="Exactly the same Card!"
            >
                <ol>
                    <li>Foxes</li>
                    <li>Rabbits</li>
                    <li>INCREDIBLE HORSES</li>
                </ol>
            </Card>
            <Card
                title="Repeater Example"
            >
                <ExampleRepeater/>
            </Card>
            <Card
                title="Conditional Example"
            >
                <ExampleConditional number={Math.ceil(Math.random()*12000)}/>
            </Card>
        {/* <ExampleWithChildren>
            <Example></Example>
            <Parametered
                unusedSecret1="This is a secret"
                title="Consider this a title"
                subtitle="And this a subtitle"
                unusedSecret2="And This is a secret"
            />
            <Card
                title="A Card Like no other!"
            >
                <ol>
                    <li>Rabbits</li>
                    <li>Foxes</li>
                    <li>INCREDIBLE HORSES</li>
                </ol>
            </Card>
            <Card
                title="Exactly the same Card!"
            >
                <ol>
                    <li>Foxes</li>
                    <li>Rabbits</li>
                    <li>INCREDIBLE HORSES</li>
                </ol>
            </Card>
        </ExampleWithChildren> */}
        {/* <Parametered
            unusedSecret1="boring"
            title="Consider this a  NEW title"
            subtitle="And this a NEW subtitle"
            unusedSecret2="And This is also boring"
            /> */}
    </div>