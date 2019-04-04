import React, { Component,Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios'
import './Navbar.css'
import { Button, Modal } from 'react-bootstrap';
// import { withRouter } from 'react-router'

class Login extends Component {
    constructor(props) {
        super(props) 
        this.state = {
         email: '',
         password: '',
         show: false,
         loggedIn: false
       };
      }
      componentDidMount = () => {
        if (localStorage.getItem('jwtToken')) {
          console.log(JSON.stringify(localStorage.jwtToken))
        }
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
         axios.post('/api/login', {
          data: {
           password: this.state.password,
           email: this.state.email
          }
        })
         .then(res => {
           const token = res.data
           console.log(res.data)
           localStorage.clear()
          localStorage.setItem('jwtToken', this.state)
          this.handleHide()
         })
        }
       }
     handleSubmit = (e) => {
      e.preventDefault()
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
    }

     render() {
      let log;
      let profile
      if (this.state.loggedIn) {
      log = <a id='login' onClick={this.handleLogout}>logout</a>
      profile = <a href='/profile'>Profile</a>
     } else {
       log = <a id='login' onClick={this.handleShow}>Login</a>
      }
      return (
       <>
        {log}
        {profile}
        <Modal show={this.state.show} onHide={this.handleHide}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>           
           <form>
   <label id='email' htmlFor='email'>Email:</label>
    <br />
    <input value={this.state.email} name='email' type='text' onChange={this.handleChange} onKeyPress={this.handleKeyPress} />
    <br />
          <label id='pass' htmlFor='password'>Password:</label>
    <br />
    <input value={this.state.password} name='password' type='password' onChange={this.handleChange} onKeyPress={this.handleKeyPress} />
   <br />
           </form>
           </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleHide}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleSubmit}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
// const LoginComponent = withRouter(Login)
export default Login