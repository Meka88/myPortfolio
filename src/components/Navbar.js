import { NavLink, Link } from "react-router-dom";
import './styles/navbar.css';

export default function Navbar() {
  return (
    <nav>
      <h4>
        <Link to="/">Portfolio</Link>
      </h4>
      <ul>
        <li>
          
          <NavLink className='nav-link' exact to="/contact">
           Contact
          </NavLink>
          
        </li>
        <li>
          
            <NavLink className='nav-link' exact to="/projects">
              Projects
            </NavLink>
          
        </li>
        <li>
          
            <NavLink className='nav-link' exact to="/resume">
              Resume
            </NavLink>
          
        </li>
      </ul>
    </nav>
  );
}
