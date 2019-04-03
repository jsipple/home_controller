import React, { Component, Fragment } from 'react';
import Items from '../components/items/Items';
import Navbar from '../components/navbar/Navbar'

const itemRoute = () => {
    return (
      <Fragment>
        <Navbar />
        <Items />
      </Fragment>
    )
  }

  export default itemRoute