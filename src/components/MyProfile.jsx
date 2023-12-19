import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import BookService from './BookService';



const pictureStyle ={ width: '100px', height: '50' }  
const buttonStyle ={                                 
  backgroundColor: '#e9e4ab', 
  color: "black",
  padding: "10px, 20px",
  marginLeft: "20px",
  marginBottom: "10px",
  borderRadius: "5px",
  cursor: "pointer",
  border: "none"

}

const MyProfile = ({currentUser, books, returnBook, setBooks}) => {

  const extendBook = (bookId, copyId) => {
    const filteredBooksById = books.filter(book => bookId === id)      //iterate to find the boook with  current Id
    const bookCurrentId = filteredBooksById[0]
    //console.log(bookCurrentId); //return object with current book
      if (bookCurrentId) {
        const filteredCopy = bookCurrentId.copies.filter(copy => copy.id === copyId); //iterate for borrower === null 
       // console.log(availableCopies);  //return array of object with available copy (borrower = null)   
       const currentDate = new Date();
       const dueDate = new Date(currentDate.setDate(currentDate.getDate() + 5));
       const extendDate = new Date(dueDate.setDate(dueDate.getDate() + 10)); //extend Date
       console.log(extendDate);
       const updatedExtendDate = {...filteredCopy[0], dueDate: extendDate} 
        //console.log(updatedCopy);  //update 1 copYYYY!!!! and add borrower
        const updatedCopies = bookCurrentId.copies.map(copy => {  //iterate and compare current book and update an array of copiESSSSS!!!
          if(copy.id === updatedExtendDate.id) { // compare the copy of current book and id of copy which extend
            return updatedExtendDate
          } else {
            return copy;
          }
        })
        //console.log(updatedCopies);
      const updatedBook = {...bookCurrentId, copies: updatedCopies} //update an array of Current BOOK
      console.log(updatedBook);
       BookService
        .update(id, updatedBook)
        .then(
          setBooks(books.map(book => {
            if(book.id === id) {
              return updatedBook
            }else {
              return book
            }
          }))
        )
      }
  }

  const myCopies = books.filter(book => book.copies.some(copy => copy.borrower === currentUser.id))
  console.log(myCopies);
  
  return(
    <div style={{ width: '90vw', height: '90vh', paddingRight: '120px', paddingTop: '30px'}}>
      <h1 className="display-4  text-body-emphasis ">Hello, {currentUser.name} </h1>
          <Container  style={{ paddingTop: '50px'}} className="container">
            <Row>
            <Col sm={4}>
             <table className="table table-striped">
               <thead>
                 <tr>
                   <th scope="col">User info:</th>
                 </tr>
               </thead>
               <tbody>
                   <tr>Name:  {currentUser.name}</tr>
                   <tr>Email:  {currentUser.email}</tr>
                   <tr>Password:  {currentUser.password}</tr>
               </tbody>
             </table>
            </Col>
            <Col sm={8}>
            <table className="book-info">
               <thead>
                 <tr>
                   <th scope="col">Books:</th>
                   <th scope="col">Borrow date</th>
                   <th scope="col">Due date:</th>
                   <th scope="col">PIC OF BOOK</th>
                 </tr>
               </thead>
               <tbody>
                  {myCopies.map((book) =>
                    book.copies.map((copy) => (
                      copy.borrower === currentUser.id && (
                        <tr key={copy.id}>
                          <td>{book.title}</td>
                          <td>{copy.borrowedDate}</td>
                          <td>{copy.dueDate}</td>
                          <td><img style={pictureStyle} src={book.url} alt={book.title} /></td>
                          <td>
                            <Button onClick={() => returnBook(book.id)}style={buttonStyle}>Return book</Button>
                            </td>
                            <td>
                              <Button  style={buttonStyle}>Extend book</Button>
                            </td>


                        </tr>
                      )
                    ))
                  )}
                </tbody>
             </table>
            </Col>
            </Row>
          </Container>
    </div>

  )                  
}
export default MyProfile