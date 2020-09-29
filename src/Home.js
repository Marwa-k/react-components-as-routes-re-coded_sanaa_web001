import React, { Component } from 'react';
import Home from './Home'
import About from './About'
import Signup from './Signup'
import Login from './Login'
import Navbar from './Navbar'
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <h1>Home!</h1>
    );
  }
}
