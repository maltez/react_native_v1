import React, { Component } from 'react';

class HelloSayer extends Component {
	render() {
		return <p>Hello {this.props.name}!</p>;
	}
}

export default HelloSayer;
