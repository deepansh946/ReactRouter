import React, { Component } from 'react';

class list extends React.Component {
  render() {
    return (
      <ul>
        {
          this.props.items.map((item) => <li>{item}<button onClick = {(e) => this.props.items.removeTodo(e)}>Delete</button></li>)
        }
      </ul>
    );

  }
}

export default list;
