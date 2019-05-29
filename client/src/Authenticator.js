import React, { Component } from 'react';
import App from './App'
import Register from './components/login/Register'

class Authenticator extends Component {
 constructor(props) {
  super(props)
 this.state = {
  isAuth: false,
  isAdmin: false,
  user: ''
 }
}

login = ( isAuth, user, isAdmin ) => {
 console.log('CALLED')
 console.log('IS AUTH ', isAuth)
 console.log('USER ', user)
 console.log('IS ADMIN ', isAdmin)
 this.setState({ isAuth, user, isAdmin })

}
logout = () => {
 this.setState({
  isAuth: false,
  isAdmin: false,
  user: ''
 })
}
render() {
 if (this.state.isAuth) {
 return (
  <App logout={this.state.logout} user={this.state.user} admin={this.state.isAdmin} />
 )
 } else {
  return (
   <Register login={this.login} />
  )
 }
}
}

export default Authenticator