import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {inputValue:''};
        this.inputChanged = this.inputChanged.bind(this);
    }

    componentDidCatch(error, info){

    }

    componentWillMount() {
        console.log('Component will mount');
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({inputValue: 'TADAM!!!!'});
        }, 2000)
    }

    componentDidUpdate() {
        console.log('Component updated');
    }

    componentWillUnmount() {
        console.log('Component destroy');
    }

    componentWillReceiveProps(){

    }

    componentWillUpdate(nextProps, nextState){

    }

    inputChanged(event) {
        this.setState({
            inputValue: event.target.value
        })
    }

    render() {
        console.log('It is render time');
        return (
            <div>
                <h1>{this.state.inputValue}</h1>
                <input type="text" value={this.state.inputValue} onChange={this.inputChanged} />
            </div>
        )
    }
}

export default InputComponent;
