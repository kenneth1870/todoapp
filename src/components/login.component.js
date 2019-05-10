import React, {Component} from "react";
import axios from "axios";
import setAuthToken from "../components/setAuthToken";
import {Button, FormGroup, FormControl, FormLabel} from "react-bootstrap";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      error: false
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password
    };

    this.setState({error: false});

    axios.post("http://localhost:4000/api/auth/signIn", user).then(res => {
      if (res.status === 200) {
        let {token} = res.data;
        localStorage.setItem("loggedIn", true);
        localStorage.setItem("token", token);
        setAuthToken(token);
        this.props.history.push("/list");
      }
    }).catch(error => {
      console.log(error);
      return this.setState({error: true});
    });
  };

  render() {
    const {error} = this.state;
    return (<div className="center-content">
      <div className="col-md-10">
        <div className="Login">
          {error && <p>That username/password is incorrect. Try again!</p>}
          <form onSubmit={this.handleSubmit}>
            <FormGroup controlId="email">
              <FormLabel>Email</FormLabel>
              <FormControl autoFocus="autoFocus" type="email" value={this.state.email} onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup controlId="password">
              <FormLabel>Password</FormLabel>
              <FormControl value={this.state.password} onChange={this.handleChange} type="password"/>
            </FormGroup>
            <Button block="block" disabled={!this.validateForm()} type="submit">
              Login
            </Button>
          </form>
        </div>
        <hr/>
        <Link to="/signUp" className="nav-link">
          Sign Up
        </Link>
      </div>
    </div>);
  }
}
