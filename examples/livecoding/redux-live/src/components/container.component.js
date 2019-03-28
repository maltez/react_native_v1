import React, { Component } from 'react';
import store from '../store/store';
import Increment from './increment.component';
import Decrement from './decrement.component';
import Tablo from './tablo.component';

import { INCREMENT, DECREMENT, DELAY } from '../store/action';


export class Application extends Component {
    constructor(props) {
        super(props);
        const { counter, delay} = store.getState();
        this.state = { counter, delay  };
    }

    componentDidMount() {
        store.subscribe(() => {
            const storeState = store.getState();
            this.setState({counter: storeState.counter})
        })
    }

    incrementHandler = () => {
        store.dispatch({type: DELAY});
        setTimeout(() => {
            store.dispatch({type: INCREMENT});
        }, 500);
    }

    decrementHandler = () => {
        store.dispatch({type: DECREMENT});
    }

    render() {
        return (
            <div>
                <Increment isActive={this.state.delay} click={this.incrementHandler}/>
                <Tablo value={this.state.counter} />
                <Decrement isActive={this.state.delay} click={this.decrementHandler}/>
            </div>
        );
    }
}

