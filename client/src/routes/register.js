import React, { Component, Fragment } from 'react';
import Register from '../components/login/Register'
import Navbar from '../components/navbar/Navbar'


const registerRoute = () => {
    return (
    <Fragment>
      <Navbar />
      <Register />
    </Fragment>
    )
  }

  export default registerRoute