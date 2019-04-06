import React, { Component,Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './cart.css'
import axios from 'axios'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class OrderHistory extends Component {
    constructor(props) {
        super(props)
        this.state = {
            item: [],
            image: [],
        }
    }
    componentDidMount = () => {
        let path = window.location.pathname
        axios.get('/api' + path
        ).then(res => {
            // problem is not getting to here getting correct data though
            let items = [];
            let images = [];
            let quantity = []
            let price = [];
            console.log(res.data)
            for (let i = 0; i < res.data.length; i++) {
                items.push(res.data[i].itemName)
                images.push(res.data[i].image)
                quantity.push(res.data[i].quantity)
                price.push(res.data[i].total)
            }
            // setState not working coming back
            this.setState({
                item: items,
                image: images,
                quantity: quantity,
                price: price
            })
            console.log(this.state)
        });
    }
    render() { 
        // need to import object from sql this should create
        let items = this.state.item.map( (x,i) => <Row id='items' key={i} ><Col xs={3}><img className='itemImg' src={this.state.image[i]} /></Col><Col xs={8}><h1>{this.state.item[i]}</h1><p>quantity: {this.state.quantity[i]}</p><br /><p>total: {this.state.price[i]}</p><br /></Col></Row>)
        
        return (
            <Fragment>
                <Container>
                    {/* once set up only need the line 21 */}
                    <h2>Your Order History</h2>
                    {items}
                    {/* this.state.items.map( (x, i) => <section className='image'><img className='category' src={x.image}<a href='/x.name'></a><div className='caption'>{x.name}</div>)  */}
                </Container>
            </Fragment>
        )
    }
}

export default OrderHistory