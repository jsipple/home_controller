import React, { Component } from 'react';
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
         loggedIn: false,
         error: ''
       };
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
           password: this.state.password,
           email: this.state.email
        })
         .then(res => {
           this.setState({
             isAuth: true,
             isAdmin: res.data.isAdmin
           })
          this.handleHide()
  
          this.props.login(true, res.data.userName, res.data.isAdmin)

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
       console.log(res)
       if (res.data.loggin === true) {
      this.handleHide()
      this.props.login(true, res.data.email, res.data.isAdmin)
       } else {
         this.setState({
           error: 'incorrect username or password'
         })
       }
     })
    }


     render() {
      // let profile;
      let log;
      if (this.state.loggedIn) {
      // profile = <Link to='/profile'>Profile</Link>
     } else {
       log = <button id='login' className='btn btn-primary' onClick={this.handleShow}>Login</button>
      }
      return (
       <>
        {log}
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
           <p className='error'>{this.state.error}</p>
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