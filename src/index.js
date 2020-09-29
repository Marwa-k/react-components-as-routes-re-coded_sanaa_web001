import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home'
import About from './About'
import Login from './Login'
import Navbar from './Navbar'

import { BrowserRouter as Router, Route} from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
};

ReactDOM.render(
  <Home />,
  document.getElementById('root')
);
