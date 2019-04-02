import React, { Component,Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './SingleItem.css'
import axios from 'axios'

class SingleItem extends Component {
 constructor(props) {
  super(props)
  this.state = {
   quantity: 1,
   reviews: [],
   image: '',
   price: '',
   totalPrice: '', 
   name: '',
   description: '',
   seller: '',
   id: ''
  }
 }
 // might want to check with Sarah not sure if she's done anything on the cart stuff yet
 handleClick = () => {
  axios.post('/api/', {
   data: {
    quantity: this.state.quantity,
    totalPrice: this.state.price,
    id: this.state.id,
    name: this.state.name
   }
  })
  .then(res => {
   res.redirect('/')
  })
 }
 handleChange = (e) => {
  e.preventDefault()
  let quantity = parseFloat(e.target.value)
  let price = parseFloat(this.state.price)
  let totalPrice = quantity * price
  // total price is staying one behind
  this.setState({
   [e.target.name]: e.target.value,
   totalPrice
  })

 }
// see if way to not load any before all ready
 componentDidMount = () => {
  let path = window.location.pathname
   axios.get('/api' + path
   ).then(res => {
    let result = res.data
    console.log(result)
    this.setState({
     image: result.image,
     price: result.itemPrice,
     name: result.itemName,
     description: result.itemDesc,
     seller: result.seller,
     id: result.id
    })
   })
 }
 render() {
  return (
   <Fragment>
    <div>
     <h1>{this.state.name}</h1>
     <br />
     <p>by {this.state.seller}</p>
     <hr />
     <h2>${this.state.price}</h2>
     <img src={this.state.image} />
     </div>
     <hr />
     <div id='descrip'>
     <p>{this.state.description}</p>
     <div id='quantity'>
     <h3>Quantity</h3>
     <select name='quantity' value={this.state.quantity} onChange={this.handleChange}>
      <option value={1}>1</option>
      <option value={2}>2</option>
      <option value={3}>3</option>
      <option value={4}>4</option>
      <option value={5}>5</option>
     </select>
     <br />
     <button onClick={this.handleClick}>purchase</button>
     <br />
     <p>Total Price: {this.state.totalPrice}</p>
     </div>
     </div>
   </Fragment>
  )
 }
}

export default SingleItem