import BookService from './BookService'
import { useState, useEffect } from 'react'


const BookList = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    BookService
      .getAllBooks()
       .then(initialBooks => {
        setBooks(initialBooks)
      })
  }, []);

  const bookCardStyle = {
    background: 'pink',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    padding: '20px',
    marginRight: '20px',
  };

  

  return(
    
<div >
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }} >
    { books.map(book => (
        <div key={book.id} style={bookCardStyle}>
          <img src={book.url} className='rounded-md h-48' />
          <div className='mt-4'>
            <h2 className='text-lg uppercase font-bold'>{book.title}</h2>
            <h3 className='mt-2 text-gray-600'>Author:{book.author}</h3>
          </div>
          <div className='mt-6 flex justify-between items-center'>
            <button className='px-4 py-2 bg-gray-800 text-black text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700'>Add to cart</button>
          </div>
        </div>
      ))
    }
  </div>
</div>
  )}

export default BookList

