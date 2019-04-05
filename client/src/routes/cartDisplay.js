import React, { Component, Fragment } from 'react';
import Items from '../components/items/Items';
import Navbar from '../components/navbar/Navbar'

const itemRoute = () => {
    return (
      <Fragment>
        <Navbar />
        <h1>Your Cart</h1>
        <Items />
      </Fragment>
    )
  }

  export default itemRoute