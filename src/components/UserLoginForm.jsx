import React from "react";
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button, Alert } from 'react-bootstrap';  

const UserLoginForm = ({handleLogIn, currentUser}) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState({})
  const [successMessage, setSuccessMessage] = useState('');

  const handleErrors = () => {
    const currentErrors = {}
    if(email.length < 5) {
      currentErrors.email = "Email must include at least 5 letters"
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
    const errors = handleErrors()
    if(Object.values(errors).length > 0) {
      // do not anything if found errors
      console.log(errors);
      return
    }
    handleLogIn(email, password)
    const userInfo = {email:email, password:password}
    console.log(userInfo);
    setSuccessMessage('Welcome ');

  }
 

 
  return (
    <Container fluid>
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




export default UserLoginForm