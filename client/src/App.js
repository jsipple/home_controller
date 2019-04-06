import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import homeRoute from './routes/Home'
import departmentRoute from './routes/department'
import devicesRoute from './routes/devices'
import tutorialRoute from './routes/tutorial'
import itemRoute from './routes/item'
import returnRoute from './routes/return'
import profileRoute from './routes/profile'
import singleItemRoute from './routes/singleItem'
import createDepartmentRoute from './routes/createDepartment'
import cartRoute from './routes/cart'
import orderHistoryRoute from './routes/orderHistory'

import axios from 'axios'
import Navbar from './components/navbar/Navbar'



class App extends Component {
  state = {
    isAuth: false,
    isAdmin: false
  }

  componentDidMount() {
    // whenever redirect seem to reset the state of authenticatior
  // window.location.pathname = '/home'
  }

  // login

  // logout
  handleLogout = () => {
    // having issues with this logout code
    axios.get('/api/logout')
  .then(() => {
   this.setState({
     email: '',
     password: '',
     show: false,
     isAuth: false
   })
   // this.props.history.push('/home')
  })
   }
  // checkAuth

  render() {
    console.log(this.props.admin)
    console.log('PROPS APP JS ', this.props)
    let adminRoute;
    if (this.props.admin) {
      adminRoute = <Route path='/createDepartment' component={createDepartmentRoute} />
    }
    return (
      <div className="App">
        <BrowserRouter>
        <Navbar admin={this.props.admin} />
          <Route path='/home' component={homeRoute} />
          <Route path='/devices' component={devicesRoute} /> 
          <Route path='/tutorial' component={tutorialRoute} /> 
          {/* this will be under profile and item as well */}
          <Route path='/return' component={returnRoute} /> 
          <Route exact path='/department' component={departmentRoute} /> 
            {/* this seems to break the /department think the way to do this is relative routing but not really sure how to ask about it*/}
          <Route exact path='/department/:name' component={itemRoute} /> 
          <Route exact path='/department/:name/:id' component={singleItemRoute} />

          <Route user={this.props.user} path='/profile' component={profileRoute} /> 
          {adminRoute}

          <Route path='/profile' component={profileRoute} /> 
          <Route path='/createDepartment' component={createDepartmentRoute} />
          <Route exact path='/findItems/:searched' component={itemRoute}/>
          <Route exact path='/findItems/:searched/:id' component={singleItemRoute}/>
          <Route path= '/cart/:email' component={cartRoute}/>
          <Route path= '/orderHistory/:email' component={orderHistoryRoute}/>

          {/* this will handle indvidual departments will need to have one with item after that */}
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
