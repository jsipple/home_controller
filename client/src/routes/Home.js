import React, { Component, Fragment } from 'react';
import Navbar from '../components/navbar/Navbar'
import Categories from '../components/categories/Categories'
import Jumbotron from '../components/jumbotron/Jumbotron';

const homeRoute = (props) => {
  console.log('PROPS HOME ROUTE ', props)
    return (
      <Fragment>
        <Navbar />
        <Jumbotron />
        <Categories />
      </Fragment>
    )
  }

  export default homeRoute