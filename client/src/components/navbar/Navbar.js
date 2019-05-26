import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Navbar.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import cartImg from '../images/cart.png'

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
          email: '',
          password: '',
          show: false,
          loggedIn: false,
          searched: '',
          url: ''
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
       loggedIn: false,
       inAuth: false
     })
    })

    };
    
    searchOnChange = (e) => {
      e.preventDefault();
      this.setState({ searched: e.target.value });
      this.setState({ url: '/findItems/'+ this.state.searched})
    };
    searchOnSubmit = (e) => {
      e.preventDefault();
      axios.get('/api/findItems/'+ this.state.searched
      ).then(res => {
        console.log(res.data);
        //this.setState({ searched: ''});
      });
    };

    handleLogout = () => {
      // having issues with this logout code
      axios.get('/api/logout')
    .then(() => {
      // need to call a props here
      
     this.setState({
       email: '',
       password: '',
       show: false,
       isAuth: false,
       isAdmin: false
     })
    //  location.reload()
    })
     }
    render() {
      let adminButton
      if (this.props.admin) {
        adminButton = <li className="nav-item active"><Link className="nav-link" to="/createDepartment">Create Department<span className="sr-only">(current)</span></Link></li>
        }
        return (

<nav className="navbar navbar-expand-lg navbar-light bg-light">

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home<span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active">

        <Link className="nav-link" to="/department">store<span className="sr-only">(current)</span></Link>

      </li>
      <li className="nav-item active">
        <a className="nav-link" href="https://home-controller12345.herokuapp.com">Manage your devices<span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/tutorial">Getting started<span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to={`/orderHistory/${this.props.user}`}>Order History<span className="sr-only">(current)</span></Link>
      </li>
          {adminButton}
    </ul>
        <a href='/home' onClick={this.handleLogout}>Logout</a>

    <form onSubmit= {this.searchOnSubmit} className="form-inline my-2 my-lg-0">
      <input onChange= {this.searchOnChange} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <Link to= {this.state.url} className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</Link>
    </form>
    <Link to= {`/cart/${this.props.user}`} className="cartBtn btn btn-outline-success my-2 my-sm-0" type="submit"><img className='cart' src={cartImg}></img></Link>
  </div>
</nav>
        )
    }
}

export default Navbar