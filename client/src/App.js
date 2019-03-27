import React, { Component, Fragment } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import homeRoute from './routes/Home'
import departmentRoute from './routes/department'
import devicesRoute from './routes/devices'
import tutorialRoute from './routes/tutorial'
import itemRoute from './routes/item'
import returnRoute from './routes/return'
import Navbar from './components/navbar/Navbar'


class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar />
        <BrowserRouter>
          <Route path='/home' component={homeRoute} />
          <Route path='/devices' component={devicesRoute} /> 
          <Route path='/tutorial' component={tutorialRoute} /> 
          {/* this will be under profile and item as well */}
          <Route path='/return' component={returnRoute} /> 
          <Route path='/department' component={departmentRoute} /> 
          <Route path='/department/item' component={itemRoute} /> 
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
