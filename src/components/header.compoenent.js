import React from 'react';
import store from 'store';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

const Header = props => {
  return (
    <header id="header">
    <div className="content container text-center">
      <h1>To-Do App!</h1>
    </div>
  </header>
  );
};

export default Header;
