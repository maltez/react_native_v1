import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    };
  }

  componentDidMount() {
    this.timer = setInterval(this.update, 1000);
  }

  componentWillMount() {
    clearInterval(this.timer);
  }

  update = () => {
    this.setState({
      time: new Date()
    });
  };

  render() {
    const { time } = this.state;
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    return (
      <div>
        <h3>
          Current time: {hours % 12}:{minutes < 10 ? '0' + minutes : minutes}:
          {seconds < 10 ? '0' + seconds : seconds} {hours < 12 ? 'am' : 'pm'}
        </h3>
      </div>
    );
  }
}

export default Clock;
