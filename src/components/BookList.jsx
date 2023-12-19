import './MainCss.css'
import { useState } from 'react';

const BookList = ({books, addBook}) => {
  
  const [searchQuery, setSearchQuery] = useState("");
 
  const bookCardStyle = {
    background: '#e9e4ab',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    padding: '20px',
    marginRight: '20px',
    width: "250px",
    height: "450px"
  
  };
  
  const handleSearchQuery = (event) => {
    const value = event.target.value;
    setSearchQuery(value);
  };
  const filteredBooks = books.filter((book) => book.title.toLowerCase().includes(searchQuery.toLowerCase()));
  return(
    
<div>
<input className="search" value={searchQuery} placeholder="search books" type="text" onChange={handleSearchQuery}/>

  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }} >
    { 
        filteredBooks.map((book) => (
        <div key={book.id} style={bookCardStyle}>
          <img src={book.url} style={{ width: '10vw', height: '30vh' }}/>
          <div className='mt-4'>
            <h5 style={{fontStyle: 'italic', m: 1 }}>{book.title}</h5>
            <h7>{book.author}</h7>
          </div>
          <div className='mt-4 flex justify-between items-center'>
            <button onClick={() => addBook(book.id)} className='px-4 py-2 bg-gray-800 text-black text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700'>Add to cart</button>
          </div>
        </div>
      )
      
    )}
  </div>
</div>
  )}
  
export default BookList

