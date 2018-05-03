import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="App">
          <div className="container">
              <Link to='/' className="brand-logo left">Giphy x React</Link>
          </div>
      </div>
    );
  }
}

export default Header;
