import React, { Fragment } from 'react';
import Navbar from '../components/navbar/Navbar'
import SingleItem from '../components/singleItem/SingleItem'

const singleItemRoute = () => {
    return (
      <Fragment>
        <Navbar />
        <SingleItem />
       </Fragment>
    )
  }

  export default singleItemRoute