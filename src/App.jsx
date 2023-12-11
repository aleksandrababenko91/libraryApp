import './App.css'
import RegisterForm from './components/RegisterForm'
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from "react-router-dom";
import MainPage from './components/MainPage';
import BookList from './components/BookList'
import UserLoginForm from './components/UserLoginForm';
import { useState, useEffect } from 'react'
import NavBar from './components/NavBar';
import BookService from './components/BookService';



function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const handleLogIn = async (email, password) => {
    const response = await BookService.getUserWithEmailAndPassword(email, password);
    if (response.length === 0) {
      console.log("User not found or wrong password!");;
      return; // Returning here to exit the function
    }
    setCurrentUser(response[0]); // Response is an array so we get the user object from the first index of it
  }
  const handleLogOut = () => {
    setCurrentUser(null);
  }

  return (
    <Router>
    <div className="App">
    <NavBar currentUser={currentUser} handleLogOut={handleLogOut}></NavBar>
    </div>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/RegisterForm" element={<RegisterForm  handleLogIn={handleLogIn} />} />
      <Route path="/BookList" element={<BookList />} />
      <Route path="/UserLoginForm" element={<UserLoginForm handleLogIn={handleLogIn}/>} />
    </Routes>
    </Router>
    
  )
}

export default App
