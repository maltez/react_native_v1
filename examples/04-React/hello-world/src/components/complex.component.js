import React, { Component } from 'react';
import Child from './child.component';

class Complex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initialValue: 0,
            val: 12,
            vv: 12
        }

        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler() {
        // console.log('Hello react guys/girls');
        this.setState({initialValue: 42});
    }

    render() {
        return ( 
            <div>
                <h2>This is initial value {this.state.initialValue}</h2>
                <button onClick={this.clickHandler}>Change value</button>
                <Child property={this.state.initialValue} />
            </div>);
    }
}

export default Complex

