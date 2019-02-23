import React, { Component } from 'react'
export class TodoList extends Component {
  render() {
    console.log(this.props.todos)
    return this.props.todos.map((todo) => (
      <h3>{ todo.title }</h3>
    ));
  }
}

export default TodoList
