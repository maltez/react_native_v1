import React, { Component } from 'react';
import store from '../../store/store';

export class Decrement extends Component {
    constructor(props) {
        super(props);
        this.delayedDecrement = this.delayedDecrement.bind(this);
    }

    delayedDecrement() {
        store.dispatch({type: 'DELAY'});
        setTimeout(()=> {
            store.dispatch({type: 'DECREMENT'});
        },  500);
    }

    render () {
        return(
            <button 
                onClick={this.delayedDecrement}
                disabled={this.props.disable}>{this.props.caption}</button>
        );
    }
}
