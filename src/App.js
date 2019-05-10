import React, {Component} from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "store";

import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";
import Footer from "./components/footer.component";
import Login from "./components/login.component";
import Signup from "./components/signup.component";
import Header from "./components/header.compoenent";
import { Redirect } from 'react-router';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  componentDidMount() {
    this.setState({
      isLoggedIn: !!store.get("loggedIn")
    });
  }

  render() {
    return (<div>
      <Router>
        <Header/>
        <Route exact path="/" render={() => (<Redirect to="/login" />)} /> 
        <Route path="/list" component={TodosList}/>
        <Route path="/login"  component={Login}/>
        <Route path="/edit/:id" component={EditTodo}/>
        <Route path="/create" component={CreateTodo}/>
        <Route path="/signUp"  component={Signup}/>
        <Footer/>
      </Router>
    </div>);
  }
}

export default App;