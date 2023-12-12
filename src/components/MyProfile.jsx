import { Button } from 'react-bootstrap';


const MyProfile = ({currentUser, books}) => {
  
  const myCopies = books.filter(book => book.copies.some(copy => copy.borrower === currentUser.id))
  
    console.log(myCopies);
   

  
  return(

      <div className="px-4 pt-5 my-5 text-right">
        <h1 className="display-4 fw-bold text-body-emphasis">Hello, {currentUser.name} </h1>
        <h2 className="pt-5 pb-4">Books: </h2>
        <h2 className="pt-5 pb-4">User name: {currentUser.name}</h2>
        <h2 className="pt-5 pb-4">User email: {currentUser.email}</h2>
        <div className="d-flex justify-content-between align-items-center border-bottom py-3">
          <h2 className="p-3">Book: {myCopies.map(book => book.title)} </h2>
          <h2 className="p-3">Borrow date:</h2>
          <h2 className="p-3">Due Date:</h2>
          <Button>Return book</Button>
          <Button>Extend book</Button>
        </div>
      </div>
    
  )
}


export default MyProfile