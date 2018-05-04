import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header'
import SearchContainer from './containers/SearchContainer'
import DetailsContainer from './containers/DetailsContainer'

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section className="jumbotron text-center">
            <div className="container">
              <h1 className="jumbotron-heading">GoGiphy</h1>
              <p className="lead text-muted">Giphy giph and the giphy bunch...</p>
            </div>
          </section>
        <section className="container">

            <Switch>
              <Route path="/giphy/:giphyId" component={DetailsContainer} />
              <Route path="/" exact component={SearchContainer} />
            </Switch>
          </section>

      </div>
    );
  }
}

export default Home;
