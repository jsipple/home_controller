import React, { Component,Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Profile.css'
import axios from 'axios';

class Profile extends Component {
 constructor(props) {
  super(props)
  // need to pass in the current values(don't leave as empty string)
  this.state = {
    email: '',
    userName: ''
  }
 }
 handleSubmit = (e) => {
   e.preventDefault()
  //  need to grab id
   let id;
   axios.put('api/user/' + id)
   .then(res => {
     console.log(res)
   })
 }
 CompenentDidMount = () => {
  // grab their current data except password might need to start clearing password anyway after used to verify
 }
 handleChange = (e) => {
  e.preventDefault()
  this.setState({
   [e.target.name]: e.target.value
  })
 }
 handleDelete = (e) => {
  //  need to grab this
   let id;
   axios.delete('/api/user/' + id /*(data i want to delete) */)
 }
 render() {
  return (
   <Fragment>
    <h1>Edit your Proflie</h1>
    <hr />
    <label htmlFor='email'>email:</label>
            <input value={this.props.email} name='email' type='text' onChange={this.handleChange} onKeyPress={this.handleKeyPress} />
          <br />
          <label htmlFor='userName'>Username</label>
            {/* need to change the value */}
            <input value={this.props.userName} name='userName' type='text' onChange={this.handleChange} onKeyPress={this.handleKeyPress} />{this.props.userName}
           <button onClick={this.handleDelete}>delete</button>
   </Fragment>
  )
 }
}

export default Profile