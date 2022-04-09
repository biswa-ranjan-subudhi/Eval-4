import React from 'react'
import { Link } from "react-router-dom";

const Register = () => {

    const handleSubmit = (e) =>{
        e.prevenDefault();
    }
  return (
    <>
      <form onSubmit={handleSubmit}>
          <h3>Registration Page</h3>
          <input type="text" placeholder='Enter Name'/><br/>
          <input type="text" placeholder='Enter Email'/><br/>
          <input type="password" placeholder='Enter Password'/><br/>
          <input type="text" placeholder='Enter Username'/><br/>
          <input type="number" placeholder='Enter Mobile number'/><br/>
          <input type="text" placeholder='Enter Description'/><br/><br/>
          <input type="submit" value="SUBMIT"/>
      </form><br/>
        <Link to="/login"><button>Go to Login</button></Link>
    </>
  )
}

export default Register;