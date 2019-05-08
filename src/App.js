import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import CreateTodo from './components/create-todo.component';
import EditTodo from './components/edit-todo.component';
import TodosList from './components/todos-list.component';
import Footer from './components/footer.component';
import Login from './components/login.component';
import Signup from './components/./signup.component';

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <header id="header">
            <div className="content container text-center">
              <h1>To-Do App!</h1>
              <Link to="/create" className="nav-link"> <button>Add</button></Link>
              <Link to="/login" className="nav-link"><button>Login</button></Link>
            </div>
          </header>
          <Route path="/" component={TodosList} />
          <Route path="/login" exact component={Login} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
          <Route path="/signup" exact component={Signup} />
          <Footer />

        </div>
      </Router>
    );
  }
}

export default App;
