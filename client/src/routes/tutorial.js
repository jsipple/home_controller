import React, { Component, Fragment } from 'react';
import Tutorial from '../components/Tutorial/Tutorial';
import Navbar from '../components/navbar/Navbar'


const tutorialRoute = () => {
    return (
      <Fragment>
        <Navbar />
        <Tutorial />
      </Fragment>
    )
  }

  export default tutorialRoute