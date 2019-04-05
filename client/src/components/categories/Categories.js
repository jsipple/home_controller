import React, { Component,Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Categories.css'
import axios from 'axios'
import { Link } from 'react-router-dom'


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
        let departments = this.state.departments.map( (x,i) => <section key={i} className='image'><Link to={`/department/${this.state.departments[i]}`}><img className='category' src={this.state.image[i]} /></Link><div className='caption'>{this.state.departments[i]}</div></section>)
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