import React, { Component, Fragment } from 'react';
import Navbar from '../components/navbar/Navbar'
import CreateDepartment from '../components/createDepartment/CreateDepartment';


const createDepartmentRoute = () => {
    return (
    <Fragment>
      <Navbar />
      <CreateDepartment />
    </Fragment>
    )
  }

  export default createDepartmentRoute