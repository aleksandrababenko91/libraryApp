import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



const pictureStyle ={ width: '100px', height: '50' }  
const buttonStyle ={                                 
  backgroundColor:" hsl(200, 100%, 50%)", 
  color: "white",
  padding: "10px, 20px",
  marginLeft: "20px",
  marginBottom: "10px",
  borderRadius: "5px",
  cursor: "pointer",
  border: "none"

}

const MyProfile = ({currentUser, books}) => {
  const myCopies = books.filter(book => book.copies.some(copy => copy.borrower === currentUser.id))
  console.log(myCopies);
  
  
  return(
      <div style={{ width: '90vw', height: '90vh' }}>
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
                  book.copies.map((copy) => (
                    copy.borrower === currentUser.id && (
                      <tr key={copy.id}>
                        <td>{book.title}</td>
                        <td>{copy.borrowedDate}</td>
                        <td>{copy.dueDate}</td>
                        <td><img style={pictureStyle} src={book.url} alt={book.title} /></td>
                        <td>
                          <Button style={buttonStyle}>Return book</Button>
                          </td>
                          <td>
                            <Button style={buttonStyle}>Extend book</Button>
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