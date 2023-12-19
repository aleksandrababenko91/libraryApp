import React from "react";
import { useState } from 'react'
import PropTypes from 'prop-types';
import BookService from './BookService'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button, Alert } from 'react-bootstrap';  


const RegisterForm = ({handleLogIn, baseUrl}) => {
  const [newUser, setNewUser] = useState([])
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState({})
  const [successMessage, setSuccessMessage] = useState('');

  const handleErrors = () => {
    const currentErrors = {}
    if(email.length < 5 || baseUrl.users.some(user => user.email === email)) {
      currentErrors.email = "Email must include at least 5 letters or email already exist"
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
    // check if user exists in Book service
    addUser(email, name, password)
    const errors = handleErrors()
    if(Object.values(errors).length > 0) {
      // do not anything if found errors
      console.log(errors);
      return
    }
    handleLogIn()
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
       setSuccessMessage('Registration Successful!');
      })
      .catch(error => {
        // Handle errors if any occurred during user creation
        console.error('Error creating user:', error);
      });
  }
  
  return (
    <Container fluid >
      {successMessage && <Alert variant="success">{successMessage}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            isInvalid={!!errors.email}
          />
          {errors.email && <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            isInvalid={!!errors.name}
          />
          {errors.name && <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            isInvalid={!!errors.password}
          />
          {errors.password && <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>}
        </Form.Group>

        <Button variant="success" type="submit" className="w-100 mb-2">
          Submit
        </Button>
      </Form>
    </Container>

  )
}

RegisterForm.propTypes = {
  addUser: PropTypes.func.isRequired,
};


export default RegisterForm
