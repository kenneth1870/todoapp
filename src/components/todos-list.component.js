import React, {Component} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import store from "store";
import setAuthToken from "../components/setAuthToken";

const handleLogout = () => () => {
  localStorage.removeItem("loggedIn");
};

const Todo = props => (<div className="container">
  <div className="row">
    <h3 style={{
        textDecoration: props.todo.todo_completed
          ? "line-through"
          : "none"
      }}>
      {props.todo.todo_description}
    </h3>

    <Link to={"/edit/" + props.todo._id}>
      <i className="fa fa-edit"/>
    </Link>
  </div>
</div>);

export default class TodosList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:4000/api/todos/").then(response => {
      let token = localStorage.getItem("token");
      setAuthToken(token);
      this.setState({todos: response.data});
    }).catch(error => {
      console.log(error.response);
      if (error.response.status === 401) {
        this.props.history.push("/login");
      }
    });
  }

  componentDidUpdate() {
    axios.get("http://localhost:4000/api/todos/").then(response => {
      this.setState({todos: response.data});
    }).catch(function (error) {
      console.log(error);
      store.remove("loggedIn");
    });
  }

  todoList() {
    return this.state.todos.map(function (currentTodo, i) {
      return <Todo todo={currentTodo} key={i}/>;
    });
  }

  render() {
    return (<section id="one" className="wrapper style2 special flow">
      <nav className="navbar navbar-light bg-light">
        {
          localStorage.getItem("loggedIn") && (<Link to="/list" className="nav-link">
            {" "}
            <button>List</button>
          </Link>)
        }
        {
          localStorage.getItem("loggedIn") && (<Link to="/create" className="nav-link">
            {" "}
            <button>Add</button>
          </Link>)
        }
        {
          localStorage.getItem("loggedIn")
            ? (<Link to="/login" className="nav-link">
              <button onClick={handleLogout()}>LogOut</button>
            </Link> )
            : (<Link to="/login" className="nav-link">
              <button>Login</button>
            </Link>)
        }
      </nav>
      <header className="major">
        <h2>Let's get some work done!</h2>
      </header>
      {this.todoList()}
    </section>);
  }
}
