import React from "react";
import { useState } from 'react'
import PropTypes from 'prop-types';
import BookService from './BookService'


const RegisterForm = () => {
  const [newUser, setNewUser] = useState([])
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState({})
  const handleErrors = () => {
    const currentErrors = {}
    if(email.length < 5) {
      currentErrors.email = "Email must include at least 5 letters"
    }
    if(name.length < 1) {
      currentErrors.name = "Name must include at least 1 letter"
    }
    if(password.length < 5) {
      currentErrors.password = "Password maust include at least 5 letetrs"
    }
    setErrors(currentErrors)
      return(
        currentErrors
      )
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    addUser(email, name, password)
    const errors = handleErrors()
    if(Object.values(errors).length > 0) {
      // do not anything if found errors
      console.log(errors);
      return
    }
    const userInfo = {email:email, name:name, password:password}
    console.log(userInfo);
  }
  
  const addUser = (email, name, password) => {
    const userInfo = {
      name: name,
      email: email,
      password: password
    }
    BookService
      .create(userInfo)
       .then(returnedUser => {
       setNewUser([...newUser, returnedUser])
      })
  }
  
  return (
    <form>
      <label>E-mail</label>
      <input name="email"  value={email} onChange={(event) => setEmail(event.target.value)}>
      </input>
      {errors.email && <div className="error">{errors.email}</div>}
      <label>Name</label>
      <input name="name"  value={name} onChange={(event) => setName(event.target.value)}>
      </input>
      {errors.name && <div className="error">{errors.name}</div>}
      <label>Password</label>
      <input name="password"  value={password} onChange={(event) => setPassword(event.target.value)}>
      </input>
      {errors.password && <div className="error">{errors.password}</div>}
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>

  )
}

RegisterForm.propTypes = {
  addUser: PropTypes.func.isRequired,
};


export default RegisterForm