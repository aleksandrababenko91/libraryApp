import axios from 'axios'

const baseUrl = "http://localhost:3001/users"
const bookUrl = "http://localhost:3001/books"

const getAllBooks = () => {
  const request = axios.get(bookUrl)
  return(
    request.then(response => response.data)
  )
}
const create = (newObject) => {
 const request = axios.post(baseUrl, newObject)
 return (
   request.then(response => response.data)
 )
}
const update = (id, newObject) => {
 const request = axios.put(`${baseUrl}/${id}`, newObject)
 return(
   request.then(response => {response.data})
 )
}
const remove = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then(response => response.data);
};
export default {getAllBooks, create, update, remove }