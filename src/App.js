import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import homeRoute from './routes/Home'
import Navbar from '../components/navbar/Navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar />
        <BrowserRouter>
          <Route path='/' component={homeRoute} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
