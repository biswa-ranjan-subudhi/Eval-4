import React from 'react'

const Login = () => {
    const [formDetails, setFormDetails] = React.useState({
        email: "",
        password: ""
    })

    const handleChange = (e) =>{
        const {name, value} = e.target;
        
        setFormDetails({
            ...formDetails,
            [name] : value
        })

    }

    const handleSubmit = (e) =>{
        e.prevenDefault();
    }

    const {email,password} = formDetails;
  return (
    <div>
        <form onSubmit = {handleSubmit}>
        <h3>Login Page</h3>
        <input type="text" placeholder='Enter Email' value={email} onChange={handleChange}/>
        <br/>
        <input type="text" placeholder='Enter Password' value={password} onChange={handleChange}/>
              <br />
              <br/>
        <input style={{width: '100px'}} type="Submit"  value="Login"/>
        </form>
    </div>
  )
}

export default Login;