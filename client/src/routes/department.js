import React, { Component, Fragment } from 'react';
import Navbar from '../components/navbar/Navbar'
import Categories from '../components/categories/Categories'

const departmentRoute = () => {
    return (
      <Fragment>
        <Navbar />
        <Categories />
    </Fragment>
    )
  }

  export default departmentRoute