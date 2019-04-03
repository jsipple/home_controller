import React, { Component,Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Register.css'
import axios from 'axios'

class Register extends Component {
 constructor(props) {
  super(props)
  this.state = {
   firstName: 'aoeu',
   lastName: 'joe',
   password: '',
   email: ''
  }
 }
 handleSubmit = (e) => {
  e.preventDefault()
  // this is not running on enter right now
  // this is where i need to ping the server to check if true etc
 }
 // this will allow you to run when pressing enter
 handleKeyPress = (e) => {
  if (e.key === 'Enter') {
   console.log(this.state)
   axios.post('http://localhost:5000/api/register', {
    data: this.state
  })
   .then(res => {
    console.log(res.data)
   })
  }
 }
 handleChange = (e) => {
  e.preventDefault()
  this.setState({
   [e.target.name]: e.target.value
  })
 }
 render() {
 return(
  <div className='login'>
   <form onSubmit={this.handleSubmit}>
   <label htmlFor='userName'>Username:</label>
    <input value={this.state.userName} name='userName' type='text' onChange={this.handleChange} onKeyPress={this.handleKeyPress} />
   <label htmlFor='password'>password</label>
    <input value={this.state.password} name='password' type='text' onChange={this.handleChange} onKeyPress={this.handleKeyPress} />
   <label htmlFor='email'>email:</label>
    <input value={this.state.email} name='email' type='text' onChange={this.handleChange} onKeyPress={this.handleKeyPress} />
   </form>
   {/* probably will just change this to handleClick but idk */}
   <button onClick={this.handleSubmit}>Submit</button>
  </div>
 )
 }
}

export default Register