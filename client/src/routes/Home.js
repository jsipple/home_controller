import React, { Fragment } from 'react';
import Categories from '../components/categories/Categories'
import Jumbotron from '../components/jumbotron/Jumbotron';

const homeRoute = (props) => {
  console.log('PROPS HOME ROUTE ', props)
    return (
      <Fragment>
        <Jumbotron />
        <Categories />
      </Fragment>
    )
  }

  export default homeRoute