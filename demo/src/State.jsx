import React, { Component } from 'react';

class Count extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      count: 0
    };
  }

  render() {
  
    const { count } = this.state;

    return (
      <div>
        <h1>State in Class Component</h1>
        <p>Clicking the button {count} times</p>
        <button onClick={() => this.setState({ count: count + 1 })}>
          Click Here!
        </button>
      </div>
    );
  }
}

export {Count};