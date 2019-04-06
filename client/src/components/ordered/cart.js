import React, { Component,Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './cart.css'
import axios from 'axios'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class Carts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            department: [],
            item: [],
            image: [],
            id: [],
        }
    }
    componentDidMount = () => {
        let path = window.location.pathname
        console.log(path)
        axios.get('/api' + path
        ).then(res => {
            // problem is not getting to here getting correct data though
            let items = [];
            let images = [];
            let ids = [];
            console.log(res.data)
            for (let i = 0; i < res.data.length; i++) {
                items.push(res.data[i].itemName)
                images.push(res.data[i].image)
                ids.push(res.data[i].id)
            }
            // setState not working coming back
            this.setState({
                department: path,
                item: items,
                image: images,
                id: ids,
            })
        });
    }


    handleSubmit = (e)=> {
        e.preventDefault();
        let email= window.location.pathname.split('/')
        let order= {
            itemName: this.state.item,
            image: this.state.images,
            email: email[2]
        }
        axios.post('/api/orderHistory', order)
        .then(res=> {
            console.log('you added to the order history')
            let path = window.location.pathname
            axios.delete('/api' + path)
            .then(res => {
                console.log('you bought all of your orders!')
                this.handleShow();
            });
        })
    }

    render() { 
        // need to import object from sql this should create
        let items = this.state.item.map( (x,i) => <Row id='items' key={i} ><Col xs={3}><img className='itemImg' src={this.state.image[i]} /></Col><Col xs={8}><h1>{this.state.item[i]}</h1><br /></Col></Row>)
        
        return (
            <Fragment>
                <Container>
                    {/* once set up only need the line 21 */}
                    <h2>You're Cart</h2>
                    {items}
                    <button onClick= {this.handleSubmit} className="btn btn-outline-success my-2 my-sm-0" type="submit">Buy</button>
                    {/* this.state.items.map( (x, i) => <section className='image'><img className='category' src={x.image}<a href='/x.name'></a><div className='caption'>{x.name}</div>)  */}
                </Container>
            </Fragment>
        )
    }
}

export default Carts