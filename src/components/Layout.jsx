import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Main Page</Link>
          </li>
          <li>
          <Link to="/RegisterForm">Register Form</Link>
          </li>
          <li>
          <Link to="/BookList">BookList</Link>  
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;