import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Register.css'
import axios from 'axios'
import Login from '../navbar/Modal'

class Register extends Component {
 constructor(props) {
  super(props)
  this.state = {
   userName: '',
   password: '',
   email: ''
  }
 }

handleLoginMiddle = (one, two, three) => {
  this.props.login(one, two, three)
}

 handleSubmit = (e) => {
  e.preventDefault()
  axios.post('/api/register', {
    data: this.state
  })
   .then(res => {
    console.log(res.data)
    this.props.login(true, this.state)
   })
  }
  // this is not running on enter right now
  // this is where i need to ping the server to check if true et
 // this will allow you to run when pressing enter
 handleKeyPress = (e) => {
  if (e.key === 'Enter') {
   console.log(this.state)
   axios.post('/api/register', {
    data: this.state
  })
   .then(res => {
    console.log(res.data)
    this.props.login({ isAuth: true, user: res.data })
   })
  }
}
 handleChange = (e) => {
   console.log(this.state)
  e.preventDefault()
  this.setState({
   [e.target.name]: e.target.value
  })
 }
 render() {
 return(
  <div className='login'>
  <h2>Create Account</h2>
   <form onSubmit={this.handleSubmit}>
   <label id='email' htmlFor='email'>Email:</label>
    <br />
    <input value={this.state.email} name='email' type='text' onChange={this.handleChange} onKeyPress={this.handleKeyPress} />
    <br />
   <label id='user' htmlFor='userName'>Username:</label>
    <br />
    <input value={this.state.userName} name='userName' type='text' onChange={this.handleChange} onKeyPress={this.handleKeyPress} />
   <br />
   <label id='pass' htmlFor='password'>Password:</label>
    <br />
    <input value={this.state.password} name='password' type='password' onChange={this.handleChange} onKeyPress={this.handleKeyPress} />
   <br />
    <button className='btn btn-primary' onClick={this.handleSubmit}>Create Your Account</button>
   
   </form>
   <hr />
   <div>
     <p>Already have an account?<Login login={this.handleLoginMiddle} /> </p>
   </div>
   {/* probably will just change this to handleClick but idk */}
  </div>
 )
 }
}
export default Register