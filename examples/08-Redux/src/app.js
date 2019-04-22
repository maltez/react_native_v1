import React, { Component } from 'react';
import { Increment } from './components/increment/increment';
import { Decrement } from './components/decrement/decrement';
import Show from './components/show/show';
import store from './store/store';


export class App extends Component {
    constructor(props){
        super(props);
        this.state = store.getState();
    }

    componentDidMount(){
        store.subscribe(
            () => {
                this.setState(store.getState());
            }
        );
    }

    render() {
        return (
            <div>
                <Increment caption="Increment" disable={this.state.disable}/>
                <Show count={this.state.count}/>
                <Decrement caption="Decrement" disable={this.state.disable}/>
            </div>);
    }
}




