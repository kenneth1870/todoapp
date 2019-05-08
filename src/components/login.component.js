import React, {Component} from 'react';
import {Button, FormGroup, FormControl, FormLabel} from 'react-bootstrap';
import {BrowserRouter as Link} from 'react-router-dom';

export default class Login extends Component {
  constructor (props) {
    super (props);

    this.state = {
      email: '',
      password: '',
    };
  }

  validateForm () {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState ({
      [event.target.id]: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault ();
  };

  render () {
    return (
      <div className="center-content">
        <div className="col-md-10">
          <div className="Login">
            <form onSubmit={this.handleSubmit}>
              <FormGroup controlId="email" >
                <FormLabel>Email</FormLabel>
                <FormControl
                  autoFocus
                  type="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup controlId="password" >
                <FormLabel>Password</FormLabel>
                <FormControl
                  value={this.state.password}
                  onChange={this.handleChange}
                  type="password"
                />
              </FormGroup>
              <Button
                block
                disabled={!this.validateForm ()}
                type="submit">
                Login
              </Button>
            </form>
          </div>
          <Link to="/signup" className="nav-link"><button>Signup</button></Link>
        </div>
      </div>
    );
  }
}
