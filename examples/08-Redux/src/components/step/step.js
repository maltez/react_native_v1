import React, { Component } from 'react';
import store from '../../store/store';

export class Step extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState().step;
        this.setStep = this.setStep.bind(this);
    }

    componentDidMount(){
        store.subscribe(
            () => {
                this.setState({step: store.getState().step});
            }
        );
    }

    setStep() {
        store.dispatch({});
    }


    render() {
        return <input type="number" value={this.state.step} onInput={this.setStep}/>
    }
}