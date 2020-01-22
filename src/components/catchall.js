import React, { Component } from 'react';

export default class CatchAll extends Component {
constructor() { 
    super();
    console.log('It Works from Catch All');
}
        render() {
        return (
           <div>
                <h1>Catch All</h1>
                <h1>Catch All</h1>
           </div>
        );
    }
}