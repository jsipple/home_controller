import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Categories from './components/Categories'
import Jumbotron from './components/Jumbotron';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Jumbotron />
        <Categories />
      </div>
    );
  }
}

export default App;
