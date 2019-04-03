import React, { Component, Fragment } from 'react';
import Navbar from '../components/navbar/Navbar'
import Profile from '../components/profile/Profile';

const profileRoute = () => {
    return (
      <Fragment>
        <Navbar />
        <Profile />
      </Fragment>
    )
  }

  export default profileRoute