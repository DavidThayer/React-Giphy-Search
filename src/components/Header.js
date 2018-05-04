import React, { Component } from 'react';
import '../App.css';
import { NavLink, Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="App">
          <div>
            <nav className="my-2 my-md-0 py-4 bg-dark Navbar">
              <Link to='/' className="ml-4 p-2 text-white navbar-brand">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
            <strong>Giphy x React</strong></Link>
              <ul className="navbar-nav float-right">
                <li className="nav-item mr-4">
                  <NavLink className="nav-link" to="/">Search</NavLink>
                </li>
              </ul>
            </nav>
          </div>
      </div>
    );
  }
}

export default Header;
