import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import Login from './Login'
import About from './About'
import Home from './Home'

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const Navbar = () => {
  return (
    <div>
      <NavLink
        to="/"
        /* set exact so it knows to only set activeStyle when route is deeply equal to link */
        exact
        /* add styling to Navlink */
        style={link}
        /* add prop for activeStyle */
        activeStyle={{
          background: 'darkblue'
        }}
      >Home</NavLink>
      <NavLink
        to="/about"
        exact
        style={link}
        activeStyle={{
          background: 'darkblue'
        }}
      >About</NavLink>
      <NavLink
        to="/login"
        exact
        style={link}
        activeStyle={{
          background: 'darkblue'
        }}
      >Login</NavLink>
    </div>
  )
}

ReactDOM.render((
  <Router>
    <React.Fragment>
      <Navbar />
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/login' component={Login} />
    </React.Fragment>
  </Router>),
  document.getElementById('root')
);
