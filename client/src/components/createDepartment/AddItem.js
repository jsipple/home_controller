import React, { Component,Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './CreateDepartment.css'
import axios from 'axios'

class AddItem extends Component {
 constructor(props) {
  super(props)
  this.state = {
   departments: [],
   departmentName: '',
   image: '',
   itemName: '',
   itemPrice: 0,
   itemDesc: '',
   seller: ''
  }
 }
 componentDidMount = () => {
  let department = [];
  // getting what i want from the controller but having issues pulling it into here
  axios.get('/api/findDepartments'
  ).then(res => {
   // not sure why the console log isn't running
   console.log(res.data)
   for (let i = 0; i < res.data.length; i++) {
    department.push(res.data[i].name)
   }
   console.log(department)
   this.setState({
    departments: department
   })
   console.log(this.state)
  })
 }
 handleSubmit = (e) => {
  e.preventDefault()
  axios.post('http://localhost:5000/api/items', {
    data: {
     departmentName: this.state.departmentName,
     image: this.state.image,
     itemName: this.state.itemName,
     itemPrice: this.state.itemPrice,
     itemDesc: this.state.itemDesc,
     seller: this.state.seller
    }
  })
   .then(res => {
    console.log(res.data)
    console.log(this.state)
    this.setState({
     departments: [],
     // setting by default to clothing because if not and you don't change it won't change this state (this might not work because it might try to change it to an empty string)
     departmentName: 'clothing',
     image: '',
     itemName: '',
     itemPrice: 0,
     itemDesc: '',
     seller: ''
    })
   })
  }
  // this is not running on enter right now
  // this is where i need to ping the server to check if true etc
 // this will allow you to run when pressing enter

 handleChange = (e) => {
  e.preventDefault()
  this.setState({
   [e.target.name]: e.target.value,
  })
 }

 render() {
  let departments = this.state.departments.map( (x, i) => <option value={x} key={i}>{x}</option>)
  return (
   <Fragment>
     <h2>Add Item</h2>
    {/* will change this so that it only show up after clicking add Item */}
    <div>Select department:
     {/* if department not chaned from first it does not show up even though it says clothing on dropdown */}
    <select name='departmentName' value={this.state.departmentName} onChange={this.handleChange}>
     {departments}
    </select>
    <form onSubmit={this.handleSubmit}>
   <label htmlFor='itemName'>itemName:</label>
    <input id='item' value={this.state.itemName} name='itemName' type='text' onChange={this.handleChange} onKeyPress={this.handleKeyPress} />
    <br />
   <label htmlFor='image'>image</label>
    <input id='image' value={this.state.image} name='image' type='text' onChange={this.handleChange} onKeyPress={this.handleKeyPress} />
    <br />
   <label htmlFor='itemPrice'>itemPrice:</label>
    <input id='price' value={this.state.itemPrice} name='itemPrice' type='text' onChange={this.handleChange} onKeyPress={this.handleKeyPress} />
    <br />
   <label htmlFor='itemDesc'>item Description:</label>
    <input id='desc' value={this.state.itemDesc} name='itemDesc' type='text' onChange={this.handleChange} onKeyPress={this.handleKeyPress} />
   <br />
   <label htmlFor='seller'>seller:</label>
    <input id='seller' value={this.state.seller} name='seller' type='text' onChange={this.handleChange} onKeyPress={this.handleKeyPress} />
   <br />
   <button onClick={this.handleSubmit}>Add Item</button>
   </form>
    </div>
   </Fragment>
  )
 }
}

export default AddItem