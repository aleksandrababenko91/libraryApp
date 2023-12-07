import { useState } from 'react'
import './App.css'
import RegisterForm from './components/RegisterForm'
import BookService from './components/BookService'

function App() {
  const [newUser, setNewUser] = useState([])

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
    <div>
  <RegisterForm 
    addUser={addUser}>
  </RegisterForm>
    </div>
  )
}

export default App
