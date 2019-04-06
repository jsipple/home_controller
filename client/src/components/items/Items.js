import React, { Component,Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Items.css'
import axios from 'axios'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'


class Items extends Component {
    constructor(props) {
        super(props)
        this.state = {
            department: [],
            item: [],
            image: [],
            id: [],
            description: []
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
            let descriptions = [];
            console.log(res.data)
            for (let i = 0; i < res.data.length; i++) {
                items.push(res.data[i].itemName)
                images.push(res.data[i].image)
                ids.push(res.data[i].id)
                descriptions.push(res.data[i].itemDesc)
            }
            // setState not working coming back
            this.setState({
                department: path,
                item: items,
                image: images,
                id: ids,
                description: descriptions
            })
            console.log(this.state)
        });
    }
    render() { 
        // need to import object from sql this should create
        let items = this.state.item.map( (x,i) => <Row id='items' key={i} ><Col xs={3}><Link to={`${this.state.department}/${this.state.id[i]}`}><img alt='item not found' className='itemImg' src={this.state.image[i]} /></Link></Col><Col xs={8}><h1>{this.state.item[i]}</h1><br /><p>{this.state.description[i].substring(0,100)}...</p></Col></Row>)
        
        return (
            <Fragment>
                <Container>
                    {/* once set up only need the line 21 */}
                    {items}
                    {/* this.state.items.map( (x, i) => <section className='image'><img className='category' src={x.image}<a href='/x.name'></a><div className='caption'>{x.name}</div>)  */}
                </Container>
            </Fragment>
        )
    }
}

export default Items