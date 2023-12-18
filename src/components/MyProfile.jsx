import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



const MyProfile = ({currentUser, books}) => {
  const myCopies = books.filter(book => book.copies.some(copy => copy.borrower === currentUser.id))
  console.log(myCopies);
 
  return(
      <div>
        <h1 className="display-4 fw-bold text-body-emphasis">Hello, {currentUser.name} </h1>
        {/* <h2 className="p-3">Book: {myCopies.map(book => book.title)} </h2> */}
        <Container className="container">
          <Row>
          <Col>
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
          <Col>
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
               <tr key={book}>
                 <th>{book.title}</th>
                 {/* <td>{book.url}</td> */}
                 <td>{book.copies.borrowedDate}</td>
                 <td>{book.copies.dueDate}</td>
                 <td><Button>Return book</Button></td>
                 <td><Button>Extend book</Button></td>
               </tr>
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