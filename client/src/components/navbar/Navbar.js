import React, { Component,Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Navbar.css'

class Navbar extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (

<nav class="navbar navbar-expand-lg navbar-light bg-light">

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/home">Home<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="/department">store<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="/devices">Manage your devices<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="/tutorial">Getting started<span class="sr-only">(current)</span></a>
      </li>
    </ul>
    <button class='btn btn-primary m-2'>login</button>
    <button class='btn btn-primary m-2'>sign up</button>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
        )
    }
}

export default Navbar