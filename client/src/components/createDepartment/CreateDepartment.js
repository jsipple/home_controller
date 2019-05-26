import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './CreateDepartment.css'
import axios from 'axios'
import AddItem from './AddItem'

class CreateDepartment extends Component {
 constructor(props) {
  super(props)
  this.state = {
   departmentName: '',
   image: ''
  }
 }
 handleSubmit = (e) => {
  e.preventDefault()
  // this is not running on enter right now
  // this is where i need to ping the server to check if true etc
 }
 // this will allow you to run when pressing enter
 handleKeyPress = (e) => {
   console.log(this.state)
  if (e.key === 'Enter') {
   console.log(this.state)
   axios.post('/api/departments', {
    data: this.state
  })
   .then(res => {
    console.log(res.data)
   })
  }
 }
 handleChange = (e) => {
  e.preventDefault()
  console.log(this.state)
  this.setState({
   [e.target.name]: e.target.value
  })
 }
 render() {
 return(
  <div id='addDepart'>
  <h2>Add Department</h2>
   <form onSubmit={this.handleSubmit}>
   <label htmlFor='departmentName'>departmentName:</label>
    <input id='name' value={this.state.departmentName} name='departmentName' type='text' onChange={this.handleChange} onKeyPress={this.handleKeyPress} />
   <br />
   <label htmlFor='image'>image:</label>
    <input id='image' value={this.state.image} name='image' type='text' onChange={this.handleChange} onKeyPress={this.handleKeyPress} />
   </form>
   {/* probably will just change this to handleClick but idk */}
   <button onClick={this.handleSubmit}>Create New Department</button>
   <hr />
   <AddItem />
  </div>
 )
 }
}

export default CreateDepartment