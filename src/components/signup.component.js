import React, {Component} from 'react';
import {Button, FormGroup, FormControl, FormLabel} from 'react-bootstrap';
import {BrowserRouter as Link} from 'react-router-dom';

export default class Signup extends Component {
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
          <div className="Signup">
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
              <FormGroup controlId="name" >
                <FormLabel>Name</FormLabel>
                <FormControl
                  autoFocus
                  type="text"
                  value={this.state.name}
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
                Signup
              </Button>
            </form>
          </div>
          <Link to="/login" className="nav-link"><button>Login</button></Link>
        </div>
      </div>
    );
  }
}
