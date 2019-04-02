import React, { Component,Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Categories.css'
// won't need to import the below later should get from database
import lock from '../images/smart-lock.jpg'
import light from '../images/light.jpeg'
import camera from '../images/camera.jpg'
import temp from '../images/temp.jpg'
import alexa from '../images/alexa.jpg'
import axios from 'axios'

class Categories extends Component {
    constructor(props) {
        super(props)
        this.state ={
            departments: []
        }
    }
    // this not working
    componentWillMount = () => {
        let departments;
        // getting what i want from the controller but having issues pulling it into here
        axios.get('/api/findDepartments'
        ).then(res => {
            // only grabbing departmentName need to grab entire data
         // not sure why the console log isn't running
        //  only getting name
         departments = res.data
         let name = [];
         let images = [];
         for (let i = 0; i < res.data.length; i++) {
            name.push(res.data[i].name)
            images.push(res.data[i].image)
         }
         console.log(departments)
         this.setState({
          departments: name,
          image: images
         })
         console.log(this.state)
        })
       }
        render() {
        // need to import object from sql this should create
        // let departments = this.state.departments.map( (x, i) => <section className='image'><img className='category' src={x.image} /><a href='/x.name'></a><div className='caption'>{x.name}</div>)
        let departments = this.state.departments.map( (x,i) => <section key={i} className='image'><a href={`/department/${this.state.departments[i]}`}><img className='category' src={this.state.image[i]} /></a><div className='caption'>{this.state.departments[i]}</div></section>)
        return (
            <Fragment>
                <h1>Departments</h1>
                <hr />
                <div>
                    {departments}
                </div>
            </Fragment>
        )
    }
}

export default Categories