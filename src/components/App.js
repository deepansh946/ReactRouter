import React, { Component } from 'react';
import List from './list.js';
import Header from './header.js';


export default class App extends Component {

  constructor() {
    super();
    this.removeTodo = this.removeTodo.bind(this);

    this.state = {
      term: '',
      items: []
    };
  }

  removeTodo(itemTobeDeleted){
      const todos=this.state.todos;
      const key=Object.keys(todos);
      const newkey=key.filter((key) => {
          if(todos[key]!==itemTobeDeleted){
              return todos[key];
          }});
      const newTodo=newkey.map((key)=>{
          return todos[key];
      });
      this.setState({todos:newTodo});
  };

  onChange = (event) => {
    this.setState({ term: event.target.value });
  }


  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
  }

  render() {
    return (
      <div>
        <form className="App" onSubmit={this.onSubmit}>
          <input value={this.state.term} onChange={this.onChange} />
          <button>Submit</button>
        </form>
        <List items={this.state.items}/>
      </div>
    );
  }
}
