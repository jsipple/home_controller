import React, { Component,Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Items.css'
import axios from 'axios'

class Items extends Component {
    constructor(props) {
        super(props)
        this.state = {
            department: [],
            item: [],
            image: [],
            id: []
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
                id: ids
            })
            console.log(this.state)
        })
    }
    render() { 
        // need to import object from sql this should create
        let items = this.state.item.map( (x,i) => <section key={i} className='image'><a href={`${this.state.department}/${this.state.id[i]}`}><img className='item' src={this.state.image[i]} /></a><div className='caption'>{this.state.item[i]}</div></section>)
        return (
            <Fragment>
                <div>
                    {/* once set up only need the line 21 */}
                    {items}
                    {/* this.state.items.map( (x, i) => <section className='image'><img className='category' src={x.image}<a href='/x.name'></a><div className='caption'>{x.name}</div>)  */}
                </div>
            </Fragment>
        )
    }
}

export default Items