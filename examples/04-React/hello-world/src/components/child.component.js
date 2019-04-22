import React, {Component} from 'react';

class Child extends Component {
    constructor(props) {
        super(props);
        this.state = {
            property: props.property,
        }
    }

    render() {
        return(<div>
            <h3>{this.state.property}</h3>
        </div>)
    }
}

export default Child;