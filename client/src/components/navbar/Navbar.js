import React, { Component,Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Navbar.css'
import axios from 'axios'
import { Button, Modal } from 'react-bootstrap';
import Login from './Modal'

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
          email: '',
          password: '',
          show: false,
          loggedIn: false,
          searched: '',
        };
       }
       componentDidMount = () => {
        //  axios.get('/api/login', (req, res) => {
        //    console.log('a')
        //  })
       }
        handleShow = () => {
          this.setState({ show: true });
        };
    
        handleHide = () => {
          this.setState({ show: false });
        };
        handleChange = (e) => {
         e.preventDefault()
         this.setState({
          [e.target.name]: e.target.value
         })
        }
        handleKeyPress = (e) => {
         if (e.key === 'Enter') {
          console.log(this.state)
          axios.post('/api/login', {
           data: {
            password: this.state.password,
            email: this.state.email
           }
         })
          .then(res => {
           console.log(res.data)
           this.setState({
            loggedIn: true
           })
           console.log(this.state)
           this.handleHide()
          })
         }
        }
      handleSubmit = (e) => {
       e.preventDefault()
       console.log(this.state)
       axios.post('/api/login', {
         password: this.state.password,
         email: this.state.email
      })
      .then(res => {
       console.log(res.data)
       this.setState({
        loggedIn: true
       })
       this.handleHide()
       console.log(this.state)
      })
     }
     handleLogout = () => {
      // having issues with this logout code
      axios.get('/api/logout')
    .then(() => {
     this.setState({
       email: '',
       password: '',
       show: false,
       loggedIn: false
     })
     // this.props.history.push('/home')
    })
    };

    searchOnChange = (e) => {
      e.preventDefault();
      this.setState({ searched: e.target.value });
      console.log(this.state.searched);
    };
    searchOnSubmit = (e) => {
      e.preventDefault();
      axios.post('/items/:searched?', {
        data: {
          itemName: this.state.searched,
        }
      }).then(res => {
        console.log(res.data);
      });
    };

    render() {
        return (

<nav className="navbar navbar-expand-lg navbar-light bg-light">

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/home">Home<span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="/department">store<span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="/devices">Manage your devices<span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="/tutorial">Getting started<span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="/createDepartment">Create Department<span className="sr-only">(current)</span></a>
      </li>
    </ul>
    <a className="nav-link" href="/register">register<span className="sr-only">(current)</span></a>
        <Login />
    <form onSubmit= {this.searchOnSubmit} className="form-inline my-2 my-lg-0">
      <input onChange= {this.searchOnChange} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
        )
    }
}

export default Navbar