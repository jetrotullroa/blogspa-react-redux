import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>blog Single Page Application</h1>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}
