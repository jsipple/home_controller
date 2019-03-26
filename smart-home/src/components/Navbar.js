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
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#">store</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link disabled" href="#">download</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link disabled" href="#">getting started</a>
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