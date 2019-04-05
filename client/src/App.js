import React, { Component, Fragment } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import homeRoute from './routes/Home'
import departmentRoute from './routes/department'
import devicesRoute from './routes/devices'
import tutorialRoute from './routes/tutorial'
import itemRoute from './routes/item'
import returnRoute from './routes/return'
import registerRoute from './routes/register'
import profileRoute from './routes/profile'
import singleItemRoute from './routes/singleItem'
import createDepartmentRoute from './routes/createDepartment'
import cartRoute from './routes/cartDisplay'
import orderHistoryRoute from './routes/orderHistoryDisplay'

class App extends Component {
  render() {
    console.log('PROPS APP JS ', this.props)
    return (
      <div className="App">
        <BrowserRouter>
          <Route path='/home' component={homeRoute} />
          <Route path='/devices' component={devicesRoute} /> 
          <Route path='/tutorial' component={tutorialRoute} /> 
          {/* this will be under profile and item as well */}
          <Route path='/return' component={returnRoute} /> 
          <Route exact path='/department' component={departmentRoute} /> 
            {/* this seems to break the /department think the way to do this is relative routing but not really sure how to ask about it*/}
          <Route exact path='/department/:name' component={itemRoute} /> 
          <Route exact path='/department/:name/:id' component={singleItemRoute} />
          <Route path='/register' component={registerRoute} /> 
          <Route path='/profile' component={profileRoute} /> 
          <Route path='/createDepartment' component={createDepartmentRoute} />
          <Route path='/findItems/:searched' component={itemRoute}/>
          <Route path= '/cart/:email' component={cartRoute}/>
          <Route path= '/orderHistory/:email' component={orderHistoryRoute}/>
          {/* this will handle indvidual departments will need to have one with item after that */}
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
