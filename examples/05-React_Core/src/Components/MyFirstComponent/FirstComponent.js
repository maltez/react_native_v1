import React, { Component } from 'react';
import Second from '../MySecondComponent/MySecondComponent';

export  default class FirstComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {name: this.props.name, isCheburatorVisible: true};
        this.onChangeName = this.onChangeName.bind(this);
        this.removeCheburator = this.removeCheburator.bind(this);
    }

    onChangeName() {
        this.setState({
            name: 'Gena'
        });
    }

    removeCheburator() {
        this.setState({
            isCheburatorVisible: !this.state.isCheburatorVisible
        });
    }

    render() {
        return ( 
            <div>
                {this.state.isCheburatorVisible ? <Second name={this.state.name} /> : <div></div>}
                <button onClick={this.onChangeName} >Change name</button>
                <button onClick={this.removeCheburator}>Toggle Cheburator</button>
            </div> 
    );
    }
}