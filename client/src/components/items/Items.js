import React, { Component,Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Items.css'
import axios from 'axios'

class Items extends Component {
    constructor(props) {
        super(props)
        this.state ={
            items: []
        }
    }
    componentDidMount = () => {
        axios.get('/api/:departments')
        .then(res => {
            let items = res.items
            this.setState({items})
        })
    }
    render() { 
        // need to import object from sql this should create

        return (
            <Fragment>
                <div>
                    {/* once set up only need the line 21 */}
                    {/* {departments} */}
                    {/* this.state.items.map( (x, i) => <section className='image'><img className='category' src={x.image}<a href='/x.name'></a><div className='caption'>{x.name}</div>)  */}
                </div>
            </Fragment>
        )
    }
}

export default Items