import './App.css'
import RegisterForm from './components/RegisterForm'
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from "react-router-dom";
import MainPage from './components/MainPage';
import BookList from './components/BookList'
import { UserLogin } from './components/UserLogIn';
import { useState, useEffect } from 'react'
import NavBar from './components/NavBar';


function App() {
  const [userLogin, setUserLogin] = useState(false)
  const handleLogIn = () => {
    setUserLogin(true)
  }
  const handleLogOut = () => {
    setUserLogin(false)
  }
  const padding = { padding: 10 }


  return (
    <Router>
    <div className="App">
    <NavBar userLogin={userLogin} handleLogOut={handleLogOut}></NavBar>
    </div>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/RegisterForm" element={<RegisterForm  handleLogIn={handleLogIn}/>} />
      <Route path="/BookList" element={<BookList />} />
      <Route path="/UserLogin" element={<UserLogin />} />
    </Routes>
    </Router>
    
  )
}

export default App
