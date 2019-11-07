import React, { Component } from 'react';
class App extends Component {
  render() {
    return (
      <div>
        <ul className="my-list">
          <li>{false ? '1' : 'ok'}</li>
          <li>I love React</li>
        </ul>
      </div>
    );
  }
}

export default App;

