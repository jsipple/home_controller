import React, { Component,Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './SingleItem.css'
import axios from 'axios'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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
     id: result.id,
     totalPrice: result.itemPrice
    })
   })
 }
 render() {
  return (
   <Fragment>
       <h2>{this.state.name}</h2>
       <p>by {this.state.seller}</p>
      <hr />
    <Container>
    <Row>
       <Col xs={3} id='itemdesc'>
       <img src={this.state.image} />
       </Col>
       <Col xs={6 }>
     <section id='descrip'>
      <h3>Description and Features</h3>
      <p id='blerb'>{this.state.description}</p>
     </section>
     </Col>
     <Col xs={3}>
     <section id='quantity'>
      <p id='price'>Total Price: ${this.state.totalPrice}</p>
      <h3>Quantity</h3>
     <select name='quantity' value={this.state.quantity} onChange={this.handleChange}>
      <option value={1}>1</option>
      <option value={2}>2</option>
      <option value={3}>3</option>
      <option value={4}>4</option>
      <option value={5}>5</option>
     </select>
     <br />
     <button id='add' className='btn btn-primary' onClick={this.handleClick}>Add to Cart</button>
     <br />
     </section>
     </Col>
     </Row>
     </Container>
<hr />
<div>
 <h3>Reviews</h3>
</div>
   </Fragment>
  )
 }
}

export default SingleItem