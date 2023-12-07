import { useState, useEffect } from 'react'
import './App.css'
import RegisterForm from './components/RegisterForm'
import BookService from './components/BookService'
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from "react-router-dom";
import NavBar from './components/NavBar'

function App() {
  const padding = { padding: 10 }
  const [books, setBooks] = useState([])

  useEffect(() => {
    BookService
      .getAllBooks()
       .then(initialBooks => {
        setBooks(initialBooks)
      })
  }, []);


  const BookList = () => {
    return(
      <div className="book-list">
        {books.map(book => (
          <div key={book.id} className="book-item">
            <img src={book.url}/>
            <h2>{book.title}</h2>
            <p>Author: {book.author}</p>
            <p>ISBN: {book.ISBN}</p>
          </div>
        ))}
      </div>
    )
  }
  return (
    <Router>

    <div className="App">
      <Link style={padding} to="/">NavBar</Link>
      <Link style={padding} to="/RegisterForm">Register Form</Link>
      <Link style={padding} to="/BookList">BookList</Link>  
    </div>
    <Routes>
      <Route path="/" element={<NavBar />} />
      <Route path="/RegisterForm" element={<RegisterForm />} />
      <Route path="/BookList" element={<BookList />} />
    </Routes>
    </Router>
    
  )
}

export default App
