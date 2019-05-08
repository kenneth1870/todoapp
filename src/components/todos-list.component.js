import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Todo = props => (
  <div className="container">
    <div className="row">
      <div className="btn-group" role="group" aria-label="Basic example">
        <button type="button" className="btn">
          {props.todo.todo_completed ? 'Undo' : 'Complete'}
        </button>
        <button type="button" className="btn">Delete</button>
      </div>
      <h3 style={{textDecoration: props.todo.todo_completed ? 'line-through' : 'none'}}>
        {props.todo.todo_description}
      </h3>

      <Link to={'/edit/' + props.todo._id}><i className="fa fa-edit"></i></Link>
    </div>
  </div>
);

export default class TodosList extends Component {
  constructor (props) {
    super (props);
    this.state = {todos: []};
  }

  componentDidMount () {
    axios
      .get ('http://localhost:4000/todos/')
      .then (response => {
        this.setState ({todos: response.data});
      })
      .catch (function (error) {
        console.log (error);
      });
  }

  componentDidUpdate () {
    axios
      .get ('http://localhost:4000/todos/')
      .then (response => {
        this.setState ({todos: response.data});
      })
      .catch (function (error) {
        console.log (error);
      });
  }

  todoList () {
    return this.state.todos.map (function (currentTodo, i) {
      return <Todo todo={currentTodo} key={i} />;
    });
  }

  render () {
    return (
      <section id="one" className="wrapper style2 special flow">
        <header className="major">
          <h2>Let's get some work done!</h2>
        </header>
        {this.todoList ()}
      </section>
    );
  }
}
